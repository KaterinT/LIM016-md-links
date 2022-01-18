#!/usr/bin/env node
import * as mdLinks from './mdLinks.js';
import {totalAndUnique,broken} from './cliStats.js';
// const [,, ...args] = process.argv;
// console.log(args);
// console.log(process.argv[2]);

const option = process.argv.slice(2);
// const validate = option[0] === '--validate';
// const stats = option[0] === '--stats';

// if(!validate){
//   mdLinks.mdLinks(process.argv[2], {validate:false} )
//     .then(resul => console.log(resul))
//     .catch(resul => console.log(resul))
// }else {
//   mdLinks.mdLinks(process.argv[2], {validate:true} )
//     .then(resul => console.log(resul))
//     .catch(resul => console.log(resul))
// }
if (option.length === 1) {
  mdLinks.mdLinks(option[0], {validate:false} )
  .then(resul => console.log(resul))
  .catch(resul => console.log(resul))

} else if (option.length === 2) {
  switch(option[1]) {
    case('--validate') :
      mdLinks.mdLinks(option[0], {validate:true} )
        .then(resul => console.log(resul))
        .catch(resul => console.log(resul))
      break;
    case('--stats') :
      mdLinks.mdLinks(option[0], { validate: true })
        .then(resul => console.log(totalAndUnique(resul)))
        .catch(resul => console.log(resul))
        break;
    default:
      console.log('Lo siento, no es un comando válido.');
      break;
  }
} else if (option.length === 3) {
    if ((option[1] === '--validate' && option[2] === '--stats') || (option[1] === '--stats' && option[2] === '--validate')) {
      mdLinks.mdLinks(option[0], { validate: true })
      .then(resul => console.log(`${totalAndUnique(resul)}\n${broken(resul)}`));
    } else {
      console.log('Lo siento, no es un comando válido.');
    }
} else {
    console.log('Lo siento, no es un comando válido.');
}
