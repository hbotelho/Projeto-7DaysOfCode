// 7 DAYS OF CODE (ALURA)

var botao1 = document.getElementById("botao1");
var botao2 = document.getElementById("botao2");
var botao3 = document.getElementById("botao3");
var botao4 = document.getElementById("botao4");
var botao5 = document.getElementById("botao5");
var botao6 = document.getElementById("botao6");
var botao7 = document.getElementById("botao7");

//--DIA 01--

function dia01() {
	botao1.classList.toggle("dark");
	botao2.classList.remove("dark");
	botao3.classList.remove("dark");
	botao4.classList.remove("dark");
	botao5.classList.remove("dark");
	botao6.classList.remove("dark");
	botao7.classList.remove("dark");

	document.getElementById("resultado").style.display = "block";
	document.getElementById("controlesDia03").style.display = "none";
	document.getElementById("resultadoDia4").style.display = "none";
	document.getElementById("resultadoDia5").style.display = "none";

	let numeroUm = 1;
	let stringUm = {
		nome: "um",
		numero: 1,
		string: "1"
	};
	let numeroTrinta = 30;
	let stringTrinta = "30";
	let numeroDez = 10;
	let stringDez = "10";

	var elementoPrograma = document.getElementById("programa");

	programa =
		"<p> let numeroTrinta = 30; <br> let stringTrinta = '30';<br> let numeroDez = 10;<br> let stringDez = '10';</p>";

	elementoPrograma.innerHTML = programa;

	var elementoResultado = document.getElementById("resultado");

	if (numeroUm == stringUm.string) {
		resultado30 =
			"<p>As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes.</p>";
	} else {
		resultado30 =
			"<p>As variáveis numeroUm e stringUm não tem o mesmo valor.</p>";
	}

	if (numeroTrinta === stringTrinta) {
		resultado30 =
			"<p>As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo.</p>";
	} else {
		resultado30 =
			"<p>As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo.</p>";
	}

	if (numeroDez == stringDez) {
		resultado10 =
			"<p>As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes.</p>";
	} else {
		resultado10 =
			"<p>As variáveis numeroDez e stringDez não tem o mesmo valor.</p>";
	}
	elementoResultado.innerHTML = resultado30 + "<br>" + resultado10;

	console.log("----------FIM DO PRIMEIRO EXERCICIO-----------------");
}

//-------------------------------------------------
//--DIA 02--

// - Qual o seu nome?
// - Quantos anos você tem?
// - Qual linguagem de programação você está estudando?

