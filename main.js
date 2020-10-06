/*var nome = "Gabriel";
var idade = 22;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade);

console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Japão","Brasil"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());*/

/*var lista = ["maçã", "pera", "laranja"];
lista.push("uva");
lista.pop();
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.join(" + "));

var fruta = {nome: "maçã", cor:"vermelha"};
console.log(fruta);
console.log(fruta.cor);*/

/*var idade = prompt("Qual sua idade?");
if(idade >= 18)
{
    alert("maior de idade");
}
else
{
    alert("menor de idade");
}*/

/*var count = 0;
while(count < 5)
{
    console.log(count);
    count++;
}*/

/*var count;
for(count = 0; count <= 5; count++)
{
    alert(count);
}*/

/*var d = new Date();
alert(d);*/

/*function soma(n1, n2)
{
    return n1 + n2;
}

function validaIdade(idade)
{
    var validar;
    if(idade >= 18)
    {
        validar = true;
    }
    else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade))

alert(soma(13, 123));*/

function botao()
{
    //alert("Obrigado por clicar");
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
}

function redirecionar()
{
    window.open("https://globallabs.academy");
}

function trocar(elemento)
{
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento)
{
    elemento.innerHTML = "Passe o mouse aqui";
}

function mudar(elemento)
{
    console.log(elemento.value);
}