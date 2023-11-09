const pElement = document.getElementsByTagName('p')[0];
const h1Element = document.getElementsByTagName('h1')[0];
h1Element.addEventListener('mousemove', function () {
    pElement.style.border = "1px solid black";
    pElement.style.display = "inline";
    pElement.style.margin = "10px";
    pElement.style.padding = "10px";
});

console.log('asdasdas')