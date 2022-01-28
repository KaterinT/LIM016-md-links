# MDKATE

## Índice

* [1. MDKATE](#1-mdkate)
* [2. Instalación](#2-instalación)
* [3.1. Guía de uso (sin prompt)](#3-guía-de-uso-sin-prompt)
* [3.2. Guía de uso (opcional: usando prompt)](#3-guía-de-uso-opcional-usando-prompt)
* [4. Flowchart](#4-flowchart)
* [5. Backlog](#5-backlog)
* [6. Dependencias empleadas](#6-dependencias-empleadas)
* [7. Fuentes](#7-fuentes)
* [8. Autor-Maintainer](#8-autor-maintainer)
* [9. Keywords](#9-keywords)

***

## 1. MDKATE

📦**MDKATE** : es una librería de línea de comando(CLI) ejecutable con [Node.js](https://nodejs.org/) 🟩. Permite identificar,validar y tener estadísticas de las URL's contenidas en archivos de formato [Markdown](https://es.wikipedia.org/wiki/Markdown) el cual es un lenguaje de marcado ligero muy popular entre developers construido con el [motor de JavaScript V8 de Chrome](https://developers.google.com/v8/).

<div align="center">
<img src="src/img/README/mdkate.png" title ="mdkate" width="800">
</div>

## 2. Instalación

Instalar la [libreria](https://www.npmjs.com/package/mdkate)  via `npm i mdkate`

## 3.1 Guía de uso (sin prompt)
A través de la terminal:

```
    mdkate <path-to-file> [options]
```
**1.** `mdkate --help` o `mdkate --h`.

<div align="center">
<img src="src/img/README/1mdkate.PNG" title="mdkate--help" width="800">
</div>

**2.** `mdkate <path-to-file>`.

<div align="center">
<img src="src/img/README/2mdkate.PNG" title ="mdkate<path-to-file>">
</div>

**3.** `mdkate <path-to-file> --validate` o `mdkate <path-to-file> --v`.

<div align="center">
<img src="src/img/README/3mdkate.PNG" title ="mdkate <path-to-file> --validate">
</div>

**4.** `mdkate <path-to-file> --start` o `mdkate <path-to-file> --s`.

<div align="center">
<img src="src/img/README/4mdkate.PNG" title ="mdkate <path-to-file> --start">
</div>

**5.** `mdkate <path-to-file> --start --validate` o `mdkate <path-to-file> --s --v` o `mdkate <path-to-file> --validate --start` o `<path-to-file> --v --s` .

<div align="center">
<img src="src/img/README/5mdkate.PNG" title ="mdkate <path-to-file> --start --validate">
</div>

## 3.2 Guía de uso (opcional: usando prompt)

A través de la terminal:

```
mdkate
```
**1.** Ingresa `<path-to-file>`.

<div align="center">
<img src="src/img/README/1mdkatePrompt.PNG" title ="mdkate paso1">
</div>

**2.** Selecciona una opción :

<div align="center">
<img src="src/img/README/2mdkatePrompt.PNG" title ="mdkate paso2">
</div>

**3.** Devuelve un resultado :

<div align="center">
<img src="src/img/README/3mdkatePrompt.PNG" title ="mdkate paso3">
</div>

## 4.Flowchart

 <details><summary>Diagramas</summary><p>

  * [API](flowcharts/API.png)
  <img src="flowcharts/API.png" title ="API">

  * [CLI](flowcharts/CLI.png)
  <img src="flowcharts/CLI.png" title ="CLI">

</p></details>

## 5. Backlog 📌

Presentación de Backlog implementado en GitHub Project: [Backlog](https://github.com/KaterinT/LIM016-md-links/projects/1)

## 6. Dependencias empleadas 👩🏾‍💻

    "chalk": "^5.0.0",
    "eslint": "^8.6.0",
    "figlet": "^1.5.2",
    "inquirer": "^8.2.0",
    "jest-fetch-mock": "^3.0.3",
    "link": "^0.1.5",
    "node-fetch": "^3.1.1"
***
## 7. Fuentes 📚

- [Repositorio de Laboratoria:](https://github.com/Laboratoria/LIM016-md-links) Se encuentran todas las condiciones y herramientas a trabajar para el proyecto.

## 8. Autor-Maintainer

- [Katerin Tello](https://github.com/KaterinT)

## 9. Keywords

- **markdown** 
- **paths** 
- **links** 
- **command** 
- **line**
