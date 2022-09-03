const cardArray = [
    {
        name: 'aries',
        img: 'images/aries.jpg',
    },
    {
        name: 'taurus',
        img: 'images/taurus.jpg',
    },
    {
        name: 'gemini',
        img: 'images/gemini.jpg',
    },
    {
        name: 'cancer',
        img: 'images/cancer.jpg',
    },
    {
        name: 'leo',
        img: 'images/leo.jpg',
    },
    {
        name: 'virgo',
        img: 'images/virgo.jpg',
    },
    {
        name: 'libra',
        img: 'images/libra.jpg',
    },
    {
        name: 'scorpio',
        img: 'images/scorpio.jpg',
    },
    {
        name: 'sagitarius',
        img: 'images/sagitarius.jpg',
    },
    {
        name: 'capricorn',
        img: 'images/capricorn.jpg',
    },
    {
        name: 'aquarius',
        img: 'images/aquarius.jpg',
    },
    {
        name: 'pisces',
        img: 'images/pisces.jpg',
    },
    {
        name: 'aries',
        img: 'images/aries.jpg',
    },
    {
        name: 'taurus',
        img: 'images/taurus.jpg',
    },
    {
        name: 'gemini',
        img: 'images/gemini.jpg',
    },
    {
        name: 'cancer',
        img: 'images/cancer.jpg',
    },
    {
        name: 'leo',
        img: 'images/leo.jpg',
    },
    {
        name: 'virgo',
        img: 'images/virgo.jpg',
    },
    {
        name: 'libra',
        img: 'images/libra.jpg',
    },
    {
        name: 'scorpio',
        img: 'images/scorpio.jpg',
    },
    {
        name: 'sagitarius',
        img: 'images/sagitarius.jpg',
    },
    {
        name: 'capricorn',
        img: 'images/capricorn.jpg',
    },
    {
        name: 'aquarius',
        img: 'images/aquarius.jpg',
    },
    {
        name: 'pisces',
        img: 'images/pisces.jpg',
    },
]

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');
const reslutDisplay = document.querySelector('#result');
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.jpg');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gridDisplay.appendChild(card);
    }
    console.log(cardArray);
}
createBoard();

function checkMatch() {
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];
    console.log(cards);
    console.log('check for match!');

    if (optionOneId === optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.jpg');
        cards[optionTwoId].setAttribute('src', 'images/blank.jpg');
    }

    if (cardsChosen[0] == cardsChosen[1]) {
        cards[optionOneId].setAttribute('src', 'images/white.jpg');
        cards[optionTwoId].setAttribute('src', 'images/white.jpg');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.jpg');
        cards[optionTwoId].setAttribute('src', 'images/blank.jpg');
    }
    reslutDisplay.textContent = cardsWon.length;
    cardsChosen = [];
    cardsChosenIds = [];

    if (cardsWon.length === cardArray.length / 2) {
        reslutDisplay.innerHTML = 'Congratulations you found them all!';
    }
}

function flipCard() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId);
    console.log(cardsChosen);
    console.log(cardsChosenIds);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500);
    }
}