function comprar(){
var fruta = document.getElementsByName('frutas')
var sfruta = ''
var res = document.querySelector('div#res')
var img = document.createElement('img')
img.setAttribute('id', 'foto')
if(fruta[0].checked){
    sfruta = 'maça'
}else if(fruta[1].checked){
    sfruta = 'banana'
}else if(fruta[2].checked){
    sfruta = 'laranja'
}else if(fruta[3].checked){
    sfruta = 'abacate'
}

switch(sfruta){
    case 'maça': 
        res.innerHTML = '<p>A maçã esta de R$ 5.99kg</p>'
        img.setAttribute ('src', 'maca.jpg')
    break

    case 'banana':
        res.innerHTML = '<p>A banana esta de R$ 3.00kg</p>'
        img.setAttribute ('src', 'banana.png')
    break

    case 'laranja':
        res.innerHTML = '<p>A laranja esta de R$ 4.00kg</p>'
        img.setAttribute ('src', 'laranja.png')
    break

    case 'abacate':
        res.innerHTML = '<p>O abacate esta de R$ 3.50kg</p>'
        img.setAttribute ('src', 'abacate.png')
}


res.appendChild(img)



}