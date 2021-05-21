const fs = require('fs')
const d3 = require('d3')

const file = fs.readFileSync('dataGraph2-RepartitionHommeFemme.csv', 'utf-8');

const { parse } = d3.dsvFormat(';')

const result = parse(file)
    .map(d => ({
      Annee: Number(d.Annee),
      Genre: [Number(d.Hommes), Number(d.Femmes)]
    })) 


console.log(
  JSON.stringify(result));