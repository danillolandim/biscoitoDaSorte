const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')

const luckyText = new Array()
luckyText[0] =
  'Se a sua vida for a melhor coisa que já te aconteceu, acredite, você tem mais sorte do que pode imaginar.'
luckyText[1] =
  'Eu acredito demais na sorte. E tenho constatado que, quanto mais duro eu trabalho, mais sorte eu tenho.'
luckyText[2] =
  'A sorte não existe. Aquilo a que chamas sorte é o cuidado com os pormenores.'
luckyText[3] =
  'Homens fracos acreditam na sorte. Homens fortes acreditam em causa e efeito.'

function handleTryClick(event) {
  let randomText = Math.floor(Math.random() * 3)
  event.preventDefault()
  document.getElementById('sorte').innerText = luckyText[randomText]

  toggleHideClass()
}

function toggleHideClass() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', toggleHideClass)
