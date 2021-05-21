import {
  axisLeft,
  select,
  scaleLinear,
  max,
} from 'd3'

import DATA from './data1.json';

const WIDTH = 1000
const HEIGHT = 500
const MARGIN = 5
const MARGIN_LEFT = 50
const MARGIN_BOTTOM = 50
const BAR_WIDTH = (WIDTH - MARGIN_LEFT) / (DATA.length * 2)

const svg = select('body')
  .append('svg')
  .attr('viewBox', `0 0 ${WIDTH} ${HEIGHT}`)

const yScale = scaleLinear()
  .domain([0, max(DATA, d => d.Total_personnes_actives_occupees)])
  .range([HEIGHT - MARGIN_BOTTOM, 0])


const g = svg.append('g')
  .attr('transform', `translate(${MARGIN_LEFT}, 0)`)

g.selectAll('rect')
  .data(DATA)
  .enter()
  .append('rect1')
  .attr('x', (d, i) => (i * 2) * BAR_WIDTH)
  .attr('width', BAR_WIDTH - MARGIN)
  .attr('y', d => yScale(d.Total_personnes_travaillant_dans_les_medias))
  .attr('height', d => HEIGHT - MARGIN_BOTTOM - yScale(d.Total_personnes_travaillant_dans_les_medias))
  .attr('fill', 'tomato')

g.selectAll('rect')
  .data(DATA)
  .enter()
  .append('rect2')
  .attr('x', (d, i) => ((i * 2) * BAR_WIDTH) + BAR_WIDTH)
  .attr('width', BAR_WIDTH - MARGIN)
  .attr('y', d => yScale(d.Total_personnes_travaillant_dans_les_medias))
  .attr('height', d => HEIGHT - MARGIN_BOTTOM - yScale(d.Total_personnes_travaillant_dans_les_medias))
  .attr('fill', 'tomato')

g.selectAll('text')
  .data(DATA)
  .enter()
  .append('text')
  .text(d => d.Annee)
  .attr('x', (d, i) => i * BAR_WIDTH + BAR_WIDTH / 2)
  .attr('y', HEIGHT - MARGIN_BOTTOM / 2)
  .attr('text-anchor', 'middle')

const axisY = axisLeft().scale(yScale)
  .tickFormat(d => `${d}`)
  .ticks(5)

svg.append('g')
  .attr('transform', `translate(${MARGIN_LEFT - 3})`)
  .call(axisY)
