import L from 'leaflet'
import university from './university1.json'


const map = L.map('map').setView([46.1985541, 6.1509888], 10)

L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png',
})
  .addTo(map)

const icon = L.icon({
  iconUrl: 'university.png',
  iconSize: [15, 15],
  iconAnchor: [7, 15],
})

university.map(d => {
  const [lon, lat] = d.cord
  L.marker([lat, lon], { icon }).bindPopup(d.nom).addTo(map)
  
})