function dia02() {
	botao1.classList.remove("dark");
	botao2.classList.toggle("dark");
	botao3.classList.remove("dark");
	botao4.classList.remove("dark");
	botao5.classList.remove("dark");
	botao6.classList.remove("dark");
	botao7.classList.remove("dark");

	document.getElementById("resultado").style.display = "block";
	document.getElementById("controlesDia03").style.display = "none";
	document.getElementById("resultadoDia4").style.display = "none";
	document.getElementById("resultadoDia5").style.display = "none";

	var elementoPrograma = document.getElementById("programa");

	programa =
		"<p> - Qual o seu nome?<br> - Quantos anos você tem? <br> - Qual linguagem de programação você está estudando?</p>";

	elementoPrograma.innerHTML = programa;

	perguntas();

	function perguntas() {
		const nome = prompt("Qual seu nome?");
		const idade = prompt("Qual sua idade?");
		const linguagem = prompt(
			"Qual linguagem de programação você está estudando?"
		);

		const msg = `Olá ${nome} , você tem ${idade} anos e já está aprendendo ${linguagem}!`;

		alert(msg);

		preferencia();

		function preferencia() {
			const gosto = prompt(
				"Você gosta de estudar " +
					linguagem +
					"? Responda com o número 1 para SIM ou 2 para NÃO."
			);

			const msg1 = `Que bom, ${nome}! Muito bom saber que está gostando de estudar ${linguagem}!😋😁😁`;

			const msg2 = `Que pena, ${nome}! Espero que você encontre algo que goste de estudar, além de ${linguagem} 😊.`;

			var elementoResultado = document.getElementById("resultado");

			if (gosto == 1) {
				alert(msg1);
				elementoResultado.innerHTML = msg + "<br><br>" + msg1;
			} else if (gosto == 2) {
				alert(msg2);
				elementoResultado.innerHTML = msg + "<br><br>" + msg2;
			} else {
				alert("⚠ ATENÇÃO ⚠ Responda com o número 1 para SIM ou 2 para NÃO.");
				return preferencia();
			}
		}
	}
	console.log("----------FIM DO SEGUNDO EXERCICIO-----------------");
}
//-------------------------------------------------
//--DIA 03--
function dia03() {
	botao1.classList.remove("dark");
	botao2.classList.remove("dark");
	botao3.classList.toggle("dark");
	botao4.classList.remove("dark");
	botao5.classList.remove("dark");
	botao6.classList.remove("dark");
	botao7.classList.remove("dark");

	document.getElementById("resultado").style.display = "none";
	document.getElementById("resultadoDia4").style.display = "none";
	document.getElementById("resultadoDia5").style.display = "none";

	var elementoPrograma = document.getElementById("programa");

	programa =
		"<p> 1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.<br> 2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.<br> 3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.<br>4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer.</p>";

	elementoPrograma.innerHTML = programa;

	document.getElementById("controlesDia03").style.display = "block";
	let p = document.getElementById("controlesDia03");
	let posicao = p.getBoundingClientRect();
	window.scrollTo(posicao.x, posicao.y);
}
function resposta01D3() {
	let pergunta02Dia3 = "";
	let elementoResposta01 = document.getElementById("pergunta02Dia03").value;
	let elementoPergunta02 = document.getElementById("pergunta02Dia03");

	if (elementoResposta01 == "FRONT-END") {
		document.getElementById("froend").classList.toggle("dark");
		document.getElementById("bckend").classList.remove("dark");

		pergunta02Dia3 =
			"<p>Em que você pretende se especializar na área de " +
			elementoResposta01 +
			"?</p><br><button id='rct' onClick='document.getElementById(\"pergunta03Dia03\").value = \"REACT\";resposta02D3()'>React</button><button id='vue' onClick='document.getElementById(\"pergunta03Dia03\").value = \"VUE\";resposta02D3()'>Vue</button>";
		console.log("a linguagem selecionada é " + elementoResposta01);
	} else if (elementoResposta01 == "BACK-END") {
		document.getElementById("froend").classList.remove("dark");
		document.getElementById("bckend").classList.toggle("dark");

		pergunta02Dia3 =
			"<p>Em que você pretende se especializar na área de " +
			elementoResposta01 +
			"?</p><br><button id='ci' onClick='document.getElementById(\"pergunta03Dia03\").value = \"C#\";resposta02D3()'>C#</button><button id='jv' onClick='document.getElementById(\"pergunta03Dia03\").value = \"JAVA\";resposta02D3()'>Java</button>";
		console.log("a linguagem selecionada é " + elementoResposta01);
	}

	elementoPergunta02.innerHTML = pergunta02Dia3;
	let p = document.getElementById("pergunta02Dia03");
	let posicao = p.getBoundingClientRect();
	window.scrollTo(posicao.x, posicao.y);
}
function resposta02D3() {
	let pergunta03Dia3 = "";
	let elementoResposta01 = document.getElementById("pergunta02Dia03").value;
	let elementoResposta02 = document.getElementById("pergunta03Dia03").value;
	let elementoPergunta03 = document.getElementById("pergunta03Dia03");

	console.log(elementoResposta02);

	if (document.getElementById("pergunta03Dia03").value == "REACT") {
		document.getElementById("rct").classList.toggle("dark");
		document.getElementById("vue").classList.remove("dark");
	} else if (document.getElementById("pergunta03Dia03").value == "VUE") {
		document.getElementById("rct").classList.remove("dark");
		document.getElementById("vue").classList.toggle("dark");
	} else if (document.getElementById("pergunta03Dia03").value == "C#") {
		document.getElementById("ci").classList.toggle("dark");
		document.getElementById("jv").classList.remove("dark");
	} else if (document.getElementById("pergunta03Dia03").value == "JAVA") {
		document.getElementById("ci").classList.remove("dark");
		document.getElementById("jv").classList.toggle("dark");
	}

	pergunta03Dia3 =
		"<p> Você pretende continar estudando apenas " +
		elementoResposta01 +
		" com ênfase em " +
		elementoResposta02 +
		" ou se tornar desenvolvedor FULLSTACK?</p><br><button id='msm' onClick='document.getElementById(\"pergunta04Dia03\").value = \"MESMO\";resposta03D3()'>Continuar assim</button><button id='fllstck' onClick='document.getElementById(\"pergunta04Dia03\").value = \"FULLSTACK\";resposta03D3()'>FULLSTACK</button>";

	elementoPergunta03.innerHTML = pergunta03Dia3;
	let p = document.getElementById("pergunta03Dia03");
	let posicao = p.getBoundingClientRect();
	window.scrollTo(posicao.x, posicao.y);
}

