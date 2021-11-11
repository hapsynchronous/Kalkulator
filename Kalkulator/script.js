// Tangkap Display 
let calc = {
    displayNumber: '0',
    miniDisplay: null,
    result: 0,
    operator: null,
    input: 8,
    waitingForSecondNumber: false
}


function updateDisplay() {
    document.querySelector('#display').innerHTML = calc.displayNumber;
};

function updateMiniDisplay() {
    document.querySelector('#miniDisplay').innerHTML = calc.miniDisplay;
}

function inputNumber(number) {
    if( calc.displayNumber === '0' ) {
        calc.displayNumber = number;
    } else {
        calc.displayNumber += number;
    }
};

function inverseNumber() {
    calc.displayNumber = calc.displayNumber * -1;
}

function clearAll() {
    calc.displayNumber = "0";
    calc.miniDisplay = '';
    calc.operator = null;
    // calc.firstNumber = null;
    calc.waitingForSecondNumber = false;
}

function clearDisplay() {
    calc.displayNumber = "0";
}

function handleOperator(operator) {
    // Jika tidak benar
    if(!calc.waitingForSecondNumber) {
        calc.operator = operator;
        calc.waitingForSecondNumber = true;
        calc.miniDisplay = calc.displayNumber;
        // calc.firstNumber = calc.miniDisplay; 
        calc.displayNumber = '0';
    }
    // Jika benar
    else {
        calc.miniDisplay = calc.result;
        calc.operator = operator;
        // calc.waitingForSecondNumber = false;
        // calc.miniDisplay = calc.displayNumber;
        calc.displayNumber = '0';
    }
}

function action() {
    // if( calc.firstNumber == null || calc.operator == null ) 
    if( calc.miniDisplay == null || calc.operator == null ){
        // alert('Anda belum memasukan angka / operator');
        return;
    } 

    // let result = 0;
    if( calc.operator === '+' ) {
        // calc.result = parseFloat(calc.firstNumber) + parseFloat(calc.displayNumber);
        calc.result = parseFloat(calc.miniDisplay) + parseFloat(calc.displayNumber);
    } else if(calc.operator === '-') {
        // calc.result = parseFloat(calc.firstNumber) -  parseFloat(calc.displayNumber);
        calc.result = parseFloat(calc.miniDisplay) -  parseFloat(calc.displayNumber);
    } else if(calc.operator === 'x') {
        // calc.result = parseFloat(calc.firstNumber) *  parseFloat(calc.displayNumber);
        calc.result = parseFloat(calc.miniDisplay) *  parseFloat(calc.displayNumber);
    } else{
        // calc.result = parseFloat(calc.firstNumber) /  parseFloat(calc.displayNumber);
        calc.result = parseFloat(calc.miniDisplay) /  parseFloat(calc.displayNumber);
    }

    calc.displayNumber = calc.result;

    calc.miniDisplay = '';
    calc.operator = null;
}



let buttons = document.querySelectorAll('.button');
for( let button of buttons ) {
    button.addEventListener('click', function(event) {
        let target = event.target;
    
        if( target.classList.contains('clearAll') ) {
            // clearDisplay();
            clearAll();
            updateMiniDisplay();
            updateDisplay();
            return;
        }

        if( target.classList.contains('clear') ) {
            clearDisplay();
            updateMiniDisplay();
            updateDisplay();
            return;
        }

        if( target.classList.contains('inverse') ) {
            inverseNumber();
            updateMiniDisplay();
            updateDisplay();
            return;
        }

        if( target.classList.contains('operator') ) {
            handleOperator(target.innerHTML);
            updateMiniDisplay();
            updateDisplay();
            return;
        }

        if( target.classList.contains('action') ) {
            action();
            updateMiniDisplay();
            updateDisplay();
            return;
        }

        inputNumber(target.innerHTML);
        updateDisplay();
    });
}




// console.log(target);













