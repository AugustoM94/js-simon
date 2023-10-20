function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//inserire in array 5 numeri casuali da 1 a 100 e inserire in array
function visualizzaNumeri() {
    let numeriCasuali = [];
    for (let i = 0; i < 5; i++) {
        numeriCasuali.push(getRandomNumber(1, 100));
    }

    let numeroContainer = document.getElementById('numero-container');
    numeroContainer.textContent = numeriCasuali.join(' ');

    //timer 30 secondi
    setTimeout(function() {
        numeroContainer.textContent = '';
        abilitaInput(numeriCasuali);
    }, 30000); 
}

function abilitaInput(numeriCasuali) {
    let inputContainer = document.getElementById('input-container');
    let confermaButton = document.getElementById('conferma');
    let risultatoDiv = document.getElementById('risultato');

 


//creare 5 input 
    for (let i = 0; i < 5; i++) {
        let input = document.createElement('input');
        input.type = 'number';
        input.placeholder = 'Inserisci un numero';
        inputContainer.appendChild(input);
    }

    
    confermaButton.addEventListener('click', function() {
        let indovinati = [];
        let inputFields = inputContainer.getElementsByTagName('input');
        for (let i = 0; i < 5; i++) {
            let numeroInserito = parseInt(inputFields[i].value, 10);
            if (!isNaN(numeroInserito) && numeriCasuali.includes(numeroInserito)) {
                indovinati.push(numeroInserito);
            }
        }

        risultatoDiv.textContent = 'Hai indovinato ' + indovinati.length + ' numeri: ' + indovinati.join(', ');
    });
    
    //Reset button per rimuovere il risultato e input e iniziare una nuova partita
    const resetBtn = document.getElementById('reset');
    resetBtn.addEventListener('click', function(){
        inputContainer.innerHTML = '';
        risultatoDiv.textContent = '';
        visualizzaNumeri();
    });
}

visualizzaNumeri();