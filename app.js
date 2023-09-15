
const newCount = document.getElementById('count-el');

//console.log(newCount);
let people = 0;
people += 1;


newCount.addEventListener('click', function increase(e){
    let contador = people +=1;
    newCount.innerText = contador;

    
    
    
});



















