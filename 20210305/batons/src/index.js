import {
  axisLeft,
  select,
  scaleLinear,
  max,
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
  {
    "commune": "Payerne",
    "potentielSolaireToit": 74.89
  },
  {
    "commune": "Aigle",
    "potentielSolaireToit": 72.88
  },
  {
    "commune": "Nyon",
    "potentielSolaireToit": 67.97
  }
]

const WIDTH = 1000
const HEIGHT = 500
const MARGIN = 5
const MARGIN_LEFT = 50
const MARGIN_BOTTOM = 50
const BAR_WIDTH = (WIDTH - MARGIN_LEFT) / DATA.length

const svg = select('body')
  .append('svg')
  .attr('viewBox', `0 0 ${WIDTH} ${HEIGHT}`)

const yScale = scaleLinear()
  .domain([0, max(DATA, d => d.potentielSolaireToit)])
  .range([HEIGHT - MARGIN_BOTTOM, 0])


const g = svg.append('g')
  .attr('transform', `translate(${MARGIN_LEFT}, 0)`)

g.selectAll('rect')
  .data(DATA)
  .enter()
  .append('rect')
  .attr('x', (d, i) => i * BAR_WIDTH)
  .attr('width', BAR_WIDTH - MARGIN)
  .attr('y', d => yScale(d.potentielSolaireToit))
  .attr('height', d => HEIGHT - MARGIN_BOTTOM - yScale(d.potentielSolaireToit))
  .attr('fill', 'steelblue')

g.selectAll('text')
  .data(DATA)
  .enter()
  .append('text')
  .text(d => d.commune)
  .attr('x', (d, i) => i * BAR_WIDTH + BAR_WIDTH / 2)
  .attr('y', HEIGHT - MARGIN_BOTTOM / 2)
  .attr('text-anchor', 'middle')

const axisY = axisLeft().scale(yScale)
  .tickFormat(d => `${d}GWh`)
  .ticks(5)

svg.append('g')
  .attr('transform', `translate(${MARGIN_LEFT - 3})`)
  .call(axisY)
