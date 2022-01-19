import {existsPath} from '../src/api';


// describe('mdLinks', () => {

//   it('should...', () => {
//     console.log('FIX ME!');
//   });

// });

describe('function to check if path exists:', () => {
  it('isExistsPath is a function', () => {
    expect(typeof existsPath).toBe('function');
  });
});
