var n1 = window.document.getElementById('inicio')
var n2 = window.document.getElementById('fim')
var n3 = window.document.getElementById('passo')
var res = window.document.querySelector('#res')



function contar() {
    var inicio = Number(n1.value)
    var fim = Number(n2.value)
    var passo = Number(n3.value)
    var resultado = inicio


    if (passo == '' || passo == 0){
        var passo = 1
    } else {var passo = Number(n3.value)}

    if (inicio == '' || fim == ''){
        window.alert('Insira um valor')
        res.innerHTML='Verifique se os campos <strong>Inicio </strong> e <strong>Fim</strong> estão preenchidos e tente novamente'
    } else {if (inicio < fim) {
        while(resultado < fim){
        res.innerHTML += ' 👉 ' + resultado  +' '
        resultado = resultado + passo}

        } else {
            while(resultado > fim){
            res.innerHTML += ' 👉 ' + resultado  +' '
            resultado = resultado - passo}}
    }

    res.innerHTML += '🏁'

}