
let str = "";
let strArray = [];
let strChar = "";
let reString = "";


function reverseString(str){
    for (let i = 0; i < str.length; i++){
        strChar = str[i];
        strArray.push(strChar);
        console.log(strArray);
    }
    for (let i = str.length -1; i >=0; i--){
        reString += strArray.pop()
    }
    return console.log(reString);
}

reverseString("seven");