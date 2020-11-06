const decimalValue = [100000, 90000, 50000, 40000, 10000, 9000, 5000, 4000, 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const romanNumeral = [
  '\u2188',
  '\u2182\u2188',
  '\u2187',
  '\u2182\u2187',
  '\u2182',
  'M\u2182',
  '\u2181',
  'M\u2181',
  "M",
  "CM",
  "D",
  "CD",
  "C",
  "XC",
  "L",
  "XL",
  "X",
  "IX",
  "V",
  "IV",
  "I",
];
function romanify(){
  let arabicInput = document.getElementById('arabicInput').value;
  let result = parseInt(arabicInput);
  if (!isNaN(result)) {
    document.getElementById('romanInput').value = romanConvert(result);
    $('#errorMsg').text('');
    }
    
  if(!(arabicInput.match(/^[0-9]+$/g))|| result > 399999){
    document.getElementById('romanInput').value = '';
    $('#errorMsg').text('Enter a number from 1 to 399999');
    $('#arabicInput').addClass('is-invalid');
  }
  if(arabicInput.length === 0){
    $('#errorMsg').text('');
    $('#arabicInput').removeClass('is-invalid');
  }
}
function numerify(){
  let romanInput = document.getElementById('romanInput').value;
  let result = romanInput;
  if (!isNaN(result) || arabicConvert(result) == 0) {
    document.getElementById('arabicInput').value = '';
    $('#romanErrorMsg').text('Enter a valid Roman numeral in all caps');
    $('#romanInput').addClass('is-invalid');
    }
  else{
    document.getElementById('arabicInput').value = arabicConvert(result);
    $('#romanErrorMsg').text('');
  }
  if(romanInput.length === 0){
    $('#romanErrorMsg').text('');
    $('#romanInput').removeClass('is-invalid');
  }
}


function arabicConvert(str){
  if(str.match(/[a-zABE-HJ-UWYZ]/g)){
    return 0;
  }

  let numeral = 0;
  
  for (let i = decimalValue.length-1; i > 0; i--) {
    console.log(i)
    while (str.includes(romanNumeral[i])) {
      let matchIndex = str.indexOf(romanNumeral[i]);
      let x = str[matchIndex] + str[matchIndex+1];
      console.log(x);
      if(romanNumeral.includes(x)){
        numeral+= decimalValue[romanNumeral.indexOf(x)]
        str = str.replace(x, "")
      }
      else{
      numeral+= decimalValue[i];
      str = str.replace(romanNumeral[i], "")
      }
      console.log(str, numeral);
      console.log(str, numeral);
    }
  }

  return numeral;
}


function romanConvert(num){

  let romanized = "";

  for (let i = 0; i < decimalValue.length; i++) {
    while (decimalValue[i] <= num) {
      romanized += romanNumeral[i];
      num -= decimalValue[i];
    }
  }

  return romanized;
}
