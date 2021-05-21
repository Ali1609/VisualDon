<script>
import Camembert from './Camembert.svelte'
import DATA2 from './data2.json';

let annee = 1970
$: valeurs1 = DATA2.find(d => d.Annee === annee)?.Genre
let index = 0
$: valeurs2 = DATA2[index]?.Genre
setInterval(() => {
  if (index === DATA2.length - 1) {
    index = 0
  } else {
    index = index + 1
  }
}, 1000)
</script>
<div class="graph">
  <Camembert valeurs={valeurs2} />
</div>
<style>
  .graph {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
</style>