const fs = require('fs')
const d3 = require('d3')

const file = fs.readFileSync('dataGraph4-Langue.csv', 'utf-8');

const { parse } = d3.dsvFormat(';')

const result = parse(file)
    .map(d => ({
      Annee: Number(d.Annee),
      Langue: [Number(d.Allemand), Number(d.Francais), Number(d.Italien)]
    })) 


console.log(
  JSON.stringify(result));