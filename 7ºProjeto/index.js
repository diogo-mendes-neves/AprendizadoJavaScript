let computerNumber
let userNumbers = []
let attempts = 0
let maxguesses = 10

//A função gera um valor aleatório entre 0 e 100
function init (){
    computerNumber = Math.floor(Math.random() * 100 + 1)
}

function newGame (){
    window.location.reload()
}


function compareNumber () {
    //Recebe o valor que é inserido no HTML
    const userNumber = Number(document.getElementById('inputBox').value)
    //Insere o valor dentro do vetor de números que foi declarado inicialmente
    userNumbers.push(' ' + userNumber)
    //Apresenta o vetor valor por valor no HTML
    document.getElementById('guesses').innerHTML = userNumbers

    //Compara os valores do vetor com o valor que o computador gerou aleatoriamente
    if (attempts < maxguesses){
        if (userNumber > computerNumber){
            document.getElementById('textOutput').innerHTML = "Your number is too high"
            document.getElementById('inputBox').value = ''
            attempts ++
            document.getElementById('attempts').innerHTML = attempts
        }
        else if (userNumber < computerNumber){
            document.getElementById('textOutput').innerHTML = "Your number is too low"
            document.getElementById('inputBox').value = ''
            attempts ++
            document.getElementById('attempts').innerHTML = attempts
        }
        else {
            document.getElementById('textOutput').innerHTML = "Congratulations !!!"
            attempts ++
            document.getElementById('attempts').innerHTML = attempts
            document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
        }
    }
    else {
        document.getElementById('textOutput').innerHTML = "You Lose !!! The number was" + computerNumber
        document.getElementById('inputBox').setAttribute('Readonly')

    }
}   

