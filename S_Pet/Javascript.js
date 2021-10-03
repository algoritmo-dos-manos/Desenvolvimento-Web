javascript:
var nome = null
var email = null
var numero = 0
var texto = undefined
//var data = new Data()

//var texto_data = document.getElementById("data")
//texto_data.textContent = data.getDate()+ '/' + (data.getMonth()+1)+ '/' + data.getFullYear()
var area = document.getElementById("area")
// referencia aos elementos botões
var btnome = document.getElementById("btNome")
var btEmail = document.getElementById("btEmail")
var btCad = document.getElementById("btCad")

btnome.onclick = lerNome
btEmail.onclick = lerEmail
btCad.onclick = cadastrar

function lerNome(){
    nome = prompt("Digite seu nome")
}

function lerEmail(){
    email = prompt("Digite seu e-mail")
}

function cadastrar(){
    texto = "Usuario numero" + (++numero) + "\n";
    texto += "Nome:" + nome + "\n";
    texto += "Email" + email + "\n\n";
    area.value += texto; 
}

const elemento = document.querySelector("h2")
elemento.onclick=function(){
    document.body.style.backgroundColor = "red"
}

elemento.ondblclick = function (){
    // elemento.classList.remove("ativo")
    elemento.classList.toggle("ativo")
}

