var bill = 50.00; // numerical value for bill total
var tip = 15; // numerical value for tip percentage
document.getElementById('tipOutput').innerHTML = `${tip}%`;
var tipValue = bill * (tip/100)
var finalBill = bill + tipValue
console.log(finalBill)
var tipAmount = document.querySelector('#tipAmount')
var totalBillWithTip = document.querySelector('#totalBillWithTip')

tipAmount.value = tipValue.toFixed(2);
totalBillWithTip.value =finalBill.toFixed(2);

//Show Results

document.getElementById('results').style.display='block'
