#!/usr/bin/env node
const mdLinks = require('./mdLinks.js');
console.log(process.argv[2]);


// mdLinks.mdLinks("./testMode")
//   .then(resul => resul)
//   .catch(resul => resul)


  mdLinks.mdLinks(process.argv[2],process.argv[3])
  .then(resul => resul)
  .catch(resul => resul)