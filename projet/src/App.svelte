<script>
  import Camembert from "./Camembert.svelte";
  import DATA2 from "./data2.json";
  import GraphBatonMedia from "./GraphBatonMedia.svelte";
  import GraphBaton from "./GraphBaton.svelte";
  import Popularite2018 from "./Popularite2018.svelte";
  import Popularite2010 from "./Popularite2010.svelte";
  import Popularite2000 from "./Popularite2000.svelte";
  import CamembertTrois from "./CamembertTrois.svelte";
  import DATA4 from "./data4.json";

  let annee1 = 1970;
  let annee2 = 1970
  $: valeurs1 = DATA2.find((d) => d.Annee === annee1)?.Genre;
  $: valeurs2 = DATA4.find((d) => d.Annee === annee2)?.Langue;
</script>

<body>
  <header><h1>Evolution dans le domaine des Médias en Suisse</h1></header>
  <h2>Evolution du nombre de professionnels actifs</h2>
  <div class="wrapper">
    <div class="first1">
      <h3>Professionnels dans le domaine des Médias</h3>
      <GraphBatonMedia />
    </div>
    <div class="second">
      <h3>Professionnels actifs tous domaines confondus</h3>
      <GraphBaton />
      <p class="graphbaton">
        Les pourcents sur le graphique de gauche est une représentation sur le
        total des professionnels actifs pour la Suisse seulement.
      </p>
    </div>
  </div>

  <div class="wrapper2">
    <div class="double1">
  <h2>Répartition Homme/Femme dans le domaine des Médias</h2>
  <select on:input={(e) => (annee1 = Number(e.target.value))}>
    {#each DATA2 as d}
      <option value={d.Annee}>{d.Annee}</option>
    {/each}
  </select>

  <div class="graph">
    <Camembert valeurs={valeurs1} />
    <svg viewBox="0 0 100 100">
      <rect x={2} width={5} y={2} height={5} fill="#457B9D" />
      <rect x={2} width={5} y={9} height={5} fill="#D13440" />
      <text
            x={9}
            y={6}
            text-anchor="start"
            font-size="3px"
          >Homme</text>
          <text
            x={9}
            y={13}
            text-anchor="start"
            font-size="3px"
          >Femme</text>
    </svg>
  </div>
</div>

<div class="double2">
  <h2>Répartition des langues parlées dans le domaine des Médias</h2>
  <select on:input={(e) => (annee2 = Number(e.target.value))}>
    {#each DATA4 as d}
      <option value={d.Annee}>{d.Annee}</option>
    {/each}
  </select>

  <div class="graph1">
    <CamembertTrois valeurs={valeurs2} />
    <svg viewBox="0 0 100 100">
      <rect x={2} width={5} y={2} height={5} fill="#CA513F" />
      <rect x={2} width={5} y={9} height={5} fill="#1D3557" />
      <rect x={2} width={5} y={16} height={5} fill="#965A72" />
      <text
            x={9}
            y={6}
            text-anchor="start"
            font-size="3px"
          >Allemand</text>
          <text
            x={9}
            y={13}
            text-anchor="start"
            font-size="3px"
          >Français</text>
          <text
            x={9}
            y={20}
            text-anchor="start"
            font-size="3px"
          >Italien</text>
    </svg>
  </div>
</div>
</div>

  <h2>Les métiers des Médias les plus populaires</h2>
  <div class="wrapper">
    <div class="first">
      <h3>En 2018</h3>
      <Popularite2018 />
    </div>
    <div class="second">
      <h3>En 2010</h3>
      <Popularite2010 />
    </div>
    <div class="third">
      <h3>En 2000</h3>
      <Popularite2000 />
    </div>
  </div>
</body>

<style>
  .graph {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-left: 125px;
    padding-top: 30px;
  }
  .graph1 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-left: 125px;
  }
  h1 {
    text-align: center;
  }
  h2 {
    padding-top: 30px;
  }
  body,
  h1,
  div,
  header {
    margin: 0;
    height: 100%;
    width: 100%;
  }

  * {
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }

  body {
    background-color: #f9f4f0;
  }


  .graphbaton {
    padding-left: 20px;
    text-align: justify;
    padding-right: 10px;
  }

  .wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    grid-auto-rows: minmax(100px, auto);
  }

  .wrapper2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    grid-auto-rows: minmax(100px, auto);
  }

  .double1 {
    grid-column: 1;
    grid-row: 1;
  }

  .double2 {
    grid-column: 2;
    grid-row: 1;
  }

  .first1 {
    grid-column: 1 / 3;
    grid-row: 1/3;
  }

  .first {
    grid-column: 1 / 3;
    grid-row: 1/3;
    padding-top: 120px;
  }

  .second {
    grid-column: 3;
    grid-row: 1;
  }

  .third {
    grid-column: 3;
    grid-row: 2 / 3;
  }
</style>
