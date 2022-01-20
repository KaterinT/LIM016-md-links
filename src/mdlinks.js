import * as api from './api.js';
import {welcome,errorPath,errorNoLinks} from './utils.js';

export const mdLinks = (path,option) => new Promise ((resolve,reject) => {
    if(api.existsPath(path)) {
      // console.log('api.existsPath(path)',api.existsPath(path))
      const arrayLinks = api.extrLinkFromFile(path);
      
        if (arrayLinks.length!==0) {
          welcome();
          if(option.validate) {
            resolve((api.validateLinks(arrayLinks)));
          }else {
            resolve((arrayLinks));
          }
        }else{
          reject((errorNoLinks()))
        }
      // resolve(chalk.blue(path));
    }else {
      // console.log('api.existsPath(path) en reject:',api.existsPath(path))
      reject( errorPath());
    };
})

