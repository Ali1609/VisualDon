const xlsx = require('xlsx')

const file = xlsx.readFile('peinaussteiger2018.xlsx')
const json = xlsx.utils.sheet_to_json(file.Sheets['data'])


const garesVaudoises = d => d.Kanton === 'VD'
const nbVoyageursPlus1400 = d => d.DTV_2018 > 5000

const resultats = json
    .filter(garesVaudoises)
    .filter(nbVoyageursPlus1400)
    .map(d => ({ville: d.Bahnhof_Haltestelle, nbVoyageurs: d.DTV_2018}))
    .sort((a, b) => a.DTV_2018 > b.DTV_2018 ? -1 : 1)
//.filter(d => d.potentiel > 80)

console.log(JSON.stringify(resultats))