// document.addEventListener('DOMContentLoaded', () => {

//     // card options
//     const cardArray = [
//         { name: 'fries', img: 'hotdog.jpg'},
//         { name: 'fries', img: 'hotdog.jpg' },
//         { name: 'burger', img: 'hotdog.jpg' },
//         { name: 'burger', img: 'hotdog.jpg' },
//         { name: 'hotdog', img: 'hotdog.jpg'},
//         { name: 'hotdog', img: 'hotdog.jpg'},
//         { name: 'pizza', img: 'hotdog.jpg' },
//         { name: 'pizza', img: 'hotdog.jpg' },
//         { name: 'milkshake', img: 'hotdog.jpg'},
//         { name: 'milkshake', img: 'hotdog.jpg' },
//         { name: 'icecream', img: 'hotdog.jpg' },
//         { name: 'icecream', img: 'hotdog.jpg'}]
        
//     cardArray.sort(() => 0.5 - Math.random());

//     var cardsChosen = []
//     var cardsChosenId = []
//     var cardsWon = []
    
//     const grid = document.querySelector('.grid');
//     const resultDisplay = document.querySelector('#result');
//     // create board
//     function createBoard(){
//         for(let i =0; i < cardArray.length; i++){
//             // create a div element instead of img
//             var card = document.createElement('img');
//             // set the blank image source
//              card.setAttribute('src', 'blank.png')
//             // var card = document.createElement('div');
//             // card.style.width = '100px';
//             // card.style.height = '100px';
//             // card.style.backgroundColor = '#111111ff';
//             // card.style.border = '2px solid black';
//             // this attribute will be used to store the index of the card
//             card.setAttribute('data-id', i)
//             // this handles the function when we click on the card
//             card.addEventListener('click', flipcard)
//             // this adds the card to the grid
//             grid.appendChild(card);
//         }
//     }


//     // check for matches
//     function checkForMatch(){
//         var cards = document.querySelectorAll('div')
//         const optionOneId = cardsChosenId[0];
//         const optionTwoId = cardsChosenId[1];
//         if(cardsChosen[1]=== cardsChosen[0] && optionOneId !== optionTwoId) {
//             alert('You found a match!');
//             cards[optionOneId].setAttribute('src', 'green.png')
//             cards[optionTwoId].setAttribute('src', 'green.png')
//             cards[optionOneId].removeEventListener('click', flipCard)
//             cards[optionTwoId].removeEventListener('click', flipCard)
//             cardsWon.push(cardsChosen);
//         }else{
//             alert('You did not find a match. Try again');
//             cards[optionOneId].setAttribute('src', 'blank.png')
//             cards[optionTwoId].setAttribute('src', 'blank.png')
//         }
//         cardsChosen = [];
//         cardsChosenId = [];
//         resultDisplay.textContent = cardsWon.length;
//         if(cardsWon.length === cardArray.length/2){
//             resultDisplay.textContent = 'Congratulations! You found them all!';
//         }
//     }
//     // flip your card
//     function flipcard(){
//         var cardId = this.getAttribute('data-id');
//         cardsChosen.push(cardArray[cardId].name)
//         cardsChosenId.push(cardId)

//         this.setAttribute('src', cardArray[cardId].img)


//         if (cardsChosen.length === 2) {
//             setTimeout(checkForMatch, 500);
//         }
//     }

    
//     createBoard();

// })

document.addEventListener('DOMContentLoaded', () => {
  //list all card options
  const cardArray = [
    {
      name: 'fries',
      img: 'hotdog.jpg'
    },
    {
      name: 'cheeseburger',
      img: 'hotdog.jpg'
    },
    {
      name: 'ice-cream',
      img: 'hotdog.jpg'
    },
    {
      name: 'pizza',
      img: 'hotdog.jpg'
    },
    {
      name: 'milkshake',
     img: 'hotdog.jpg'
    },
    {
      name: 'hotdog',
      img: 'hotdog.jpg'
    },
    {
      name: 'fries',
      img: 'hotdog.jpg'
    },
    {
      name: 'cheeseburger',
      img: 'hotdog.jpg'
    },
    {
      name: 'ice-cream',
      img: 'hotdog.jpg'
    },
    {
      name: 'pizza',
      img: 'hotdog.jpg'
    },
    {
      name: 'milkshake',
      img: 'hotdog.jpg'
    },
    {
      name: 'hotdog',
      img: 'hotdog.jpg'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  grid.style.width = '1200px'
  grid.style.height = '600px'
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'blank.png')
      cards[optionTwoId].setAttribute('src', 'blank.png')
      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src', 'green.png')
      cards[optionTwoId].setAttribute('src', 'green.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'blank.png')
      cards[optionTwoId].setAttribute('src', 'blank.png')
      alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})