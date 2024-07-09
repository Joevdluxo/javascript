function verificar(){
    var data = new Date()
    var ano  = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'um homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'criança-h.jpg')
            }else if(idade < 21){
                img.setAttribute('src', 'jovem-h.jpg' )
            }else if(idade < 50){
                img.setAttribute('src', 'adulto-h.jpg')
            }else{
                img.setAttribute('src', 'idoso.jpg')
            }

        }else if(fsex[1].checked){
            genero = 'uma mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'criança-m.jpg')
            }else if(idade < 21){
                img.setAttribute('src', 'jovem-m.jpg')
            }else if(idade < 50){
                img.setAttribute('src', 'adulto-m.jpg')
            }else{
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}