function resposta03D3() {
	let pergunta04Dia3 = "";
	let elementoPergunta04 = document.getElementById("pergunta04Dia03");

	if (document.getElementById("pergunta04Dia03").value == "MESMO") {
		document.getElementById("msm").classList.toggle("dark");
		document.getElementById("fllstck").classList.remove("dark");
	} else if (document.getElementById("pergunta04Dia03").value == "FULLSTACK") {
		document.getElementById("msm").classList.remove("dark");
		document.getElementById("fllstck").classList.toggle("dark");
	}

	pergunta04Dia3 =
		'<p>Além destas, você gostaria de aprender outras tecnologias na área de desenvolvimento?</p><br><button id="sim" onClick=\'novasTecs()\'>SIM</button><button id="nao" onClick=\'alert("Tudo bem. Espero que tenha êxito em seus estudos!!😊😊"); naobotao()\'>NÃO</button>';

	elementoPergunta04.innerHTML = pergunta04Dia3;

	let p = document.getElementById("pergunta04Dia03");
	let posicao = p.getBoundingClientRect();
	window.scrollTo(posicao.x, posicao.y);
}
function novasTecs() {
	let elementoFinal = document.getElementById("mensagemFinal");

	let tecnologia = prompt("O que mais você deseja aprender?");

	document.getElementById("sim").classList.toggle("dark");
	document.getElementById("nao").classList.remove("dark");

	while (tecnologia !== null) {
		alert(`${tecnologia} é realmente uma tecnologia muito legal!`);
		tecnologia = prompt("O que mais você deseja aprender?");
	}
}

function naobotao() {
	document.getElementById("sim").classList.remove("dark");
	document.getElementById("nao").classList.toggle("dark");
}

//-------------------------------------------------
//--DIA 04--
function dia04() {
	botao1.classList.remove("dark");
	botao2.classList.remove("dark");
	botao3.classList.remove("dark");
	botao4.classList.toggle("dark");
	botao5.classList.remove("dark");
	botao6.classList.remove("dark");
	botao7.classList.remove("dark");

	var elementoPrograma = document.getElementById("programa");

	programa =
		"<p> 1. Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar (7, por exemplo).<br>2. Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas.<br>3. No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.<br>4. Depois que o programinha estiver funcionando, tente usar um número randômico em vez de um número pré-definido.</p>";

	elementoPrograma.innerHTML = programa;

	document.getElementById("resultado").style.display = "none";
	document.getElementById("resultadoDia4").style.display = "flex";
	document.getElementById("controlesDia03").style.display = "none";
	document.getElementById("resultadoDia5").style.display = "none";
	let p = document.getElementById("resultadoDia4");
	let posicao = p.getBoundingClientRect();
	window.scrollTo(posicao.x, posicao.y);

	numeroOculto = Math.floor(Math.random() * (101 - 0) + 0);
	i = 0;
	document.getElementById("chute").disabled = false;
	document.getElementById("chute").classList.remove("opaco");
	document.getElementById("tentativa").style.display = "none";
	document.getElementById("resposta").style.display = "none";
	document.getElementById("nova-tentativa").style.display = "none";
}

