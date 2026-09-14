document.querySelector("#Price").addEventListener('keyup',calc)
document.querySelector("#DownPay").addEventListener('keyup',calc)
document.querySelector("#period").addEventListener('change',calc)


function calc ( ) {

   var price= document.querySelector("#Price").value
var DownPay= document.querySelector("#DownPay").value
 var period =document.querySelector("#period").value
  var loan =0;
 if (price == "" || DownPay==""|| period=="#") {
    document.querySelector('#output1').innerText= "Please complete all the fields"
     document.querySelector('#output2').innerText= "Please complete all the fields"
 }
 else {
    if (period=="3") {
       loan = price - DownPay;
       var Total_Interest= loan * 0.08 *3;
       var total = parseFloat(loan ) + Total_Interest;
       var monthly = parseFloat(total)  / (3 * 12);
      document.querySelector("#output1").innerText = monthly;
document.querySelector("#output2").innerText = Total_Interest;

    }
    else if (period =='7') {
         loan = price - DownPay;
       var Total_Interest= loan * 0.12 * 7;
       var total = parseFloat(loan ) + Total_Interest;
       var monthly = parseFloat(total) / (7 * 12);
      document.querySelector("#output1").innerText = monthly;
document.querySelector("#output2").innerText = Total_Interest;
    }
    else if (period == '5') {
          loan = price - DownPay;
       var Total_Interest= loan * 0.10 * 5;;
       var total = parseFloat(loan ) + Total_Interest;
       var monthly =parseFloat(total)  / (5 * 12);
      document.querySelector("#output1").innerText = monthly;
document.querySelector("#output2").innerText = Total_Interest;
    }
 }
} 