import {existsPath,isAbsolutePath,convertToAbsolute,isDirectory,readDirectory,isExtMd,getArrayFilesMd,extrLinkFromFile,readFile,validateLinks} from '../src/api';
import fetch from 'node-fetch';
// import fetch from './__mocks__/node-fetch.js';
// describe('mdLinks', () => {

//   it('should...', () => {
//     console.log('FIX ME!');
//   });

// });
const routeTrue = './testMode';
const routeTrue2 = './testMode/file.md';
const routeSinFilesMd = './testMode/testMode3SinFilesMd';
const routeFalse = './testMod';
const absoluteRoute = 'C:\\Users\\L-63\\Documents\\L016\\LIM016-md-links\\testMode\\file.md';
const trueRouteToAbs = 'C:\\Users\\L-63\\Documents\\L016\\LIM016-md-links\\testMode';
const arrayRouteTrue = [ 'file.md', 'file2.md', 'testMode2', 'testMode3SinFilesMd' ];
const arrayFilesMd = [ 'file.md', 'file2.md', 'testMode2', 'testMode3SinFilesMd' ];
const routeTrue2ArrayFileMd = [
  'C:\\Users\\L-63\\Documents\\L016\\LIM016-md-links\\testMode\\file.md'
];
const routeTrueArrayFileMd = ["C:\\Users\\L-63\\Documents\\L016\\LIM016-md-links\\testMode\\file.md", "C:\\Users\\L-63\\Documents\\L016\\LIM016-md-links\\testMode\\file2.md", "C:\\Users\\L-63\\Documents\\L016\\LIM016-md-links\\testMode\\testMode2\\file3.md", "C:\\Users\\L-63\\Documents\\L016\\LIM016-md-links\\testMode\\testMode2\\file5.md"];
const routeTrue2ReadFile = '## **This file contains a invalid link**\r\nNode.js is an open-source, cross-platform, JavaScript runtime environment.For information on using Node js, see[the Node.js in Git Hub.](https://github.com/error404omg)\r\n';
const arrayLinksOfRouteTrue = [
  {
    href: 'https://github.com/error404omg',
    text: 'the Node.js in Git Hub.',
    file: 'C:\\Users\\L-63\\Documents\\L016\\LIM016-md-links\\testMode\\file.md'
  },
  {
    href: 'https://markdown.es/sintaxis-markdown/',
    text: 'sintaxis Markdown',
    file: 'C:\\Users\\L-63\\Documents\\L016\\LIM016-md-links\\testMode\\file2.md'
  },
  {
    href: 'https://nodejs.org/enh/',
    text: 'Node js',
    file: 'C:\\Users\\L-63\\Documents\\L016\\LIM016-md-links\\testMode\\testMode2\\file5.md'       
  }
];

describe('function to check if path exists:', () => {
  it('isExistsPath is a function', () => {
    expect(typeof existsPath).toBe('function');
  });
  it('isExistsPath returns true', () => {
    expect(existsPath(routeTrue)).toBe(true);
  });
  it('isExistsPath returns false', () => {
    expect(existsPath(routeFalse)).toBe(false);
  });
});

describe('function to check if path is Absolute:', () => {
  it('isAbsolutePath is a function', () => {
    expect(typeof isAbsolutePath).toBe('function');
  });
  it('isAbsolutePath returns true', () => {
    expect(isAbsolutePath(absoluteRoute)).toBe(true);
  });
  it('isAbsolutePath returns false', () => {
    expect(isAbsolutePath(routeTrue)).toBe(false);
  });
});

describe('Function convert path to absolute if relative:', () => {
  it('convertToAbsolute is a function', () => {
    expect(typeof convertToAbsolute).toBe('function');
  });
  it('convertToAbsolute returns absoluteRoute if the path is absolute ', () => {
    expect(convertToAbsolute(absoluteRoute)).toBe(absoluteRoute);
  });
  it('convertToAbsolute returns absoluteRoute if the path is relative ', () => {
    expect(convertToAbsolute(routeTrue)).toBe(trueRouteToAbs);
  });
});

describe('function to check if it is a directory:', () => {
  it('isDirectory is a function', () => {
    expect(typeof isDirectory).toBe('function');
  });
  it('isDirectory returns true', () => {
    expect(isDirectory(routeTrue)).toBe(true);
  });
  it('isDirectory returns false', () => {
    expect(isDirectory(routeTrue2)).toBe(false);
  });
});

