function gerar(){
    

    let num = window.document.getElementById('txtnum')
    let res = window.document.getElementById('res')
    let n = Number(num.value)
    if(n>0 && n<=9){
        //window.alert('Funcionando')
        let a = n * 1
        let b = n * 2
        let c = n * 3
        let d = n * 4
        let e = n * 5
        let f = n * 6
        let g = n * 7
        let h = n * 8
        let i = n * 9

            res.innerHTML = `${n} x 1 = ${a}<br>
                             ${n} x 2 = ${b} <br>
                             ${n} x 3 = ${c} <br>
                             ${n} x 4 = ${d} <br>
                             ${n} x 5 = ${e} <br>
                             ${n} x 6 = ${f} <br>
                             ${n} x 7 = ${g} <br>
                             ${n} x 8 = ${h} <br>
                             ${n} x 9 = ${i}`
    }else{
        window.alert('ERRO')
    }
}