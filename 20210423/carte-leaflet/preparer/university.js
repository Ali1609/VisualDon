const data = require('./export.json')

const result = data.features
  .filter(d => d.geometry.type === 'Point' && d.properties.amenity === 'university')
  .map(d => ({cord: d.geometry.coordinates, nom: d.properties.name}))

console.log(
  JSON.stringify(
    result
  )
)