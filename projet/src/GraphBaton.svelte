<script>
    import {
      axisLeft,
      select,
      scaleLinear,
      max,
    } from 'd3'
    import DATA1 from './data1.json';

    let DATA = DATA1;

    const WIDTH = 1000
    const HEIGHT = 500
    const MARGIN = 5
    const MARGIN_LEFT = 40
    const MARGIN_BOTTOM = 50
    const BAR_WIDTH = (WIDTH - MARGIN_LEFT) / DATA.length
    const yScale = scaleLinear()
      .domain([0, max(DATA, d => d.Total_personnes_actives_occupees)])
      .range([HEIGHT - MARGIN_BOTTOM, 0])

    const yAxis = node => {
      select(node)
        .call(
          axisLeft().scale(yScale)
            .tickFormat(d => `${d / 1000}k`)
            .ticks(5)
        )
    }
    </script>
    
    <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`}>
      <g transform={`translate(${MARGIN_LEFT}, 0)`}>
        {#each DATA as d, i}
          <rect
            x={i * BAR_WIDTH}
            width={BAR_WIDTH - MARGIN}
            y={yScale(d.Total_personnes_actives_occupees)}
            height={HEIGHT - MARGIN_BOTTOM - yScale(d.Total_personnes_actives_occupees)}
            fill='#F7BC8D'
          />
          <text
            x={i * BAR_WIDTH + BAR_WIDTH / 2}
            y={HEIGHT - MARGIN_BOTTOM / 2}
            text-anchor="middle"
          >{d.Annee}</text>
          <text
            x={i * BAR_WIDTH + BAR_WIDTH / 2}
            y={yScale(d.Total_personnes_actives_occupees) + (MARGIN_BOTTOM/2) }
            text-anchor="middle"
            fill='white'
          >{(d.Total_personnes_actives_occupees/1000).toFixed(0) + ' k'}</text>
        {/each}
      </g>
      <g use:yAxis transform={`translate(${MARGIN_LEFT - 3})`} />
    </svg>