// declaracao de variaveis
var data_hora_atual = new Date();
var dia = data_hora_atual.getDay();
var mes = data_hora_atual.getMonth() + 1;
var ano = data_hora_atual.getFullYear();

// uma pequena formatacao se o dia for menor que 10, colocar um zero para ficar melhor.
if (dia < 10){
    dia = "0" + dia;
}

// imprimir no elemento com Id="demo" a data.
document.getElementById("demo").innerHTML = dia + "/" + mes + "/" + ano;
