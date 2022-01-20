import figlet from 'figlet';
import chalk from 'chalk';


export const welcome = () => {
  figlet('M D K A T E', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(chalk.bold.yellowBright(data))
  });
}

export const errorPath = () => {
  return (chalk.bold.magentaBright(`
                                                                            ░▄▄▄▄░      
                                                                            ▀▀▄██►      
                                     ▁▂▃▄▅▇█  ERROR PATH NO EXIST  █▇▅▄▃▂   ▀▀███►      
                                                                            ░▀███►░█►   
                                  ▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▒▄████▀▀    `));
}

export const errorNoLinks = () => {
  return  (chalk.bold.magentaBright(`
                                                                            ░▄▄▄▄░      
                                                                            ▀▀▄██►      
                   ▁▂▃▄▅▇█  ERROR THERE ARE NO LINKS IN THIS FILE  █▇▅▄▃▂   ▀▀███►      
                                                                            ░▀███►░█►   
  ▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▒▄████▀▀    `));
}

export const errorCommandeInvalid = () => {
  return (chalk.bold.magentaBright(`
                                                                            ░▄▄▄▄░      
                                                                            ▀▀▄██►      
                   ▁▂▃▄▅▇█  SORRY, THIS IS NOT A VALID COMMAND  █▇▅▄▃▂      ▀▀███►      
                                                                            ░▀███►░█►   
  ▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▒▄████▀▀    `));
}

