
// const suma = (n1,n2) => n1+n2;
// const resta = (n1,n2) => n1-n2;
import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';
import md from 'markdown-it';
import jsdom from "jsdom";
const { JSDOM } = jsdom;

// ******Verifica si la ruta existe con true o false *******

export const existsPath = (route) => fs.existsSync(route);

// ******Verifica si la ruta es Absoluta con true o false *******

export const isAbsolutePath = (route) => path.isAbsolute(route);

// ******Convierte la ruta en absoluto si es relativa ****** //

export const convertToAbsolute = (route) => isAbsolutePath(route) ? (route) : path.resolve(route);


// ******Verifica si es un directorio con true o false*******

export const isDirectory = (route) => fs.statSync(route).isDirectory();

// ******* Para leer un directorio .Retorna un array de archivos y/o carpetas que haya en el directorio******** //

export const readDirectory = (route) => fs.readdirSync(route);

// ******Verifica si la extension del archivo es .md con true o false******

export const isExtMd = (route) => path.extname(route) ==='.md' ;

// **********recorrer directorio y buscar obtener algún archivo .md***************

 export const getArrayFilesMd = (route) => {
  let arrayFilesMd = [];
  let joinRoute;
  if (isDirectory(route)) {
    readDirectory(route).forEach((fileOrDirectory) => {
      joinRoute = path.join(route, fileOrDirectory); 
      arrayFilesMd =   arrayFilesMd.concat(getArrayFilesMd(convertToAbsolute(joinRoute))); //recursividad en getArrayFilesMd
    })
  }
  else if (isExtMd(route)) {
    arrayFilesMd.push(convertToAbsolute(route));
  };
  return arrayFilesMd;
}

// ******leer archivos *******

export const readFile = (route) => fs.readFileSync(route,{ encoding: "utf-8"})

// **********Extraer links de los archivos MD hallados--> y option validate:false**************

export const extrLinkFromFile = (route) => {
  const arrayLinks = [];
  getArrayFilesMd(route).forEach((fileAbsolute) => {

    const urlLinks = /\[([^\[]+)\](\(.*\))/gm;
    let arrayLinksWithText = readFile(fileAbsolute).match(urlLinks); //obtiene [textoReferenciaDelLink] y (links)  de links contenidos en cada archivo

    if (arrayLinksWithText != null ) {
      let result = md().render(readFile(fileAbsolute));//convierte el archivo MD en texto html

      let dom = new JSDOM(result)
      arrayLinksWithText = dom.window.document.querySelectorAll("a")
      // console.log('arraLinksWithText',arrayLinksWithText);
      arrayLinksWithText.forEach((LinksWithText) => {
        // console.log(LinksWithText);
        const uniqueLinks = LinksWithText.href //devuelve solo el link url
        const uniqueText = LinksWithText.textContent.substring(0,50); //devuelve solo el texto 
        arrayLinks.push({
          href: uniqueLinks,
          text: uniqueText,
          file: fileAbsolute,
        });
      });
    } 
  });
    return arrayLinks;
  // });
};

// **********Ver si los links funcionan o no --> option validate:true --> **************

export  const validateLinks = (arraylinks) => {
//Tomar el array con archivos md obtenidos de extrLinkFromFile
  return Promise.all (arraylinks.map((link) => {
    // console.log('link',link);
    return fetch(link.href)
      .then(resul => { 
        const statusText = resul.status >= 200 && resul.status <= 399 ? 'Ok' : 'Fail';       
        return {
          href: link.href,
          text: link.text,
          file: link.file,
          status: resul.status,
          message: statusText,
        }
      })
      .catch(()=>{
        return {
          href: link.href,
          text: link.text,
          file: link.file,
          status: '',
          message: 'Fail',}

      });
  }))
}