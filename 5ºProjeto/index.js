//Apresenta o valor que será pago
function formatMoney (value){
    value = Math.ceil(value*100) / 100
    value = value.toFixed(2)
    return 'R$' + value
}
//Apresenta a quantitade de pessoas no qual será divida o pagamento
function formatSplit (value){
    if (value == 1) return value + ' Pessoa'
    else return value + ' Pessoas'
}

//Função geral de apresentação dos valores a serem pagos de gorjeta, no total e por pessoa
function update (){
    let bill = Number(document.getElementById('yourBill').value)
    let tipPercent = document.getElementById('tipInput').value
    let split = document.getElementById('splitInput').value
    
    //Realiza as operações com os valores que serão pagos de gorjeta, no total e por pessoa
    let tipValue = bill * (tipPercent / 100)
    let billTotal = bill + tipValue
    let billEach = billTotal / split

    //Retorna dentro do HTML os valores calculados
    document.getElementById('tipPercent').innerHTML = tipPercent +'%'
    document.getElementById('tipValue').innerHTML = formatMoney(tipValue)
    document.getElementById('totalWithTip').innerHTML = formatMoney(billTotal)
    document.getElementById('splitValue').innerHTML = formatSplit(split) 
    document.getElementById('billEach').innerHTML = formatMoney(billEach)

}