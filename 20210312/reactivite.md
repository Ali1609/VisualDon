# Réactivité
## La programmation réactive
Dès qu'une variable est modifiée les valeurs dépendantes de cette variable sont mises à jour automatiquement. Il y a un lien entre l'input et la valeur. C'est similaire à Excel.
## Utilisation en Javascript
Mettre sous écoute les différents inputs en utilisant les événements.
Exemple :
    inputA.on('input', e => {
    a = toNum(e.target.value)
    update()
    })
## Alternative
Utiliser Svelte et Observable.