function chutar() {
	i++;
	var elementoTentativa = document.getElementById("tentativa");
	elementoTentativa.innerHTML = "Tentativa 0" + i + " de 05";

	var elementoResposta = document.getElementById("resposta");

	document.getElementById("tentativa").style.display = "block";
	document.getElementById("resposta").style.display = "block";

	var numeroChute = parseInt(document.getElementById("valor").value);

	let pos = document.getElementById("resposta");
	let position = pos.getBoundingClientRect();
	window.scrollTo(position.x, position.y);

	if (numeroChute < 0 || numeroChute > 100) {
		alert("❌Você deve chutar um número entre 0 e 100❌");
		document.getElementById("valor").value = "";
	} else if (numeroChute == numeroOculto) {
		elementoResposta.innerHTML =
			"Parabéns, você acertou! O número oculto é " + numeroOculto + "!!!";
		document.getElementById("valor").value = "";
	} else if (i == 5 && numeroChute !== numeroOculto) {
		elementoResposta.innerHTML =
			"Que pena, não foi dessa vez 😥. O número oculto era " + numeroOculto + "!";
		document.getElementById("valor").value = "";
		document.getElementById("chute").disabled = true;
		document.getElementById("nova-tentativa").style.display = "block";
		document.getElementById("chute").classList.toggle("opaco");
	} else if (numeroChute < numeroOculto) {
		elementoResposta.innerHTML =
			"Você errou essa. O número oculto é MAIOR do que " + numeroChute + ".";
		document.getElementById("valor").value = "";
	} else if (numeroChute > numeroOculto) {
		elementoResposta.innerHTML =
			"Você errou essa. O número oculto é MENOR do que " + numeroChute + ".";
		document.getElementById("valor").value = "";
	}
}

//-------------------------------------------------
//--DIA 05--

let catHortifruti = [];
let catLaticinios = [];
let catAcougue = [];
let catCongelados = [];
let catLimpeza = [];

function dia05() {
	botao1.classList.remove("dark");
	botao2.classList.remove("dark");
	botao3.classList.remove("dark");
	botao4.classList.remove("dark");
	botao5.classList.toggle("dark");
	botao6.classList.remove("dark");
	botao7.classList.remove("dark");

	var elementoPrograma = document.getElementById("programa");

	programa =
		"<p>1. você deve criar um programa em Javascript que perguntará se você deseja adicionar uma comida na sua lista de compras, e você deve poder responder com sim ou não.<br>2. Em seguida, ele perguntará qual comida você deseja inserir, e você digitará o nome dela, como por exemplo batata.<br>3. Depois, ele deverá perguntar em qual categoria essa comida se encaixa, com algumas opções já pré-definidas, como frutas, laticínios, congelados, doces e o que mais você achar interessante. Assim, você poderá separar tudo no seu devido grupo.<br>4. Por fim, caso você não queira mais adicionar nada na lista de compras e responder não na primeira pergunta, ele irá exibir uma lista com todos os itens agrupados, da seguinte forma:<br>Caso você adicione na sua lista:<br>banana, leite em pó, tomate, leite vegetal, chiclete, bala de ursinho, maçã, uva, abacate e leite de vaca<br>O programa deverá imprimir, por exemplo:<br>Lista de compras:<br>Frutas: banana, tomate, maçã, uva, abacate<br>Laticínios: leite vegetal, leite de vaca, leite em pó<br>Congelados:<br>Doces: chiclete e bala de ursinho</p>";

	elementoPrograma.innerHTML = programa;

	document.getElementById("resultado").style.display = "none";
	document.getElementById("controlesDia03").style.display = "none";
	document.getElementById("resultadoDia4").style.display = "none";
	document.getElementById("resultadoDia5").style.display = "flex";

	catHortifruti = [];
	catLaticinios = [];
	catAcougue = [];
	catCongelados = [];
	catLimpeza = [];

	document.getElementById("ancora").style.display = "none";
	document.getElementById("ancora").value = "";

	document.getElementById("hortifruti").classList.remove("dark");
	document.getElementById("laticinios").classList.remove("dark");
	document.getElementById("acougue").classList.remove("dark");
	document.getElementById("congelados").classList.remove("dark");
	document.getElementById("limpeza").classList.remove("dark");

	document.getElementById("novaLista").style.display = "none";
	document.getElementById("submeter").classList.remove("opaco");
	document.getElementById("submeter").disabled = false;

	let p = document.getElementById("resultadoDia5");
	let posicao = p.getBoundingClientRect();
	window.scrollTo(posicao.x, posicao.y);
}

