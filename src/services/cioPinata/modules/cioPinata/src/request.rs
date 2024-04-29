use marine_rs_sdk::get_call_parameters;

use cio_curl_effector_imports as curl;
use cio_curl_effector_imports::{CurlRequest};
use crate::{AMResponse, pinata, multipart::Form};
use chrono::{Utc};
use std::fs;
use serde_json::Value;
use std::path::{PathBuf};

pub fn run(mut form: Form, name: &String, pinataJWTKey: String) -> AMResponse {

    let url = String::from("https://api.pinata.cloud/pinning/pinFileToIPFS");
    let pin_data = pinata::pinData(name);

    if let Some(metadata) = pin_data.pinata_metadata {
        form.writeText("pinataMetadata", &serde_json::to_string(&metadata).unwrap());
    }
    if let Some(option) = pin_data.pinata_options {
        form.writeText("pinataOptions", &serde_json::to_string(&option).unwrap());
    }

    let request = CurlRequest {
        url: url.clone(),    
        headers: pinata::headers(pinataJWTKey, &form.boundary())
    };

    let source_path = crate::vault_path("pinata_body");
    let target_path = crate::vault_path("pinata_response");
    let buf = form.writer.finish().unwrap(); 
    let body = String::from_utf8(buf.clone()).unwrap();
    let _ = fs::write(PathBuf::from(source_path.clone()), body.clone());

    let response = curl::curl_post_binary(request, source_path, target_path.clone());
    let timestamp = Utc::now().timestamp_millis();
    let cp = get_call_parameters();

    if response.success {
        let result = fs::read_to_string(target_path.clone()).unwrap();
        let v: Value = serde_json::from_str(&result).unwrap();

        return AMResponse {
            success: true,
            result: v["IpfsHash"].to_string().replace("\"",""),
            result_raw: result,
            timestamp,
            host_id: cp.host_id
        }  

    } else {

        return AMResponse {
            success: false,
            result_raw: String::from(""),
            result: response.error,
            timestamp,
            host_id: cp.host_id
        }  
    }




}