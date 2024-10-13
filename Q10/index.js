"use strict";


let realTimeInputContainer = document.querySelector('.result')



function checkInArr(subStrVar,arr){
    if(arr.includes(subStrVar)){
        return true;
    }
    return false;
}


function checkSubString (input,arr){
    
    for (let i = 0;i<input.length;i++){
        let subStrVar = ""
        for (let j = 0; j<=i;j++){
            subStrVar+=input[j]
            if(checkInArr(subStrVar,arr)){
                return subStrVar;
            }
        }
    }
}


 
let isSubString = document.querySelector('button')
isSubString.addEventListener("click",()=>{
    
    let tempInput = document.querySelector('#userInput').value;    
    let wordArr = tempInput.trim().split(' ');

    // console.log("Voila, found it",checkSubString(tempInput,wordArr))
    let subString = document.querySelector('.subString')
    subString.innerText = `Founded a string : ${checkSubString(tempInput,wordArr)}`
})





function printMe(){

    let tempInput = document.querySelector('#userInput').value;    
    let wordArr = tempInput.trim().split(' ');


    
    realTimeInputContainer.innerHTML="";

    let userCurrentInput = document.createElement('p');
    let userCurrentInput_LowerCase = document.createElement('p');
    let userCurrentInput_UpperCase = document.createElement('p');
    let trueLength = document.createElement('p');

    let subString = document.createElement('p')

    userCurrentInput.innerText = `Looking for: ${tempInput}`
    userCurrentInput_LowerCase.innerText = `Lower-Case: ${tempInput.toLowerCase()}`
    userCurrentInput_UpperCase.innerText = `Upper-Case: ${tempInput.toUpperCase()}`
    
    realTimeInputContainer.append(userCurrentInput,userCurrentInput_LowerCase,userCurrentInput_UpperCase,trueLength)
}





