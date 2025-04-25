//Apresenta como prompt/notificação o local de entrada do valor
let productValue = Number(prompt('Enter de product value: '))

//Apresenta no HTML se o valor foi aprovado ou negado de acordo com o parametro
if (productValue >= 20){
    document.getElementById('result').innerHTML = 'Approved'
}
else{
    document.getElementById('result').innerHTML = 'Denied'
}
