const category = document.querySelector('.mw-content-ltr');
const links = Array.from(category.querySelectorAll('a'));
const mappy = links.map(link => link.textContent);

let rand1 = mappy[Math.floor(Math.random()*mappy.length)];
let rand2 = mappy[Math.floor(Math.random()*mappy.length)];
console.log(rand1);
console.log(rand2);
