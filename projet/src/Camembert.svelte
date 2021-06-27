<script>
  import { pie, arc } from "d3";
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";

  export let valeurs = [0, 0];
  const data = tweened(pie()([0, 0]));
  const arcCreator = arc().outerRadius(50).innerRadius(20).cornerRadius(0.5);
  $: {
    $data = pie().sort(null)(valeurs);
  }
</script>

<svg viewBox="0 0 100 100">
  <g transform="translate(50, 50)">
    {#each $data as d, i}
      <path d={arcCreator(d)} fill={["#457B9D", "#D13440"][i]} />
    {/each}
  </g>
</svg>

