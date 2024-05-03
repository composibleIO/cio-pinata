#![allow(non_snake_case)]
use marine_rs_sdk::marine;
use marine_rs_sdk::module_manifest;
use serde::{{Serialize,Deserialize}};
use std::fs;
use walkdir::WalkDir;
use std::path::{{PathBuf,Path}};
use cio_response_types::AMResponse;

module_manifest!();

mod multipart;
mod pinata;   
mod request;

pub fn main() {}

#[marine]
pub fn addAsFile(content: String, name: &String, pinataJWTKey: String) -> AMResponse {

  let path = vault_path("pin_tmp");
  let _ = fs::write(PathBuf::from(path.clone()), content);

  let mut form = multipart::Form::new();
  form.writeFile(Path::new(&path), name);
  
  request::run(form, &name, pinataJWTKey)
   
}

#[marine]
pub fn addFolder(folder: String, pinataJWTKey: String) -> AMResponse {

  let mut form = multipart::Form::new();
  let path = vault_path(&folder);

  let files = fs::read_dir(path.clone())
    .unwrap()
    .filter_map(|e| e.ok())
    .map(|e| e.path())
    .collect::<Vec<_>>();

  for file_path in files {
    let base_path = Path::new(&file_path);
    if base_path.is_dir() {
      for entry_result in WalkDir::new(base_path) {
        let entry = entry_result.unwrap();
        let path = entry.path();
        if path.is_dir() { continue }

        let trimmedPath = pinata::trimPath(path, &folder);
        form.writeFile(path, &trimmedPath);
      }

    } else {

      let trimmedPath = pinata::trimPath(base_path, &folder);
      form.writeFile(base_path, &trimmedPath);
    }
  }
    
  request::run(form, &folder, pinataJWTKey)
  
}

fn vault_path(filename: &str) -> String {
    let cp = marine_rs_sdk::get_call_parameters();
    format!("/tmp/vault/{}-{}/{}", cp.particle.id, cp.particle.token, filename)
}