var textInput = document.querySelector("#input-texto");
var resultado = document.querySelector("#output");

function criptografar(){
    var texto = textInput.value;
  
    var resCripto = texto.replace(/a/g, "alpha").replace(/e/g, "ech").replace(/i/g, "india")
    .replace(/o/g, "oscar").replace(/u/g, "uniform");

    document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">' + resCripto +
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function descriptografar(){
    var texto1 = textInput.value;

    var resDesc = texto1.replace(/alpha/g, "a").replace(/ech/g, "e").replace(/india/g, "i")
    .replace(/oscar/g, "o").replace(/uniform/g, "u");

    document.getElementById('output').innerHTML = '<textarea readomly id="input-texto">' + resDesc +
'</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function copiar(){
    var txtCp = document.getElementById('input-texto');

    txtCp.select();
    document.execCommand('copy');
    alert("Texto Copiado");
} 