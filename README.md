# estudo-javascript-prototypes


Estudo dos prototypes do javascript sobrescrevendo os metodos do array como o find por exemplo , para entender melhor como funciona por baixo dos panos .

Agora o desafio a mais seria funcionar a consulta em array porém passando um objeto como predicate em casos de listas com objetos que possui outros objetos dentro.
exemplo : 
lista = [ {  nome : "teste" , perfil : { id: 1 , nome : "teste perfil" }  }]
var consulta = lista.find({nome:"teste" , perfil : { id:1 }})  // trazer um objeto que o nome seja igual a teste e o id do perfil igual a 1
