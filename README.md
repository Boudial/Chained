# Chained
Chained is a (very small) javascript library that dynamically links "chain variables" together.
### Usage
To use chained into your html document: import chained with 
```html
<script src="index.js" defer></script>
```
or
```html
<script src="https://cdn.jsdelivr.net/gh/Boudial/chained/index.min.js" defer></script>
```
Then you need to add the attribute `ch-var="my-variable"`. After that, all elements that have the same variable will have their content linked.
