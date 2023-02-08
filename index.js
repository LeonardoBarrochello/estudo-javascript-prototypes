import "./arrHelp.js";
var lista = [{ id: 4, nome: "josé", idade: 53 }, { id: 5, nome: "maria", idade: 35 }]

var novaLista = lista.find({ nome: "josé", idade: 53 });
var novaLista2 = lista.where((u) => { return u.nome == "maria" || u.idade == 53 })
console.log("resultado com object criteria", novaLista)
console.log("resultado com function criteria", novaLista2)

