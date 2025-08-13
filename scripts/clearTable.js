import { UI } from "./ui-elements.js";
import { DECK } from "./deck.js";
import { globalVariables } from "./globalVariables.js";
import { newModalMessage } from "./main.js";


export function clearTableAfterRound() {
    UI.USER_BET.textContent = globalVariables.userBet = 0;
    UI.COMPUTER_BET.textContent = globalVariables.computerBet = 0;
    UI.TOTAL_RATE.textContent = globalVariables.totalRate = 0;
    UI.COMPUTER_LAYOUT.classList.add('killCard')
    UI.USER_LAYOUT.classList.add('killCard')
    setTimeout(() => {
        UI.COMPUTER_LAYOUT.innerHTML = '';
        UI.USER_LAYOUT.innerHTML = '';
        UI.COMPUTER_LAYOUT.classList.remove('killCard')
        UI.USER_LAYOUT.classList.remove('killCard')
    }, 950)


    UI.COMPUTER_COUNTER.textContent = globalVariables.userScore = 0;
    UI.USER_COUNTER.textContent = globalVariables.computerScore = 0;
    deckRestoration();
    restartGame();
}

function deckRestoration() {
    Object.values(DECK).forEach(card => card.inGame = false)
}

function restartGame() {
    if (globalVariables.userBank <= 0) {
        newModalMessage('Вы банкрот, перезапуск игры');
        return setTimeout(() => location.reload(), 2500);
    }
    if (globalVariables.computerBank <= 0) {
        newModalMessage('Вы победили ,перезапуск игры');
        return setTimeout(() => location.reload(), 2500);
    }
}