window.addEventListener("load", function() {
	document.getElementById("figura-1").addEventListener("click", function() {
		alert("me gusta las galletas");
	})
})
window.addEventListener("load", function() {
	document.getElementById("figura-3").addEventListener("click", function() {
		alert("bonita");
	})
})

var counter=1;
setInterval(function(){
	document.getElementById('radio' + counter) .checked=true;
counter++;
if(counter > 4){
	counter = 1;
}
},5000);