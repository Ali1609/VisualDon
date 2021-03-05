const data = require('./solaire.json')

const Vaud = d => d.Canton === 'Vaud' && d.Scenario1_RoofsOnly_PotentialSolarElectricity_GWh > 65

const resultat = data
    .filter(Vaud)
    .map(d => ({ commune: d.MunicipalityName, potentielSolaireToit: d.Scenario1_RoofsOnly_PotentialSolarElectricity_GWh}))
    .sort((a, b) => a.potentielSolaireToit > b.potentielSolaireToit ? -1 : 1)


console.log(JSON.stringify(resultat))