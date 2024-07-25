
var n = 6


function parimp(n){
    if(n%2 == 0){
        return 'par'
    }else{
        return 'impar'
    }
}

function div3(n){
    if(n%3==0){
        return `${n} é divisivel por 3`
    }else{
        return `${n} não é divisivel por 3`
    }
} 

let par = parimp(n)
let divp3 = div3(n)
console.log(par)
console.log(divp3)