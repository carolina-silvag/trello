/*aparecer formulario*/
document.getElementById("lista").onclick = function(){
	document.getElementById('lista').className = "oculto"
	console.log('hola')
	document.getElementById('proyecto').className = "visible"
}
document.getElementById("times").onclick = function(){
	document.getElementById("proyecto").className = "oculto"
	document.getElementById("lista").className = "visible"
}
