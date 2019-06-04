"use strict";


let shiftValue = document.getElementById("shiftValue");
let input = document.getElementById("input");
let results = document.getElementById("results");

let btnEncode = document.getElementById("btnEncode");
btnEncode.addEventListener("click", function () { encode(input.value, parseInt(shiftValue.value)) });

let btnDecode = document.getElementById("btnDecode");
btnDecode.addEventListener("click", function () { decode(input.value, parseInt(shiftValue.value)) });

let btnClear = document.getElementById("btn_clear");
btnClear.addEventListener("click", clear);


function encode (str, shift) {
  let tmpStr = '';
  
  for (let i = 0; i < str.length; i++) {
    let character = str.charAt(i);

    //Accept letters only
    if (character.match(/[a-zA-Z]/)) {
      let newLetter = shiftLetter(character, shift, 'left');
      if (newLetter == -1) {
        results.value = "ERROR";
        return;
      }

      tmpStr += newLetter;
    } else {
      tmpStr += character;            //All other characters.
    }
  }

  results.value = tmpStr;
}


function decode (str, shift) {
  let tmpStr = '';
 
  for (let i = 0; i < str.length; i++) {
    let character = str.charAt(i);

    //Accept letters only
    if (character.match(/[a-zA-Z]/)) {
      let newLetter = shiftLetter(character, shift, 'right');
      if (newLetter == -1) {
        results.value = "ERROR";
        return;
      }

      tmpStr += newLetter;
    } else {
      tmpStr += character;     //All other characters.
    }
  }

  results.value = tmpStr;
}


function shiftLetter(letter, shift, direction) {
  const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let count = 1;
  let index = abc.indexOf(letter);
  if (index < 0) {
    return -1;  //Error
  }
  
  if (direction == 'left') {            
    while (count <= shift) {
      if (index == 0) {
        index = 25;
      } else {
        index--;
      }
      count++; 
     console.log(index); 
    }
  } 
  
  if (direction == 'right') {
    while (count <= shift) {
      if (index == 25) {
        index = 0;
      } else {
        index++;
      }
      count++; 
      console.log(index);
    }
  }
  
  return abc[index];
}


function clear () {
  results.value = '';
  input.value = '';
}



