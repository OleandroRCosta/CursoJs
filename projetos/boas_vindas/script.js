function rodar  () {
    var data = new Date()
    //var hora = data.getHours()
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('foto')
    var hora = 19
    msg.innerHTML = 'Agora são <strong>' + hora + ' horas</strong>'
    
    if (hora >= 0 && hora < 12) {
        foto.src = 'imagens/manha_400.jpeg'
        window.document.body.style.backgroundColor='rgb(231, 199, 15)'
    } else if (hora >= 12 && hora < 18) {
        foto.src = 'imagens/tarde_400.jpg'
        window.document.body.style.backgroundColor='rgb(18, 83, 110)'
    } else {
        foto.src = 'imagens/noite_400.jpg'
        window.document.body.style.backgroundColor='rgb(34, 4, 90)'
    }
}


