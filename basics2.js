//declaração de variaveis

var a, b, c;

var nome, sobrenome;
//atribuição de variaveis
a= 2;
b =3;
c = a + b;

var valor1, valor2, total;

valor1="PREPARE-SE PARA CONHECER";
valor2="OS MELHORES PREÇOS DO BRASIL!";
total=valor1 +" "+ valor2
//alert(total);

function realParaDolar(real, cotacaoDolar) { 
    return real * cotacaoDolar;
}

var valorReal = 7.89;

var cotacao = 5.08;

var total = realParaDolar(valorReal, cotacao);

//alert ("O valor em real é R$: "+ "valorReal + o valor em dólar U$ é: "+total);

function alertaHello() {
    alert("Olá pessoal");
}

//function paraCelsius (valorFahrenheit){
 //return (5/9) * (valorFahrenheit -32);
//}

var x = paraCelsius(77);
//alert("A temperatura é de " + x + " graus celsius");

//Objetos: 
const carro = {
    marca:"ford", 
    modelo:"ka", 
    ano:2015, 
    placa:"abc-1234",
    buzina: function() {alert('Bii')},
    completo: function(){
        return "A marca é "+this.marca+" e o modelo é:" +this.modelo;
    }
};
console.log(carro.completo());
//propriedade sao: marca, modelo, ano..
//pode-se usar let ou var também, mas o comum é const