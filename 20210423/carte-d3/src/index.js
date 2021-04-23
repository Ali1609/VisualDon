import {
  geoMercator,
  geoPath,
  select,
} from 'd3'
import bar from './bar1.json'
import batiments from './batiments1.json'
import routes from './routes1.json'

const WIDTH = 800
const HEIGHT = 450

const projection = geoMercator()
  .fitExtent(
    [[0, 0], [WIDTH, HEIGHT]],
    {
      type: 'Feature',
      geometry: {
        type: 'LineString',
        coordinates: [[6.6255,46.5172], [6.6510,46.5275]]}
      }
  )

const pathGenerator = geoPath().projection(projection)

const svg = select('#map').append('svg')
  .attr('viewBox', `0 0 ${WIDTH} ${HEIGHT}`)

  svg.selectAll('path.routes')
  .data(routes)
  .enter()
  .append('path')
  .attr('class', 'routes')
  .attr('d', pathGenerator)
  .attr('stroke', 'lightgrey')
  .attr('fill', 'none')
  .attr('stroke-width', 5)

svg.selectAll('path.batiments')
  .data(batiments)
  .enter()
  .append('path')
  .attr('class', 'batiments')
  .attr('d', pathGenerator)
  .attr('fill', 'grey')

svg.selectAll('circle')
  .data(bar)
  .enter()
  .append('circle')
  .attr('cx', d => projection(d)[0])
  .attr('cy', d => projection(d)[1])
  .attr('r', 4)
  .attr('fill', 'blue')