//FUNCTION PARA CALCULAR E MOSTRAR NA TELA O RESULTADO
function calcular() {
    var calcvalor = window.document.getElementById('calcvalor')
    var valor = Number(calcvalor.value) // CONVERTE OS VALORES PARA NUMERICOS
    var dias = window.document.getElementById('dias')
    var diastb = Number(dias.value) // CONVERTE OS VALORES PARA NUMERICOS

    // ONDE O CALCULO É REALIZADO E MOSTRADO NA TELA
    var calcprimicia = valor / diastb
    var dizimo = valor * (10/100)
    var res = document.getElementById('res')
    
    // CONDIÇÃO PARA MOSTRAR O RESULTADO
    if(valor == 0){
        
        alert('[ERRO] CAMPO NÃO PREENCHIDO')

    } else {
        res.innerHTML = `<hr> <br><br>Valor inserido: R$ ${valor.toFixed(2)} <br><br> Primícias: R$ ${calcprimicia.toFixed(2)} <br><br> Dízimo: R$ ${dizimo.toFixed(2)} <br><br> <hr> `
    }

}