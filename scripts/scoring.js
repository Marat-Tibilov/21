import { UI } from "./ui-elements.js";
import { globalVariables } from "./globalVariables.js";
import { cardCreate, getRandomCard, getSuitSymbol, suitColor } from './random.js'
import { DECK } from "./deck.js";
import { accountCheck } from "./main.js";
import { animateCard, isEnough, winnerCheck } from "./helpers.js";


export function updateComputerScore(score) {
    globalVariables.computerScore += score;
}

export function updateUserScore(score) {
    globalVariables.userScore += score;
    UI.USER_COUNTER.textContent = globalVariables.userScore;
}



export function dealerTakeCard() {
    UI.MORE.setAttribute('disabled', '');
    UI.PASS.setAttribute('disabled', '');
    do {
        const computerCard = getRandomCard();
        const creatElement = cardCreate(computerCard, false)
        animateCard(creatElement)
        UI.COMPUTER_LAYOUT.appendChild(creatElement);
        updateComputerScore(computerCard.value);
        console.log(isEnough());
    } while (!isEnough());
    setTimeout(() => {
        UI.COMPUTER_COUNTER.textContent = globalVariables.computerScore;
    }, 2000)
    setTimeout(() => {
        showdown();
        if (!accountCheck()) {
            setTimeout(winnerCheck, 2500);
        }
    }, 2000)
}

function showdown() {
    const computerCards = UI.COMPUTER_LAYOUT.querySelectorAll('.card');
    computerCards.forEach(cardElement => {
        cardElement.classList.add('showCompCards')
        if (cardElement.querySelector('img')) {
            const cardIndex = +cardElement.cardIndex;
            const card = Object.values(DECK).find(c => c.index === cardIndex && c.inGame);
            if (card) {
                cardElement.innerHTML = `
                    <div class="card-value">${card.name}</div>
                    <div class="card-suit">${getSuitSymbol(card.suit)}</div>
                `;
                cardElement.style.backgroundColor = 'white';
                cardElement.style.color = suitColor(card.suit);
            }
        }
    });
}



UI.PASS.addEventListener('click', dealerTakeCard);