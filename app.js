function sum() {
  let txtFirstNo = document.getElementById('txtFirstNo').value;
  let txtSecondNo = document.getElementById('txtSecondNo').value;
  let result = parseInt(txtFirstNo) + parseInt(txtSecondNo);
  if (!isNaN(result)) {
      document.getElementById('txtSecondNo').value = result;
  }
}