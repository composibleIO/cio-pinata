Composible interface for Fluence network to pin files and folders to Pinata. JWT token needed.

```
data PinataResult:
  ipfsHash: string
  pinSize: u64
  timestamp: string
  isDuplicate: bool

service CioPinata("cioPinata"):
  addFolder(folder: string, pinataJWTKey: string) -> PinataResult
```