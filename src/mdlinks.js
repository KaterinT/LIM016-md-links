const api = require ('./api.js');
const chalk = require ('chalk');

const mdLinks = (path,options) => new Promise ((resolve,reject) => {
  if(api.existsPath(path)) {
    resolve(console.log((api.extrLinkFromFile(path))));
    // resolve(chalk.blue(path));
  }else {
    reject(chalk.red('errooor path no exist'));
  };
})

module.exports = {
  mdLinks,
}

