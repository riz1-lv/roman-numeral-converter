
function romanify(){
  let arabicInput = document.getElementById('arabicInput').value;
  let result = parseInt(arabicInput);
  if (!isNaN(result)) {
    document.getElementById('romanInput').value = romanConvert(result);
    $('#errorMsg').text('');
    }
    
  if(isNaN(result)){
    document.getElementById('romanInput').value = '';
    $('#errorMsg').text('Enter a Number');
  }
  if(arabicInput.length === 0){
    $('#errorMsg').text('');
  }
}
function numerify(){
  let romanInput = document.getElementById('romanInput').value;
  let result = romanInput;
  if (!isNaN(result)) {
    document.getElementById('arabicInput').value = '';
    $('#romanErrorMsg').text('Enter a Roman numeral');
    }
    
  if(isNaN(result)){
    document.getElementById('arabicInput').value = arabicConvert(result);
    $('#romanErrorMsg').text('');
  }
  if(romanInput.length === 0){
    $('#romanErrorMsg').text('');
  }
}


function arabicConvert(str){
  let decimalValue = [1000000,500000,100000,50000, 10000, 5000, 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let romanNumeral = [
    '_M',
    '_D',
    '_C',
    '_L',
    '_X',
    '_V',
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
    "I"
];

  let numeral = 0;

  for (let i = 0; i < decimalValue.length; i++) {
    while (str.includes(romanNumeral[i])) {
      numeral += decimalValue[i];
      console.log(str);
      str = str.replace(romanNumeral[i], "")
      console.log(str);
    }
  }

  return numeral;
}


function romanConvert(num){
  let decimalValue = [1000000,500000,100000,50000, 10000, 5000, 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let romanNumeral = [
    '_M',
    '_D',
    '_C',
    '_L',
    '_X',
    '_V',
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
    "I"
];

  let romanized = "";

  for (let i = 0; i < decimalValue.length; i++) {
    while (decimalValue[i] <= num) {
      romanized += romanNumeral[i];
      num -= decimalValue[i];
    }
  }

  return romanized;
}
