#!/usr/bin/env node
import * as mdLinks from './mdLinks.js';
import {totalAndUnique,broken} from './cliStats.js';
import pkg from 'inquirer';
import {errorCommandeInvalid,help} from './utils.js';
import chalk from 'chalk';

const {prompt} = pkg;
const option = process.argv.slice(2);

if (option.length === 1) {
  if (    option[0] === '--help' ){
    console.log(help());
  } else {
    mdLinks.mdLinks(option[0], {validate:false} )
    .then((resul) => resul.map((element) => {
      const href = chalk.underline.cyan(element.href);
      const text = chalk.italic.blue(element.text);
      const file = chalk.bold.magenta(element.file);
      console.log(`{\n${chalk.bold.green('href :')} ${href}\n${chalk.bold.green('file :')} ${file}\n${chalk.bold.green('text :')} ${text}\n}`);
    }))
    .catch(resul => console.log(resul))
  }


} else if (option.length === 2) {
  option[1] = option[1].toLowerCase();
  switch(option[1]) {
    case('--validate'):
    case('--v'):
      mdLinks.mdLinks(option[0], {validate:true} )
      .then((resul) => resul.map((element) => {
        const href = chalk.underline.cyan(element.href);
        const text = chalk.italic.blue(element.text);
        const file = chalk.bold.magenta(element.file);
        const status = chalk.bold.yellowBright(element.status);
        const message = chalk.bold.black(element.message);
        console.log(`{\n${chalk.bold.green('href :')} ${href}\n${chalk.bold.green('file :')} ${file}\n${chalk.bold.green('text :')} ${text}\n${chalk.bold.green('status :')} ${status}\n${chalk.bold.green('message :')} ${ message}\n}`);
      }))
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
                .then((resul) => resul.map((element) => {
                  const file = chalk.bold.magenta(element.file);
                  const href = chalk.underline.cyan(element.href);
                  const text = chalk.italic.blue(element.text);
                  console.log(`{\n${chalk.bold.green('file :')} ${file}\n${chalk.bold.green('href :')} ${href}\n${chalk.bold.green('text :')} ${text}\n}`);
                }))
                .catch(resul => console.log('se produjo un error',resul))
                break;
            case('Validate Links'):
              mdLinks.mdLinks(answers.path, {validate:true})
                .then((resul) => resul.map((element) => {
                  const href = chalk.underline.cyan(element.href);
                  const text = chalk.italic.blue(element.text);
                  const file = chalk.bold.magenta(element.file);
                  const status = chalk.bold.yellowBright(element.status);
                  const message = chalk.bold.black(element.message);
                  console.log(`{\n${chalk.bold.green('href :')} ${href}\n${chalk.bold.green('file :')} ${file}\n${chalk.bold.green('text :')} ${text}\n${chalk.bold.green('status :')} ${status}\n${chalk.bold.green('message :')} ${ message}\n}`);
                }))
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
