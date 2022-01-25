import figlet from 'figlet';
import chalk from 'chalk';


export const welcome = () => {
  console.log(chalk.bold.green(figlet.textSync('MDKATE', {
    font: 'ANSI Shadow',
    horizontalLayout: 'Smuch',
    verticalLayout: 'default',
    width: 100,
    whitespaceBreak: true
})))
};

export const errorPath = () => {
  return (chalk.bold.magentaBright(`
                                                                            ░▄▄▄▄░      
                                                                            ▀▀▄██►      
                                     ▁▂▃▄▅▇█  ERROR PATH INVALID  █▇▅▄▃▂   ▀▀███►      
                                                Please try again.           ░▀███►░█►   
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
              To see a list of supported mdkate commands run: mdkate --help ░▀███►░█► 
  ▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▒▄████▀▀    `));
}

export const help = () => {
  return (chalk.bold.green(`
▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀
mdkate <path> <command>
Usage:

mdkate <path> --validate/--v : show href,text,file,status,OK or Fail.
mdkate <path> --start/--s : show Total and Unique links.
mdkate <path>  --validate  --start/  --start  --validate : show Total,Unique and broken links.
mdkate <path> --v --s/--s --v : show Total,Unique and broken links.
mdkate --help/--h : more involved overview (in a browser).
  
▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀`));
}


