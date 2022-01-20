#!/usr/bin/env node
import * as mdLinks from './mdLinks.js';
import {totalAndUnique,broken} from './cliStats.js';
import pkg from 'inquirer';
import {errorCommandeInvalid} from './utils.js';


const {prompt} = pkg;
// const [,, ...args] = process.argv;
// console.log(args);
// console.log(process.argv[2]);

const option = process.argv.slice(2);


if (option.length === 1) {
  mdLinks.mdLinks(option[0], {validate:false} )
    .then(resul => {
      console.log(resul)
    })
    .catch(resul => console.log(resul))

} else if (option.length === 2) {
  option[1] = option[1].toLowerCase();
  switch(option[1]) {
    case('--validate'):
    case('--v'):
      mdLinks.mdLinks(option[0], {validate:true} )
        .then(resul => console.log(resul))
        .catch(resul => console.log(resul))
      break;
    case('--stats'):
    case('--s' ):
      mdLinks.mdLinks(option[0], { validate: true })
        .then(resul => console.log(totalAndUnique(resul)))
        .catch(resul => console.log(resul))
        break;
    default:
      console.log(errorCommandeInvalid());
      break;
  }
} else if (option.length === 3) {
  option[1] = option[1].toLowerCase();
  option[2] = option[2].toLowerCase();
  const validate = ['--validate','--v'];
  const stats = ['--stats','--s'];
    if ((validate.includes(option[1]) && stats.includes(option[2])||(stats.includes(option[1]) && validate.includes(option[2])))) {
      mdLinks.mdLinks(option[0], { validate: true })
        .then(resul => console.log(`${totalAndUnique(resul)}\n${broken(resul)}`));
    } else {
      console.log('Lo siento, no es un comando válido.');
    }
} else {

  //*****ejectado funcionalidad con el prompt para elegir una opcion en el cli*****/
      prompt([
        {
        /* Pass your questions in here */        
        type:'input',
        name:'path',
        message:  `What is the path to the file or directory?`,
        },
        {
          type: 'rawlist',
          name: 'options',
          message: 'Options to statistics',
          choices: ['none', 'Validate Links','Stats Links','Validate and Stats Links'],
        },
    ])
      .then((answers) => {
        // Use user feedback for... whatever!!
        if(answers.path !== '') {

          switch(answers.options ) {
            case('none'):
              mdLinks.mdLinks(answers.path, { validate: false })
                .then(result =>console.log(result) )
                .catch(resul => console.log('se produjo un error',resul))
                break;
            case('Validate Links'):
              mdLinks.mdLinks(answers.path, {validate:true})
                .then(resul => console.log(resul))
                .catch(resul => console.log(resul)) 
                break;         
            case('Stats Links'):
              mdLinks.mdLinks(answers.path, { validate: true })
                .then(resul => console.log(totalAndUnique(resul)))
                .catch(resul => console.log(resul))
                break;
            case('Validate and Stats Links'):
              mdLinks.mdLinks(answers.path, { validate: true })
                .then(resul => console.log(`${totalAndUnique(resul)}\n${broken(resul)}`));
                break;
          }
        }else {
            console.log('Not a valid path . Please enter a valid path. Example: mdkate <path-to-file> [options]');
        }
      })
      .catch((error) => {
        error.isTtyError
      });
}
