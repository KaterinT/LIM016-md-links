const api = require ('./api.js');
const chalk = require ('chalk');


const mdLinks = (path,options) => new Promise ((resolve,reject) => {
  const arrayLinks = api.extrLinkFromFile(path);
  
  if(api.existsPath(path)) {
    if (api.extrLinkFromFile(path).length!==0) {
      if(options === '--validate') {
        resolve(console.log((api.validateLinks(arrayLinks))));
      }else {
        resolve(console.log((arrayLinks)));
      }
    }else{
      reject(console.log(chalk.bold.red('no hay links en este archivo')))
    }
    // resolve(chalk.blue(path));
  }else {
    reject((console.log(chalk.bold.red('errooor path no exist'))));
  };
})

module.exports = {
  mdLinks,
}

