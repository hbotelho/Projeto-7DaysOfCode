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
}

//-------------------------------------------------
//--DIA 05--
function dia05() {
	botao1.classList.remove("dark");
	botao2.classList.remove("dark");
	botao3.classList.remove("dark");
	botao4.classList.remove("dark");
	botao5.classList.toggle("dark");
	botao6.classList.remove("dark");
	botao7.classList.remove("dark");
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