import * as api from './api.js';
import chalk from 'chalk';


export const mdLinks = (path,option) => new Promise ((resolve,reject) => {
    if(api.existsPath(path)) {
      // console.log('api.existsPath(path)',api.existsPath(path))
      const arrayLinks = api.extrLinkFromFile(path);
      
        if (arrayLinks.length!==0) {
          if(option.validate) {
            resolve((api.validateLinks(arrayLinks)));
          }else {
            resolve((arrayLinks));
          }
        }else{
          reject(chalk.bold.red('no hay links en este archivo'))
        }
      // resolve(chalk.blue(path));
    }else {
      // console.log('api.existsPath(path) en reject:',api.existsPath(path))
      reject((chalk.bold.red('error path no exist')));
    };
})

