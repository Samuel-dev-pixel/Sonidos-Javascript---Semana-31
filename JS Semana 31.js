function pausa1v() {
	document.getElementById('pista1').pause();
	var pausa1 = document.getElementById('pausa1');
	if (pausa1.value=="||") {
		pausa1.value=">";
		pista1.pause();
	}
	else
	{
		pausa1.value="||"
		pista1.play();
	}
}
function pausa5v() {
	document.getElementById('pista5').pause();
	var pausa5 = document.getElementById('pausa5');
	if (pausa5.value=="||") {
		pausa5.value=">";
		pista5.pause();
	}
	else
	{
		pausa5.value="||"
		pista5.play();
	}
}
function pausa2v() {
	document.getElementById('pista2').pause();
	var pausa2 = document.getElementById('pausa2');
	if (pausa2.value=="||") {
		pausa2.value=">";
		pista2.pause();
	}
	else
	{
		pausa2.value="||"
		pista2.play();
	}
}
function pausa3v() {
	document.getElementById('pista3').pause();
	var pausa3 = document.getElementById('pausa3');
	if (pausa3.value=="||") {
		pausa3.value=">";
		pista3.pause();
	}
	else
	{
		pausa3.value="||"
		pista3.play();
	}
}
function pausa4v() {
	document.getElementById('pista4').pause();
	var pausa4 = document.getElementById('pausa4');
	if (pausa4.value=="||") {
		pausa4.value=">";
		pista4.pause();
	}
	else
	{
		pausa4.value="||"
		pista4.play();
	}
}
function menosv() {
	pista1.volume -= 0.1;
    pista2.volume -= 0.1;
    pista3.volume -= 0.1;
    pista4.volume -= 0.1;
    pista5.volume -= 0.1;
}
function masv() {
	pista1.volume += 0.1;
    pista2.volume += 0.1;
    pista3.volume += 0.1;
    pista4.volume += 0.1;
    pista5.volume += 0.1;
}