
/* function adicionar(){  
    let numbox = []
    let num = window.document.getElementById('num')
    let tab = window.document.getElementById('tab')
    let res = window.document.getElementById('res')
    let item = document.createElement('option')
    numbox.push(num.value)
    if (num.value == 0 || num.value > 100){
        window.alert('Insira um número entre 1 e 100')
    } else {
        item.text = 'Número '+ numbox[numbox.length-1] + ' adicionado'
        tab.appendChild(item) }
    numbox.sort()    
    res.innerText='O maior numero foi '+ numbox[numbox.length-1]
}


function maior(){
    
    numbox.sort() 
    
}
 */

var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers)