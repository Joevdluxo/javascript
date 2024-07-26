
const n = 634534561

console.log(parimp(n))
console.log(div3(n))
console.log(div4(n))

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

function div4(n){
    if(n%4!==0){
        return `${n} Não é divisivel por 4`
    }else{
        return `${n} É divisivel por 4`
    }
}

function div5(n){
    if(n%4!==0){
        return `${n} Não é divisivel por 4`
    }else{
        return `${n} É divisivel por 4`
    }
}


