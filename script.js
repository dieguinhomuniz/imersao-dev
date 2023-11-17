var valorEmDolar = 30;
var cotacaoEmDolar = 5.32;
//Camel Case é o formato de escrita padrão do JS
// O ponto no 5.32 é a virgula em JS

var valorEmReal = valorEmDolar * cotacaoEmDolar;
valorEmReal = valorEmReal.toFixed(2);

alert("R$" + valorEmReal);
// O sinal de + nesse caso faz uma concatenação entre a palavra e a string

//Mostra valor em Bitcoin

var bitcoinHoje = 171971.19;
var valorEmBitcoin = valorEmReal * bitcoinHoje;

alert("Valor em Bitcoin é " + valorEmBitcoin);

var anoLuz = 5;
var distanciaEmKm = 9.461e12;

var resultadoEmKm = anoLuz * distanciaEmKm;
alert(resultadoEmKm);

var fahr = 113;
var celsius = 30;
var kelvin = 330.5;

//conversor de Farenheit para Celsius
var convertFahParaCelsius = ((fahr - 32) * 5) / 9;

alert(convertFahParaCelsius);

//conversor de Farenheit para Kelvin
var convertFahParaKelvin = ((fahr - 32) * 5) / 9 + 273.15;

alert(convertFahParaKelvin);

//Conversor de Kelvin para Celsius
var convertKelvinParaCelsius = kelvin - 273.15;

alert(convertKelvinParaCelsius);

alert("Aula 1 concluida!");