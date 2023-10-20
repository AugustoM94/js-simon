function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//inserire in array 5 numeri casuali da 1 a 100 e inserire in array
function visualizzaNumeri() {
    let numeriCasuali = [];
    for (let i = 0; i < 5; i++) {
        numeriCasuali.push(getRandomNumber(1, 100));  
    }


    //indicato num visibili in dom
    let numeroContainer = document.getElementById('numero-container');
    numeroContainer.textContent = numeriCasuali.join(' ');

    // timer 30 secondi
    setTimeout(function() {
        numeroContainer.textContent = '';
        abilitaInput(numeriCasuali);
    }, 30000); 

}