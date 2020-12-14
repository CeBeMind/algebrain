// content.js: Where the branches, chapters, sections and other functions of content belongs
const 	{ setCardStyle } = require('./js/setStyles.js'),
		{ ipcRenderer } = require('electron');

// Constructor of branches
function Branch(index,BrName,BrDescription){
	this.index = index;
	this.name = BrName;
	this.description = BrDescription;
}

// Constructor of chapters
function Chapter(index,ChName,ChDescription){
	this.index = index;
	this.name = ChName;
	this.description = chDescription;
}

// Constructor of sections
function Section(index,SecName,SecDescription,content){
	this.index = index;
	this.name = SecName;
	this.description = SecDescription;
	this.content = content;
}

/*** Chapters ***/
var c1 = new Chapter(0,"INTRODUCCIÓN",
	["CONCEPTOS",
	"LENGUAJE ALGEBRAICO",
	"VALORIZACIÓN DE EXPRESIONES",
	"REDUCCIÓN DE TÉRMINOS SEMEJANTES",
	"USO DEL PARÉNTESIS",
	"MULTIPLICACIÓN ALGEBRAICA",
	"PRODUCTOS NOTABLES"],
	["(p)->Álgebra: El álgebra es la rama de las matemáticas que generaliza los métodos y procedimientos de la aritmética para efectuar cálculo y resolver problemas con cantidades, mediante reglas y operaciones que no necesitan números específicos, lo que permite que una solución sea aplicable a casos y cantidades similares. El padre del algebra fue un matemático árabe llamado Al-Khwarizmi.<-(p)->Variable: Es una letra o símbolo que puede tomar cualquier valor de un conjunto de números. Puede cambiar de valor.<-(p)->Constante: Cualquier letra o símbolo con un valor numérico fijo.<-(p)->Incógnitas: Son letras del abecedario que se utilizan para representar los valores numéricos que se desconocen. Se representan con las últimas letras del abecedario.<-(p)->Literales: Son letras del abecedario que se utilizan para representar aquellos valores que son conocidos o que pueden obtenerse directamente. Se representan con las primeras letras del abecedario.<-(p)->Fórmula Algebraica: Es la representación, por medio de letras, de una regla o de un principio general.<-",
	"",
	"",
	"",
	"",
	"",
	""]);

// Getting data

function showBranches (container){
	var randomStyle = Math.floor(Math.random() * 6); // Generates random number
	var branches, card;

	ipcRenderer.send('branches'); // Send IPC to main
	ipcRenderer.on('complete', function (event,response){ // When IPC answer, do
		branches = response[0]; // Setting up branches as rows
		for (let i = 0; i < branches.length; i++){
			imageURL = '../public/images/img' + (1+i) + '.png'; // Which image will use the card
			card = setCardStyle[0](branches[i].BrName,imageURL);
			card.setAttribute("brId",branches[i].BranchID);
			container.insertAdjacentElement("beforeend",card); // Inserts card in container
		}
	});

}

function showChapters(container,brId,brName){
	var randomStyle = Math.floor(Math.random() * 6); // Generates random number
	var chapters, list = [];

	ipcRenderer.send('chapters',brId); // Send IPC to main
	ipcRenderer.on('complete', function (event,response){ // When IPC answer, do
		chapters = response[0]; // Setting up chapters as rows
		
		chapters.foreach((chapter,index) =>
			list.push(chapter.ChName));
		
		for (let i = 0; i < branches.length; i++){
			list = setListStyle[0](list,brName);
			card.setAttribute("brId",branches[i].BranchID);
			container.insertAdjacentElement("beforeend",card); // Inserts card in container
		}
	});

} 

function showSections(){

}

function showContent(){

}