const numbers = document.querySelectorAll('.num');
const result = document.querySelector('.inputscr span');
const signs = document.querySelectorAll('.sign');
const equals = document.querySelector('.equ');
const clear = document.querySelector('.ac');
const negative = document.querySelector('.pm');
const percent = document.querySelector('.per');

let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondValue = false;
let sign = "";
let resultValue = 0;
let hasSign = false;

for(let i = 0;i<numbers.length;i++){
    numbers[i].addEventListener('click',(e)=> {
        let atr = e.target.getAttribute('value');
        if (hasSign === true) {
            if(isSecondValue === false){
                getSecondValue(atr);
            }
        } else {
            getFirstValue(atr)
        }
    })
}

function getFirstValue(el) {
    result.innerHTML = "";
    firstValue += el;
    result.innerHTML = firstValue;
    firstValue = +firstValue;
}

function getSecondValue(el) {
    if (firstValue != "" && sign != "") {
        secondValue += el;
        result.innerHTML = secondValue;
        secondValue = +secondValue;
    }
}

function getSign() {
    for(let i = 0;i<signs.length;i++){
        signs[i].addEventListener('click', (e) => {
            sign = e.target.getAttribute('value');
            isFirstValue = true;
            hasSign = true;
        })
    }
}
getSign();

equals.addEventListener('click', () => {
    result.innerHTML = '';
    if (sign === '+') {
        resultValue = firstValue + secondValue;
    } else if (sign === '-') {
        resultValue = firstValue - secondValue;
    } else if ( sign === 'x') {
        resultValue = firstValue * secondValue;
    } else if (sign === '/') {
        resultValue = firstValue / secondValue;
    }
    result.innerHTML = resultValue;
    firstValue = resultValue;
    secondValue = '';
    hasSign = false;
    checkResultLength();
})


function checkResultLength() {
    resultValue = resultValue.toString();
    if (resultValue.length >=8) {
        resultValue = parseFloat(resultValue).toFixed(5);
        result.innerHTML = resultValue;
    }
}

negative.addEventListener('click', () => {
    result.innerHTML = "";
    if (firstValue != '') {
        resultValue = -firstValue;
        firstValue =  resultValue;
        result.innerHTML = resultValue;
    }
    if (firstValue != '' && secondValue != '' && sign != '') {
        resultValue = -resultValue;
        result.innerHTML = resultValue;
    }
})

percent.addEventListener('click', () => {
    result.innerHTML = "";
    if (firstValue != '') {
        resultValue = firstValue / 100;
        firstValue =  resultValue;
        resultValue.innerHTML = resultValue;
    }
    if (firstValue != '' && secondValue != '' && sign != '') {
        resultValue = resultValue / 100;
        resultValue.innerHTML = resultValue;
    }
})

clear.addEventListener('click', () => {
    result.innerHTML = 0;

    firstValue = "";
    isFirstValue = false;
    secondValue = "";
    isSecondValue = false;
    sign = "";
    resultValue = 0;
})