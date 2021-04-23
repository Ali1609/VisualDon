# Cartographie
## Pourquoi doit-on projeter des données cartographiques?
Afin de représenter une surface non plane (sphérique dans le cas de la terre) sur une surface plane (la carte). Il y a différents types de projections mais toutes sont soumises à des erreurs. Il faut donc choisir le meilleur type de projections suivant ce que nous voulons faire.
## Qu'est ce qu'Open street map?
[Open Street Map](https://www.openstreetmap.org)
Open Street Map est une base de données géographiques en ligne collaborative. 
## Quelles fonctions D3 sont spécifiques à la cartographie?
geoPath : génère les formes, il peut dessiner par exemple Point (une position) et Polygon (plusieurs positions).
geoMercator : dessine la projection sphérique de type mercator.
geoTransform : dessine une projection géométrique arbitraire. 
geoOrthographic : dessine la projection sphérique de type orthographic.
## À quoi sert le format topojson? En quoi est-il différent du geojson?
Ce format s'apparente au GeoJson mais il prend beaucoup moins de place pour les mêmes données.
## À quoi sert turf? Décrivez ce que font trois fonctions de cette libraire
Turf est une collection de modules permettant d'utiliser beaucoup de fonctions différentes pour faire des opérations sur nos géométries.
union : unit deux zones.
distance : calcule la distance entre deux points.
center : retourne le centre absolu des éléments.

