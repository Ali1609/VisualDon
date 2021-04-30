# Exercice 1
J'ai utilisé la première méthode que nous avons vu, c'est à dire exécuter la manipulation DOM directement dans la console du navigateur. 

## récupérer le titre, le prix et le rating de chaque produit

```
var cl = (el, tag) => Array.from(el.querySelectorAll(tag))

cl(temp0, "div.thumbnail")
  .map(el => {
    let title = el.querySelectorAll("a.title")[0].textContent; 
    let price = el.querySelectorAll("h4.price")[0].textContent;
    let rating = el.querySelectorAll("p[data-rating]")[0].getAttribute('data-rating');
    
    return {
        title: title,
        price: price,
        rating: rating
    }
  })
```
