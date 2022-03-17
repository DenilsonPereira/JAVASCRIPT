function gerar(){
    let num = window.document.getElementById('txtnum')
    let res = window.document.getElementById('res')
    //se input igual a vazio, pede para digitar um número
    if(num.value.length == 0){
        window.alert('Digite um número por favor!')
    }else{
        //Realiza a multiplicação se input diferente de vazio
        let n = Number(num.value)
        let c = 1
        res.innerHTML = ''
        while(c<=10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `res${c}`
            res.appendChild(item)
            c++
        }
    }
}