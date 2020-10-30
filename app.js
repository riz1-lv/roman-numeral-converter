function sum() {
  
  
  let result = parseInt(arabicInput) + parseInt(romanInput);
  
}
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
}

function romanConvert(num){
  let decimalValue = [10000, 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let romanNumeral = [
    '_X',
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