describe('function to read directory:', () => {
  it('readDirectory is a function', () => {
    expect(typeof readDirectory).toBe('function');
  });
  it('readDirectory returns array of files and/or folder', () => {
    expect(readDirectory(routeTrue)).toEqual(expect.arrayContaining(arrayRouteTrue));
  });
});

describe('function to check if the file extension is .md:', () => {
  it('isExtMd is a function', () => {
    expect(typeof isExtMd).toBe('function');
  });
  it('isExtMd returns true', () => {
    expect(isExtMd(routeTrue2)).toBe(true);
  });
  it('isExtMd returns false', () => {
    expect(isExtMd(routeSinFilesMd)).toBe(false);
  });
});

describe('function go through directory and search to get some .md file:', () => {
  it('getArrayFilesMd is a function', () => {
    expect(typeof getArrayFilesMd).toBe('function');
  });
  it('route FilesMd returns ArrayFileMd', () => {
    expect(getArrayFilesMd(routeTrue2)).toEqual(expect.arrayContaining(routeTrue2ArrayFileMd));
  });
  it('route directory returns ArrayFileMd', () => {
    expect(getArrayFilesMd(routeTrue)).toEqual(expect.arrayContaining(routeTrueArrayFileMd));
  });
});

describe('function to read file:', () => {
  it('readFile is a function', () => {
    expect(typeof readFile).toBe('function');
  });
  it('readFile returns text of files md', () => {
    expect(readFile(routeTrue2)).toEqual(routeTrue2ReadFile);
  });
});

describe('Function that extracts links from the found MD files:', () => {
  it('extrLinkFromFile is a function', () => {
    expect(typeof extrLinkFromFile).toBe('function');
  });
  it('extrLinkFromFile returns links from the found MD files', () => {
    expect(extrLinkFromFile(routeTrue)).toEqual(expect.arrayContaining(arrayLinksOfRouteTrue));
  });
});

// describe('Function that checks if the links work or not:', () => {
//   it('validateLinks is a function', () => {
//     expect(typeof validateLinks).toBe('function');
//   });
//   it('validateLinks returns promesa', () => {
//     expect(validateLinks(routeTrue)).toEqual(expect.arrayContaining(arrayLinksOfRouteTrue));
//   });
//   it('validateLinks returns promesa', () => {
//     expect(validateLinks(routeTrue)).toEqual(expect.arrayContaining(arrayLinksOfRouteTrue));
//   });

// });

test('Function that checks if the links work or not:', () => {
  // const fetchItem1 = () => fetch(arrayLinksOfRouteTrue.href).then(data => {
  //   expect(data).toBe('peanut butter');
  // })
    const fetchItem2 = () => fetch(arrayLinksOfRouteTrue[0].href).then(data => {
      expect({
        href: arrayLinksOfRouteTrue[0].href,
        text: arrayLinksOfRouteTrue[0].text,
        file: arrayLinksOfRouteTrue[0].file,
        status: data.status,
        message: 'Fail',
      }).toEqual({
        href: 'https://github.com/error404omg',
        text: 'the Node.js in Git Hub.',
        file: 'C:\\Users\\L-63\\Documents\\L016\\LIM016-md-links\\testMode\\file.md',
        status: 404,
        message: 'Fail',
      });
    })
    // const fetchItem3 = () => fetch(arrayLinksOfRouteTrue.href).then(data => {
    //   expect(data).toBe('fried salad');
    // })
  
    return Promise.all([ fetchItem2()])

  // expect(validateLinks (arrayLinksOfRouteTrue)).toEqual({
  //   href: 'https://github.com/error404omg',
  //   text: 'the Node.js in Git Hub.',
  //   file: 'C:\\Users\\L-63\\Documents\\L016\\LIM016-md-links\\testMode\\file.md',
  //   status: 404,
  //   message: 'Fail',
  // })
  
});

test('Function validate Links', () => {
  return validateLinks(arrayLinksOfRouteTrue).then(data => {
    expect(data).toEqual(undefine);
  });
});
// describe('function to check if path exists:', () => {
//   it('isExistsPath is a function', () => {
//     expect(typeof existsPath).toBe('function');
//   });
// });

// describe('Fetch API:', () => {
//   it('extrLinkFromFile is a function', () => {
//     expect(typeof extrLinkFromFile).toBe('function');
//   });
//   it('extrLinkFromFile is a function', () => {
//     expect(typeof extrLinkFromFile).toBe('function');
//   });
// });

// describe('Fetch API:', () => {
//   it('extrLinkFromFile is a function', async () => {
//     fetch.mockResponseOnce(data);
//     expect(fetch).toHaveBeenCalledWith(1);
//   });

// });