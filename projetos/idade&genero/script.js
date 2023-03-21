var sexo = window.document.getElementsByName('sexo')
var res = window.document.getElementById('res')
var nascimento = window.document.getElementById('nascimento')
var data = new Date()
var ano = data.getFullYear()

function verificar() {
    
    var genero = ''
    var idade = ano - Number (nascimento.value)
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    
    if (sexo[0].checked) {
        genero = 'masculino'
    } else if (sexo[1].checked) {
        genero = 'feminino'} 

    if (nascimento.value.length < 4 || Number(nascimento.value) > ano){
        window.alert('Insira uma data válida')
    } else if (genero == '') {
        window.alert('Insira o gênero')

    } else { if(genero =='masculino')

            {if (idade < 12){
                img.setAttribute('src', 'imagens/criança_m.png')
                res.innerHTML='Perfil de acesso adaptado para criança do sexo '+genero+' de ' +idade+ ' anos.'
                res.appendChild(img)
            } else if (idade >= 12 && idade < 16){
                img.setAttribute('src', 'imagens/adolescente_m.png')
                res.innerHTML='Perfil de acesso adaptado para adolescente do sexo '+genero+' de ' +idade+ ' anos'
                res.appendChild(img)
            } else if (idade >= 16 && idade < 21) {
                img.setAttribute('src', 'imagens/jovem_m.png')
                res.innerHTML='Perfil de acesso adaptado para jovem do sexo '+genero+' de ' +idade+ ' anos'
                res.appendChild(img)
            } else if (idade >= 21 && idade < 60) {
                img.setAttribute('src', 'imagens/adulto_m.png')
                res.innerHTML='Perfil de acesso adaptado para adulto do sexo '+genero+' de ' +idade+ ' anos'
                res.appendChild(img)
            } else{img.setAttribute('src', 'imagens/idoso_m.png')
                res.innerHTML='Perfil de acesso adaptado para idoso do sexo '+genero+' de ' +idade+ ' anos'
                res.appendChild(img)}

        } else if(genero =="feminino"){

            if (idade < 12){
                img.setAttribute('src', 'imagens/criança_f.png')
            } else if (idade >= 12 && idade < 16){
                img.setAttribute('src', 'imagens/adolescente_f.png')
            } else if (idade >= 16 && idade < 21) {
                img.setAttribute('src', 'imagens/jovem_f.png')
            } else if (idade >= 21 && idade < 60) {
                img.setAttribute('src', 'imagens/adulto_f.png')
            } else{img.setAttribute('src', 'imagens/idoso_f.png')}}
    }

    res.innerHTML='Perfil de acesso adaptado para criança do sexo '+genero+' de ' +idade+ ' anos.'
    res.appendChild(img)

}   