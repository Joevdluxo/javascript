function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${min} Minutos`

    if(hora >= 0 && hora < 12){
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#728ac0'
    }else if(hora >= 12 && hora <= 18){
        img.src = 'fototarde.jpg'
        document.body.style.background = '#889BAC'
    }else{
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#8366A2'
    }
}

