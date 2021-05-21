const fs = require('fs')
const d3 = require('d3')

const file = fs.readFileSync('dataGraph1-NbPersonneDansMedia.csv', 'utf-8');

const { parse } = d3.dsvFormat(';')

const result = parse(file)
    .map(d => ({
      Annee: Number(d.Annee),
      Total_personnes_travaillant_dans_les_medias: Number(d.Total_professions_media),
      Total_personnes_actives_occupees: Number(d.Total_personnes_actives),
    })) 


console.log(
  JSON.stringify(result));