function botoesChange() {
	categoria = document.getElementById("ancora").value;

	if (categoria == "catHortifruti") {
		document.getElementById("hortifruti").classList.toggle("dark");
		document.getElementById("laticinios").classList.remove("dark");
		document.getElementById("acougue").classList.remove("dark");
		document.getElementById("congelados").classList.remove("dark");
		document.getElementById("limpeza").classList.remove("dark");
	} else if (categoria == "catLaticinios") {
		document.getElementById("hortifruti").classList.remove("dark");
		document.getElementById("laticinios").classList.toggle("dark");
		document.getElementById("acougue").classList.remove("dark");
		document.getElementById("congelados").classList.remove("dark");
		document.getElementById("limpeza").classList.remove("dark");
	} else if (categoria == "catAcougue") {
		document.getElementById("hortifruti").classList.remove("dark");
		document.getElementById("laticinios").classList.remove("dark");
		document.getElementById("acougue").classList.toggle("dark");
		document.getElementById("congelados").classList.remove("dark");
		document.getElementById("limpeza").classList.remove("dark");
	} else if (categoria == "catCongelados") {
		document.getElementById("hortifruti").classList.remove("dark");
		document.getElementById("laticinios").classList.remove("dark");
		document.getElementById("acougue").classList.remove("dark");
		document.getElementById("congelados").classList.toggle("dark");
		document.getElementById("limpeza").classList.remove("dark");
	} else if (categoria == "catLimpeza") {
		document.getElementById("hortifruti").classList.remove("dark");
		document.getElementById("laticinios").classList.remove("dark");
		document.getElementById("acougue").classList.remove("dark");
		document.getElementById("congelados").classList.remove("dark");
		document.getElementById("limpeza").classList.toggle("dark");
	}
}

function submeter() {
	let itemLista = document.getElementById("item").value;

	let elementoHort = document.getElementById("listaHort");
	let elementoLat = document.getElementById("listaLat");
	let elementoAcougue = document.getElementById("listaAcougue");
	let elementoCong = document.getElementById("listaCong");
	let elementoLimp = document.getElementById("listaLimp");

	// console.log(categoria);
	// console.log(itemLista);
	// console.log(catHortifruti);

	if (document.getElementById("ancora").value == "") {
		alert("Primeiro, selecione a CATEGORIA");
		return dia05();
	} else if (categoria == "catHortifruti") {
		catHortifruti.push(itemLista);
	} else if (categoria == "catLaticinios") {
		catLaticinios.push(itemLista);
	} else if (categoria == "catAcougue") {
		catAcougue.push(itemLista);
	} else if (categoria == "catCongelados") {
		catCongelados.push(itemLista);
	} else if (categoria == "catLimpeza") {
		catLimpeza.push(itemLista);
	} else {
		alert("Primeiro, selecione a categoria");
	}

	let maisItens = prompt(
		"Deseja adicionar mais ítens? Digite 1 para 'SIM' e 2 para 'NÃO'"
	);
	if (maisItens == "1") {
		alert("Selecione a categoria e insira o produto");
	} else if (maisItens == "2" || maisItens == null) {
		elementoHort.innerHTML = "<p>Hortifruti: " + catHortifruti + "</p>";
		elementoLat.innerHTML = "<p>Laticínios: " + catLaticinios + "</p>";
		elementoAcougue.innerHTML = "<p>Açougue: " + catAcougue + "</p>";
		elementoCong.innerHTML = "<p>Congelados: " + catCongelados + "</p>";
		elementoLimp.innerHTML = "<p>Limpeza: " + catLimpeza + "</p>";

		document.getElementById("ancora").style.display = "block";
		document.getElementById("novaLista").style.display = "block";
		document.getElementById("submeter").classList.toggle("opaco");
		document.getElementById("submeter").disabled = true;

		let p = document.getElementById("ancora");
		let posicao = p.getBoundingClientRect();
		window.scrollTo(posicao.x, posicao.y);
	} else {
		return maisItens;
	}
	document.getElementById("item").value = "";
}

//-------------------------------------------------
//--DIA 06--
function dia06() {
	botao1.classList.remove("dark");
	botao2.classList.remove("dark");
	botao3.classList.remove("dark");
	botao4.classList.remove("dark");
	botao5.classList.remove("dark");
	botao6.classList.toggle("dark");
	botao7.classList.remove("dark");
}

//-------------------------------------------------
//--DIA 07--
function dia07() {
	botao1.classList.remove("dark");
	botao2.classList.remove("dark");
	botao3.classList.remove("dark");
	botao4.classList.remove("dark");
	botao5.classList.remove("dark");
	botao6.classList.remove("dark");
	botao7.classList.toggle("dark");
}