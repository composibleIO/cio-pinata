Composible interface for Fluence network to pin files and folders to [Pinata](https://www.pinata.cloud/). JWT token needed.

to run: 

```
fluence local up
fluence deploy
fluence run -f 'uploadFile("<jwt>")'
fluence run -f 'uploadFolder("<jwt>")'
```

For a usage example see [the aqua code](src/aqua.main.aqua) for that test. 

To use in a project clone this repository in a seperate folder and then symlink 

```
ln -s  <relpathToFolder>/cioPinata/src/services/cioPinata src/services/cioPinata
```