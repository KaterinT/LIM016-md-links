#!/usr/bin/env node
const mdLinks = require('./mdLinks.js');
// console.log(process.argv);


mdLinks.mdLinks("./testMode")
  .then(resul => resul)
  .catch(resul => resul)