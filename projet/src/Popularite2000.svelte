<script>
    import {
      axisLeft,
      select,
      scaleLinear,
      max,
    } from 'd3'
    import DATA from './data3c.json';


    const WIDTH = 1000
    const HEIGHT = 500
    const MARGIN = 5
    const MARGIN_LEFT = 40
    const MARGIN_BOTTOM = 50
    const BAR_WIDTH = (WIDTH - MARGIN_LEFT) / DATA.length
    const yScale = scaleLinear()
      .domain([0, max(DATA, d => d.NbProfessionnel)])
      .range([HEIGHT - MARGIN_BOTTOM, 0])

    const yAxis = node => {
      select(node)
        .call(
          axisLeft().scale(yScale)
            .tickFormat(d => `${d}`)
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
            y={yScale(d.NbProfessionnel)}
            height={HEIGHT - MARGIN_BOTTOM - yScale(d.NbProfessionnel)}
            fill='#F7BC8D'
          />
          <text 
            x={i * BAR_WIDTH + BAR_WIDTH / 2 - 2}
            y={HEIGHT - (MARGIN_BOTTOM * 1.1) }
            writing-mode="tb"
            text-anchor="end"
            font-size="15px"
          >{d.Profession}</text>
        {/each}
      </g>
      <g use:yAxis transform={`translate(${MARGIN_LEFT - 3})`} />
    </svg>