function pegar() {
    var valor = document.getElementsByName('radCal')
    var n1 = document.getElementById('n1').value
    var n2 = document.getElementById('n2').value
    var area2 = document.querySelector('p#demo')
    
    
    var res
    if(valor[0].checked){
        //somar
        res = Number(n1) * Number(n2)
        area2.innerHTML = res
    } else if(valor[1].checked){
        //dividir
        res = Number(n1) / Number(n2)
        area2.innerHTML = res
    } else if(valor[2].checked){
        //somar
        res = Number(n1) + Number(n2)
        area2.innerHTML = res
    } else if(valor[3].checked){
        //subitrair
        res = Number(n1) - Number(n2)
        area2.innerHTML = res
    }
}