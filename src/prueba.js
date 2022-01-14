// const miModulo = require("./index.js");

const { existsPath,isAbsolutePath ,isDirectory,readDirectory,isExtMd,getArrayFilesMd,extrLinkFromFile} = require('./api.js');


console.log(existsPath("./testMode"));
console.log(isAbsolutePath("C:\Users\L-63\Documents\L016\LIM016-md-links"));
console.log(isDirectory("./testMode"));
console.log(readDirectory("./testMode"));
console.log(isExtMd("./testMode/testMode2/file3.md"));
console.log(getArrayFilesMd("./testMode"));
console.log(extrLinkFromFile("./testMode"))

