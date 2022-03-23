const number = document.querySelector('#number');
const submit = document.querySelector('#submit');
const decimal = document.querySelector('.decimal');
const roman = document.querySelector('.roman');

submit.addEventListener('click', () => {
    decimal.textContent = number.value;
    roman.textContent = convertToRoman(number.value);
});

function convertToRoman(num) {
    let romanNumber = '';

    while (num > 0){
        if(num/1000 >= 1){
            romanNumber = romanNumber + 'M';
            num = num - 1000;
            continue;
        }
        if(num/500 >= 1){
            if(num >= 900 && num < 1000){
                romanNumber = romanNumber + 'CM';
                num = num - 900;
            } else {
                romanNumber = romanNumber + 'D';
                num = num - 500;
            }
            continue;
        }
        if(num/100 >= 1){
            if(num >= 400 && num < 500){
                romanNumber = romanNumber + 'CD'
                num = num - 400;
            } else {
                romanNumber = romanNumber + 'C';
                num = num - 100;
            }
            continue;
        }
        if(num/50 >= 1){
            if(num >= 90 && num < 100){
                romanNumber = romanNumber + 'XC'
                num = num - 90;
            } else {
                romanNumber = romanNumber + 'L';
                num = num - 50;
            }
            continue;
        }
        if(num/10 >= 1){
            if(num >= 40 && num < 50){
                romanNumber = romanNumber + 'XL'
                num = num - 40;
            } else {
                romanNumber = romanNumber + 'X';
                num = num - 10;
            }
            continue;
        }
        if(num/5 >= 1){
            if(num == 9){
                romanNumber = romanNumber + 'IX';
                num = num - 9;
            } else {
                romanNumber = romanNumber + 'V';
                num = num - 5;
            }
            continue;
        }
        if(num/1 >= 1){
            if(num == 4){
                romanNumber = romanNumber + 'IV';
                num = num - 4;
            } else{
                romanNumber = romanNumber + 'I';
                num = num - 1;
            }
            continue;
        }
    }
    return romanNumber;
}