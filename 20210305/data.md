# Exercice 3 - préparation de données
J'ai choisi le fichier de données sur le [Potentiel d'énergie solaire des communes suisses](http://www.uvek-gis.admin.ch/BFE/ogd/52/Solarenergiepotenziale_Gemeinden_Daecher_und_Fassaden.json).
## Charger les données pour les traiter
Après avoir enregistrer le jeu de données dans mon dossier, il faut rajouter 
    const data = require('./solaire.json')
afin de lier le jeu de données au traitement que l'on va faire.
## Traitement des données
J'ai choisi de filtrer les données en me concentrant sur le canton de Vaud et en prenant en compte seulement les communes ayant un potentiel d'énergie solaire sur le toit de plus de 65 GWh.
J'ai ensuite fait un tableau avec pour chaque lot de données seulement le nom de la commune et le potentiel énergétique.
J'ai ensuite trié les données de la commune ayant le plus grand potentiel à la commune ayant le moins grand potentiel énergétique.