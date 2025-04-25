//Declaração das váriaveis de cores(vetor/array) e de identificação do botão
const colors = ['Red', 'Blue', 'Yellow', 'Purple', 'Green']
const btn = document.getElementById('btn')

//Função que realiza a operação de mudança de cor como a de aprestar o nome da cor
//  baseado no array acima ao esperar por um evento (click do botão no HTML)

btn.addEventListener('click', function(){
    const randomColor = getRandomColor()
    document.body.style.background = colors[randomColor]
    document.getElementById('color').innerHTML = colors[randomColor]
})

function getRandomColor () {
    return Math.floor(Math.random() * colors.length)
}