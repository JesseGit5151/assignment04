//import a module
import {add} from './modules/calculator.js';
import {subtract} from './modules/calculator.js';
import {multiply} from './modules/calculator.js';
import {divide} from './modules/calculator.js';


let fstNum;
let scndNum;
let oper;

do {
    fstNum = Number(prompt('Please enter a number'));
    scndNum = Number(prompt('Please enter a second number.'));
    oper = prompt('Would you like to add, subtract, multiply, or divide?');
} while (isNaN(fstNum) || isNaN(scndNum));

function calculate() {
    while(oper !== 'add' && oper !== 'subtract' && oper !== 'multiply' && oper !== 'divide') {
        alert('Please enter a correct value');
        oper = prompt('please enter add, subtract, multiply, or divide');
    }
    switch(oper) {
        case 'add' : 
        alert(add(fstNum, scndNum));
        break;
        case 'subtract' : 
        alert(subtract(fstNum, scndNum));
        break;
        case 'multiply' : 
        alert(multiply(fstNum, scndNum));
        break;
        case 'divide' : 
        alert(divide(fstNum, scndNum));
        break;
        default:
            console.log('error');
            break;
    }
}
calculate();
