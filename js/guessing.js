let numeroSecreto = parseInt(Math.random()* 11)
 
function chutar() {
    let chute = parseInt (document.getElementById('valor').value)
    let elementoResultado = document.getElementById('resultado')

    if (chute === numeroSecreto){
        elementoResultado.innerHTML = 'ACERTOU'
    } else if (chute > 10 || chute < 0){
        elementoResultado.innerHTML = 'Digite um número entre 0 e 10'

    } else {
        elementoResultado.innerHTML = 'ERROU'
    }
} 