var request = new XMLHttpRequest();
  request.open('GET', 'https://dogechain.info/chain/Dogecoin/q/addressbalance/DQDDNn1f9y7TYwTGKZ5vTFoYu7jpSuTCCx', true);

request.send();

 request.onload = function() {
  var data = JSON.parse(this.response);
   if (request.status >= 200 && request.status < 400) {
  document.getElementById('donations').innerHTML=request.responseText;
  document.getElementById('time').innerHTML=Date();
  
  
  var request2 = new XMLHttpRequest();
  request2.open('GET', 'https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=cad', true);
  request2.send();

 request2.onload = function() {
 var price = JSON.parse(request2.response);
 if (request2.status >= 200 && request2.status < 400) {
  document.getElementById("cad").innerHTML="$" + price.dogecoin.cad * request.responseText + " CAD";
  console.log("price:"+request.responseText);
  if (request2.status >= 200 && request2.status < 400 && request.responseText) {
	  
	  	console.log("price "+price.dogecoin.cad+" * total "+ request.responseText +" / 33,000 * 100");
		var inCad = price.dogecoin.cad * request.responseText;
		var percent = inCad/30000*100;

		console.log(percent+"%");

		$('#progress').LineProgressbar({percentage: percent.toFixed(2)});
		
		
	}} else {
  console.log('error');
  document.getElementById('progress').innerHtml="";
   }
 }
   } else {
  document.getElementById('error').innerHTML="<b>DQDDNn1f9y7TYwTGKZ5vTFoYu7jpSuTCCx</b>";
  console.log('error');
   }
 }
 
