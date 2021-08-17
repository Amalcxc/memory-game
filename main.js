document.addEventListener('DOMContentLoaded', () => {

  const cardArray = [
  {
    name: 'brid',
    img: 'images/brid.jpg'
  },
  {
    name: 'brid',
    img: 'images/brid.jpg' 
  },
  {
    name: 'dog',
    img: 'images/dog.jpg'
  },
  {
    name: 'dog',
    img: 'images/dog.jpg'
  },
  {
    name: 'fox',
    img: 'images/fox.jpg'
  },
  {
    name: 'fox',
    img: 'images/fox.jpg'
  },
  {
    name: 'giraffe',
    img: 'images/giraffe.jpg'
  },
  {
    name: 'giraffe',
    img: 'images/giraffe.jpg'
  },
  {
    name: 'goat',
    img: 'images/goat.jpg'
  },
  {
    name: 'goat',
    img: 'images/goat.jpg'
  },
  {
    name: 'monkey',
    img: 'images/monkey.jpg'
  },
  {
    name: 'monkey',
    img: 'images/monkey.jpg'
  }
  ]

  cardArray.sort(() => 0.5 - Math.random())
// create the image card
 const grid = document.querySelector('.grid')
 const result = document.querySelector('#result')
 var cardsChosen = []
 var cardsChosenId = []
 var cardsWon = []

 function createBoard(){
   for (let i = 0; i < cardArray.length; i++){
     var card = document.createElement('img')
     card.setAttribute('src', 'images/blank.jpg')
     card.setAttribute('data-id', i)
     card.addEventListener('click', flipCard)
    grid.appendChild(card)
   }
 }





// check for matches
function checkForMatch(){
  var cards = document.querySelectorAll('img')
  const optionOneId = cardsChosenId[0]
  const optionTwoId = cardsChosenId[1]
  if (cardsChosen[0] === cardsChosen[1]){
    cards[optionOneId].setAttribute('src', 'images/pink.png')
    cards[optionTwoId].setAttribute('src', 'images/pink.png')
    cardsWon.push(cardsChosen)
  } else {
    cards[optionOneId].setAttribute('src', 'images/blank.jpg')
    cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
  }
  cardsChosen = []
  cardsChosenId = []
  result.textContent = cardsWon.length
  if (cardsWon.length === cardArray.length/2){
    result.textContent = 'you wooooon!!!!!'
    
  }
}

// flip you card
function flipCard(){
  var cardId = this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenId.push(cardId)
  this.setAttribute('src', cardArray[cardId].img)
  if (cardsChosen.length === 2){
    setTimeout(checkForMatch, 500)
  }
}


 createBoard()

})