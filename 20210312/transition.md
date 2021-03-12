# Transitions
## D3
Afin de lancer une transition, il faut tout d'abord créer les éléments qui vont changer. Après cela, il faut choisir si la transition se passe lors d'un clic sur un bouton ou autre (mettre un événement).
Puis il faut changer les data en conséquence, soit normalement soit avec merge si ce ne sont que des nouvelles données qui entrent.
La transition se lance avec 
    .transition()
et il faut indiquer la durée avec
    .duration(1000)
et ensuite les attributs qui changent.
## Svelte
Avec Svelte, il suffit d'utiliser 
    <g transform=
et les changements voulus.