function tabuada () {
    let num = window.document.getElementById('num')
    let tab = window.document.getElementById('tab')
    let cont = 1
    let res = ''
    let numt = Number(num.value)
    if (numt == ''){
        window.alert('Esolha um número')
    } else { 
        tab.innerHTML=''   
        while(cont <= 10) {
        let item = document.createElement('option')    
        res = cont * numt
        item.text = cont + ' x ' + numt + ' = '+ res
        tab.appendChild(item)    
        cont += 1 
    } } 

}
