let fs = require('fs');
let assert = require('assert');
let generateSetupsListAst = require('../generate/setups-list-ast');

const basicInput = require('./stubs/generate/setups-list-ast-basic--input');
const basicOutput = require('./stubs/generate/setups-list-ast-basic--output');

const noBioInput = require('./stubs/generate/setups-list-ast-no-bio--input');
const noBioOutput = require('./stubs/generate/setups-list-ast-no-bio--output');

describe('setups-list-ast generator', () => {
  it(`generates AST of setups list page from 
    a list of individual setups AST`, () => {
    let ast = generateSetupsListAst(basicInput);

    assert.deepEqual(ast, basicOutput);
  });

  it('does no create list items for setups without bio', () => {
    let ast = generateSetupsListAst(noBioInput);

    assert.deepEqual(ast, noBioOutput);
  });
});
