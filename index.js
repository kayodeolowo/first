const fs = require('fs')

const textin = fs.readFileSync('./text/input.text', 'utf-8');
//console.log(textin)

const textout = `this us writtedn text us me ${textin} created on ${Date.now()}`
fs.writeFileSync('./text/output.text', textout)
console.log('written')

