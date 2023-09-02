let oper = "";

function calculate(num1, num2, oper){
    if (oper === "+"){
        return console.log(num1 + num2);
    }
    else if (oper === "-"){
        return console.log(num1 - num2);
    }
    else if (oper === "*"){
        return console.log(num1 * num2);
    }
    else  {
        return console.log(num1 / num2);
    }
}

function calcSwitch(num1, num2, oper){
    switch (oper){
        case "+":
            return console.log(num1 + num2);
            break;
        case "-":
            return console.log(num1- num2);
            break;
        case "*":
            return console.log(num1 * num2);
            break;
        case "/":
            return console.log(num1 / num2);
    }

}

calculate(2,2,"+");
calculate(3,2,"-");
calculate(3,3, "*");
calculate(6,3,"/");

calcSwitch(2,2,"+");
calcSwitch(3,2,"-");
calcSwitch(3,3, "*");
calcSwitch(6,3,"/");