use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use std::path::{{Path}};
         
use cio_curl_effector_imports::{HttpHeader};

#[derive(Debug,Serialize, Deserialize, Clone)]
pub enum MetadataValue {
    String(String),
    Float(f64),
    Integer(u64),
    Delete,
}

pub type MetadataKeyValues = HashMap<String, MetadataValue>;

#[derive(Debug,Serialize, Deserialize, Clone)]
pub enum Region {
    FRA1,
    NYC1,
}

#[derive(Debug,Serialize, Deserialize, Clone)]
pub struct RegionPolicy {
    pub id: Region,
    pub desired_replication_count: u8,
}

#[derive(Debug,Serialize, Deserialize, Clone)]
pub struct PinPolicy {
    pub regions: Vec<RegionPolicy>,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct PinMetadata {
    pub name: Option<String>,
        // pub keyvalues: MetadataKeyValues,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct PinOptions {
    // pub host_nodes: Option<Vec<String>>,
    // pub custom_pin_policy: Option<PinPolicy>,
    pub cidVersion: Option<u8>
}


#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct PinData  {
    pub pinata_metadata: Option<PinMetadata>,
    pub pinata_options: Option<PinOptions>
}

pub fn trimPath(path: &Path, folder: &String) -> String {

    let pathEls: Vec<&str> = path.to_str().unwrap().split('/').collect();
    let index =  pathEls.iter().position(|s| s == folder).unwrap();
    pathEls[index..].join("/").to_string()
}

pub fn headers(pinataJWTKey: String, boundary: &String) -> Vec<HttpHeader> {

    let h1 = HttpHeader {
        name: "Authorization".to_string(),
        value: format!("Bearer {}", pinataJWTKey)
    };
  
    let h2 = HttpHeader {
      name: "Content-type".to_string(),
      value: format!("multipart/form-data; boundary={}", boundary)
    };

    vec![h1,h2]
}

pub fn pinData(name: &String) -> PinData {

    PinData {
        pinata_metadata: Some(PinMetadata {
          name: Some(name.to_string()),
          // keyvalues: HashMap::new()
        }),
        pinata_options : Some(PinOptions{
          cidVersion: Some(1),
        //   custom_pin_policy: None,
        //   host_nodes: None
        })
    }
}       



// pub fn formatResult(r: &String) -> PinataResult {

//     println!("{:?}",r);

//     let v: Value = serde_json::from_str(r).unwrap();

//     PinataResult {
//         ipfsHash: v["IpfsHash"].to_string().replace("\"",""),
//         pinSize: v["PinSize"].as_u64().unwrap(),
//         timestamp: v["Timestamp"].to_string().replace("\"",""),
//         isDuplicate: v["isDuplicate"].as_bool().unwrap()                
//     }

// }

