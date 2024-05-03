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

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', (e) => {
        let atr = e.target.getAttribute('value');
        if (hasSign === true) {
            if (isSecondValue === false) {
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
}

function getSecondValue(el) {
    if (sign !== "" && !isSecondValue) {
        secondValue += el;
        result.innerHTML = secondValue;
    }
}

function getSign() {
    for (let i = 0; i < signs.length; i++) {
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
        resultValue = parseFloat(firstValue) + parseFloat(secondValue);
    } else if (sign === '-') {
        resultValue = parseFloat(firstValue) - parseFloat(secondValue);
    } else if (sign === 'x') {
        resultValue = parseFloat(firstValue) * parseFloat(secondValue);
    } else if (sign === '/') {
        resultValue = parseFloat(firstValue) / parseFloat(secondValue);
    }
    result.innerHTML = resultValue;
    firstValue = resultValue;
    secondValue = '';
    hasSign = false;
    checkResultLength();
})


function checkResultLength() {
    let temp = parseFloat(result.innerHTML);
    if (temp.toString().length >= 8) {
        resultValue = temp.toFixed(5);
        result.innerHTML = resultValue;
    }
}

negative.addEventListener('click', () => {
    result.innerHTML = "";
    if (firstValue !== '') {
        firstValue = -parseFloat(firstValue);
        result.innerHTML = firstValue;
    }
    if (firstValue !== '' && secondValue !== '') {
        secondValue = -parseFloat(secondValue);
        result.innerHTML = secondValue;
    }
})

percent.addEventListener('click', () => {
    result.innerHTML = "";
    if (firstValue !== '') {
        resultValue = parseFloat(firstValue) / 100;
        result.innerHTML = resultValue;
    }
    if (firstValue !== '' && secondValue !== '') {
        resultValue = parseFloat(secondValue) / 100;
        result.innerHTML = resultValue;
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
