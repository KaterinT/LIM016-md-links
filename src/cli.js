#!/usr/bin/env node
import * as mdLinks from './mdLinks.js';
// const [,, ...args] = process.argv;
// console.log(args);
// console.log(process.argv[2]);

const option = process.argv.slice(3);
const validate = option[0] === '--validate';


// mdLinks.mdLinks("./testMode")
//   .then(resul => resul)
//   .catch(resul => resul)

if(!validate){
  mdLinks.mdLinks(process.argv[2], {validate:false} )
    .then(resul => console.log(resul))
    .catch(resul => console.log(resul))
}else {
  mdLinks.mdLinks(process.argv[2], {validate:true} )
    .then(resul => console.log(resul))
    .catch(resul => console.log(resul))
}