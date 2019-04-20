var request = new XMLHttpRequest();
  request.open('GET', 'https://dogechain.info/chain/Dogecoin/q/addressbalance/DQDDNn1f9y7TYwTGKZ5vTFoYu7jpSuTCCx', true);

 request.onload = function() {
   var data = JSON.parse(this.response);
  

   if (request.status >= 200 && request.status < 400) {
  document.getElementById('donations').innerHTML=request.responseText;
  document.getElementById('time').innerHTML=Date();
   } else {
  document.getElementById('error').innerHTML="<b>DQDDNn1f9y7TYwTGKZ5vTFoYu7jpSuTCCx</b>";
  console.log('error');
   }
 }
 request.send();

 var request2 = new XMLHttpRequest();
 request2.open('GET', 'https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=usd', true);
 request2.onload = function() {
 var price = JSON.parse(request2.responseText);
 if (request2.status >= 200 && request2.status < 400) {
  document.getElementById("usd").innerHTML="$" + price.dogecoin.usd * request.responseText;
  console.log("price:"+request.responseText);
   } else {
  console.log('error');
   }
 }
 
 request2.send();