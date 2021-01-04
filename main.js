let e = document.querySelector('.titre');
console.log(e.textContent);
console.log(e.innerHTML);

let tab = document.querySelectorAll('.titre');
for(e of tab){
    console.log(e.textContent);
}

console.log(out);

console.log(out.querySelector('div'));