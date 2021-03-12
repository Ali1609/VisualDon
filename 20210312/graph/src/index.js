import {
  axisLeft,
  select,
  scaleLinear,
  max,
  arc,
  pie,
} from 'd3'

const DATA = [
  {
      "commune": "Lausanne",
      "potentielSolaireToit": 326.86
  },
  {
      "commune": "Yverdon-les-Bains",
      "potentielSolaireToit": 125.72
  },
  {
      "commune": "Ollon",
      "potentielSolaireToit": 79.59
  },
  {
      "commune": "Ecublens (VD)",
      "potentielSolaireToit": 79.54
  },
  {
      "commune": "Montreux",
      "potentielSolaireToit": 75.73
  },
]

const WIDTH = 200
const HEIGHT = 200

//Transformer les données en données adaptées au cambembert
let getPieData = pie().value(d => d.potentielSolaireToit);
let pieData = getPieData(DATA);

const svg = select('body')
  .append('svg')
  .attr('viewBox', `0 0 ${WIDTH} ${HEIGHT}`)

const arcCreator = arc()
  .innerRadius(20) //Rayon interne
  .outerRadius(HEIGHT / 2) //Rayon externe
  .cornerRadius(2) // Rayon de chaque part
  .padAngle(0.01) //séparation entre part

//Définition de la couleur
const color = ({ data }) => {
  switch (data.commune) {
    case 'Lausanne': return 'lightyellow'
    case 'Yverdon-les-Bains': return 'yellow'
    case 'Montreux': return 'red'
    case 'Ollon': return 'tomato'
    default: return 'orange'
  }
}

//Centrer le cambembert via un groupe
const group = svg.append('g')
  .attr('transform', `translate(${HEIGHT / 2}, ${HEIGHT / 2})`);

group.selectAll('path')
  .data(pieData)
  .enter()
  .append('path')
  .attr('d', arcCreator)
  .attr('fill', color);

group.selectAll('text')
  .data(pieData)
  .enter()
  .append('text')
  .attr('transform', d => `translate(${arcCreator.centroid(d)})`)
  .attr('text-anchor', 'middle')
  .attr('font-family', 'sans-serif')
  .attr('font-size', '0.5rem')
  .text(d => d.data.commune)

