import { UI } from "./ui-elements.js";
import { cardCreate, getRandomCard } from "./random.js";
import { updateComputerScore, updateUserScore } from "./scoring.js";
import { accountCheck } from "./main.js";
import { animateCard, animateCompCard } from "./helpers.js";


export function takeMoreCard() {
    const userCard = getRandomCard();
    const userLayout = UI.USER_LAYOUT;
    const cardElement = cardCreate(userCard, true)
    userLayout.appendChild(cardElement);
    updateUserScore(userCard.value);
    setTimeout(() => {
        if (!accountCheck()) {
            UI.MORE.removeAttribute('disabled');
        }
    }, 0);
}

export function firstDistribution() {

    const userCard = getRandomCard();
    if (userCard) {
        const creatElement = cardCreate(userCard, true);
        animateCard(creatElement)
        UI.USER_LAYOUT.appendChild(creatElement);
        updateUserScore(userCard.value);
    }

    const computerCard = getRandomCard();
    if (computerCard) {
        const creatElement = cardCreate(computerCard, false);
        animateCompCard(creatElement)
        UI.COMPUTER_LAYOUT.appendChild(creatElement);
        updateComputerScore(computerCard.value);
    }
}

UI.MORE.addEventListener('click', takeMoreCard);