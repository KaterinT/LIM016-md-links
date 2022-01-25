// const miModulo = require("./index.js");


import {getArrayFilesMd,existsPath,isAbsolutePath,readDirectory,extrLinkFromFile,validateLinks} from './api.js';

const arrayLinksOfRouteTrue = [
  {
    href: 'https://github.com/error404omg',
    text: 'the Node.js in Git Hub.',
    file: 'C:\\Users\\L-63\\Documents\\L016\\LIM016-md-links\\testMode\\file.md'
  },
  {
    href: 'https://markdown.es/sintaxis-markdown/',
    text: 'sintaxis Markdown',
    file: 'C:\\Users\\L-63\\Documents\\L016\\LIM016-md-links\\testMode\\file2.md'
  },
  {
    href: 'https://nodejs.org/enh/',
    text: 'Node js',
    file: 'C:\\Users\\L-63\\Documents\\L016\\LIM016-md-links\\testMode\\testMode2\\file5.md'       
  }
];

// console.log(existsPath("./testMode"));
// console.log(isAbsolutePath('C:\\Users\\L-63\\Documents\\L016\\LIM016-md-links\\testMode\\file.md'));
// console.log(isDirectory("./testMode"));
// console.log(readDirectory("./testMode"));
// console.log(isExtMd("./testMode/testMode3SinFiles")).src/;
// console.log(getArrayFilesMd("./testMode/file.md"));
// console.log(extrLinkFromFile("./testMode/file.md"));
validateLinks(arrayLinksOfRouteTrue);