const fs = require('fs')
const d3 = require('d3')

const file = fs.readFileSync('dataGraph3-PodiumMetier.csv', 'utf-8');

const { parse } = d3.dsvFormat(';')

const result = parse(file)     
    .map(d => ({
      Profession: String(d.Profession),
      NbProfessionnel: Number(d.deuxMille)
    })) 
    .sort((a, b) => a.NbProfessionnel > b.NbProfessionnel ? -1 : 1)
    .filter((_, i) => i < 10) 



console.log(
  JSON.stringify(result));