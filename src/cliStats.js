import chalk from 'chalk';
// ********Función que retorna el total de links y de links únicos********
export const totalAndUnique = (arraylinks) => {
  const totalLinks = arraylinks.length;
  const uniqueLinks = new Set(arraylinks.map((element) => element.href));// crear una colección de links únicos(no se repiten);
  const stats = `${chalk.bold.green('Total :')} ${chalk.bold.magenta(totalLinks)}\n${chalk.bold.green('Unique :')} ${chalk.bold.magenta(uniqueLinks.size)}`;
    return stats;
}

// *******Función que verifica si hay algun link roto*********//
export const broken = (arraylinks) => {
  const broken = arraylinks.filter(link => link.message === 'Fail')
  const stats = `${chalk.bold.green('Broken :')} ${chalk.bold.magenta(broken.length)}`;
    return stats;}
