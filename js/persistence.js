class Persistence{

constructor(){
this.personas = new Array();

// se guarda una referencia del localStorage
this.db = window.localStorage;
this.db.personas = this.db.getItem('personas') || "[]";
}
/**
* recupera todos los datos del localStroge
* y los devuelve en formato JSON
* @return array de objetos con todos los contactos
*/
recuperarTodos(){


//console.log( this.db.getItem('personas') );
//console.log( JSON.parse( this.db.getItem('personas') ) );
return JSON.parse( this.db.getItem('personas') );
}
/**
* Guarda un contacto en el localStorage.
* El método recibe un contacto como parámetro
* Se recuperan todos los datos y se carga el nuevo contacto al final
* del array, luego se vuelven a guardad los datos en el localStorage
* @param  contacto Objeto con los datos del contacto nuevo
*/
guardar( contacto ){
this.personas = this.recuperarTodos();
this.personas.push( contacto );
this.db.personas = JSON.stringify( this.personas );
}
recuperarPorIndice( indice ){
this.personas = this.recuperarTodos();
return this.personas[indice];
}
modificar( contacto, indice ){
this.personas = this.recuperarTodos();
this.personas[indice]=contacto;
this.db.personas = JSON.stringify( this.personas );
}
eliminar(){
	this.personas = this.recuperarTodos();
	//Elimina un elemento del array utilizando el indice
	//Splice = elimina un elemento del array
	this.personas.splice( indice, 1 );
	this.db.personas = JSON.stringify( this.personas );
}
}