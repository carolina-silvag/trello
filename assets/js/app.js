/*aparecer formulario*/
document.getElementById("lista").onclick = function(){
	document.getElementById("lista").className = "oculto";
	document.getElementById("proyecto").className = "visible";
	document.getElementById("nameLista").focus();
}
/*desaparesca formulario al presinar X*/
document.getElementById("times").onclick = function(){
	document.getElementById("proyecto").className = "oculto";
	document.getElementById("lista").className = "visible";

}

/*agregar el texto al presionar guardar*/
document.getElementById("crearLista").onclick = function(){
	var nameListas= document.getElementById("nameLista").value;
	document.getElementById("nameLista").value = "";
	var newListas= document.createElement("div");
	var secondPart = document.getElementById("secondPart");
	var paragraph= document.createElement("p");
	var nodoText=document.createTextNode(nameListas);
	var add = document.createElement('a');
	add.setAttribute('href', '#');
	var textAdd=document.createTextNode('añadir tarjeta');

	paragraph.appendChild(nodoText);
	newListas.appendChild(paragraph);
	newListas.className = "col cont";
	add.appendChild(textAdd);
	add.className = "tarjeta";
	newListas.appendChild(add);
	// insertBefore agrega un elemento antes de otro elemente, en este caso agrega newListas antes del primer hijo de secondPart
	secondPart.insertBefore(newListas, secondPart.firstChild); 
	//agrega textarea
	add.addEventListener('click', function(){
		var textarea = document.createElement('textarea');
		var button = document.createElement('button')
		var add1 = document.createElement('a');
		add1.setAttribute('href', '#');
		var textAdd=document.createTextNode('añadir');
		var time = document.createElement('a');
		time.setAttribute('href', '#');
		var times = document.createElement('i');/*esto es para cancelar*/
		times.classList.add("fa", "fa-times", "times");
		/*agregando*/
		button.appendChild(add1)
		add1.appendChild(textAdd);
		newListas.appendChild(textarea);
		newListas.appendChild(button);
		newListas.appendChild(time);
		time.appendChild(times);
		button.className = "add";
		textarea.className = "text";
		//ocultar el boton añadir tarjeta
		add.className = "oculto";
		//remover textarea cuando no quiero escribir
		time.addEventListener("click", function(){
			var nodes = newListas.childNodes;
			var nodeChange  = nodes[nodes.length - 3];
			nodeChange.remove();
		})
		//agregar texarea hacia abajo
		add1.addEventListener('click', function(){
			//childNodes Selecciona todos los nodos hijos de newListas
			var nodes = newListas.childNodes;
			//obtenemos el antepenultimo nodo que corresponde al elemento que queremos cambiar, 
			// el ultimo es el icono, el penultimo es el boton y el antepenultimo es el textarea que estamos creando
			var nodeChange  = nodes[nodes.length - 3];
			//se cambia la clase al textarea que se agrega
			nodeChange.className = "text2";
			nodeChange.disabled = "true";
			var textarea = document.createElement('textarea');
			/*var edit = document.createElement('a');
			edit.setAttribute('href', '#');
			var editar = document.createElement('i');
		    editar.classList.add("fa", "fa-pencil-square", "editar");*/
			textarea.className = "text";
			/*edit.appendChild(editar);
			newListas.insertBefore(edit,button);*/
			newListas.insertBefore(textarea, button);

			//eliminar no se me ocurrio 
			/*edit.addEventListener("click", function(){
				textarea.className = "text";
				textarea.disabled = "false";
			})*/

		})

	})
}

