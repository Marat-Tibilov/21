import { DECK, SUITS } from "./deck.js";
import { globalVariables } from "./globalVariables.js";
import { animateCard, animateCompCard } from "./helpers.js";

export const randomizeArrayTo15 = [false, false, false, false, true, false, true, false, false, false]

export const randomizeArrayTo17 = [false, true, false, true, true, false, true, false, true, false]

export const randomizeArrayTo19 = [true, true, true, false, true, true, false, true, true, true]




// Эта функция получает рандомное булевое значение из массива. Создано несколько массивов для разной степени вероятности.

export const getRandomBoolean = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length)
    return array[randomIndex]
}


export function getRandomCard() {
    const availableCards = Object.values(DECK).filter(card => !card.inGame);
    const cardIndex = Math.floor(Math.random() * availableCards.length);
    const card = availableCards[cardIndex];
    card.inGame = true;
    return card;
}

export function cardCreate(card, isUserCard = true) {
    const cardElement = document.createElement('div');
    cardElement.className = 'card';
    if (isUserCard) {
        animateCard(cardElement)
        cardElement.innerHTML = `
            <div class="card-value">${card.name}</div>
            <div class="card-suit">${getSuitSymbol(card.suit)}</div>
        `;
        cardElement.style.backgroundColor = 'white';
        cardElement.style.color = suitColor(card.suit);
    } else {
        animateCompCard(cardElement)
        const backImage = globalVariables.checkedDeck === 'strada'
            ? '../images/strada_suit.png'
            : '../images/classic_suit.png';
        cardElement.innerHTML = `<img src="${backImage}" alt="card back">`;

        cardElement.cardIndex = card.index;
    }

    return cardElement;
}

export function getSuitSymbol(suit) {
    switch (suit) {
        case SUITS.HEARTS: return '♥';
        case SUITS.DIAMONDS: return '♦';
        case SUITS.CLUBS: return '♣';
        case SUITS.SPADES: return '♠';
        default: return '';
    }
}

export function suitColor(suit) {
    return suit === SUITS.HEARTS || suit === SUITS.DIAMONDS ? 'red' : 'black';
}