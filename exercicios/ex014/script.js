function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'masculino'

            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'imagens/menino.png')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'imagens/garoto.png')
            }else if(idade < 60){
                //Adulto
                img.setAttribute('src', 'imagens/homem.png')
            }else{
                //Idoso
                img.setAttribute('src', 'imagens/senhor.png')
            }
        } else{
            genero = 'feminino'

            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'imagens/menina.png')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'imagens/garota.png')
            }else if(idade < 60){
                //Adulto
                img.setAttribute('src', 'imagens/mulher.png')
            }else{
                //Idoso
                img.setAttribute('src', 'imagens/senhora.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos gênero ${genero} com idade ${idade} anos!`
        res.appendChild(img)
    }
}