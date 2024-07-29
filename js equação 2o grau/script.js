function calcular(){
    let a = Number(document.getElementById('txta').value)
    let b = Number(document.getElementById('txtb').value)
    let c = Number(document.getElementById('txtc').value)

    let del = ((b)**2 - 4*(a)*(c))

    let res = document.getElementById('res')

    if(del > 0){

        let bhasmenos = -(b)-Math.sqrt(del)
        let bhasmais = -(b)+Math.sqrt(del)
        
        let raiz1 = bhasmais / (2*a)
        let raiz2 = bhasmenos /  (2*a)
        
        res.innerHTML = `As possíveis raizes de X são ${raiz1} e ${raiz2}`

    }else{
        
        res.innerHTML = 'Não há raizes possíveis!!'
    }


}