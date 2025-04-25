//Função principal do funcionamento da calculadora
function outcome() {
    //Busca no HTML os valores inseridos que serão calculados
    let num1 = Number(document.getElementById('num-one').value)
    let num2 = Number(document.getElementById('num-two').value)

    let total = 0

    //Operações gerais da calculadora que serão usados em caso de 
    //uma das caixas estarem selecionadas
    if (document.getElementById('box1').checked)
        total = num1+num2
    else if (document.getElementById('box2').checked)
        total = num1-num2
    else if (document.getElementById('box3').checked)
        total = num1*num2
    else
        total = num1/num2

        //Retorna o resultado final
        document.getElementById('resultArea').innerHTML = 'Resultado:' + String(total)
}