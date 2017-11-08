/*aparecer formulario*/
document.getElementById("lista").onclick = function(){
	document.getElementById('lista').className = "oculto"
	document.getElementById('proyecto').className = "visible"
}
/*desaparesca formulario al presinar X*/
document.getElementById("times").onclick = function(){
	document.getElementById("proyecto").className = "oculto"
	document.getElementById("lista").className = "visible"
}
/*agregar el texto al presionar guardar*/
document.getElementById("crearLista").onclick = function(){
	var nameListas= document.getElementById('nameLista').value;
	document.getElementById('nameLista').value = '';
	var newListas= document.createElement('div');
	var cont = document.getElementById('cont');
	var paragraph= document.createElement('p');
	var nodoText=document.createTextNode(nameListas);
	paragraph.appendChild(nodoText);
	newListas.appendChild(paragraph);
	cont.appendChild(newListas);
}

