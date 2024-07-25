let num = [5,8,9,4,6,2,1]
num.sort()
for(let pos = 0; pos < num.length; pos++){
    console.log(`a posição ${pos} é equivalente ao elemento ${num[pos]}`)
}


let ele = 5
let pos = num.indexOf(ele)
if(pos == -1){
    console.log('elemento não encontrado')
}else{
    console.log(`o elemento ${ele} corresponde ao index ${pos}`)
}