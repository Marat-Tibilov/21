import { DECK } from "./deck.js";
import { hideFirstBlock } from "./handler.js";
import { firstDistribution } from "./renderCards.js";
import { UI } from "./ui-elements.js";
import { globalVariables } from "./globalVariables.js";
import { clearTableAfterRound } from "./clearTable.js";
import { betCheck, raisingTheRate } from "./bet.js";
import {enemyCheck} from "./enemy.js";
import {randomMessage} from "./message.js";


export const newModalMessage = (message) => {
    const modalWindow = document.createElement('div')
    modalWindow.classList.add('showModal')
    document.body.insertAdjacentElement('afterbegin', modalWindow)
    modalWindow.textContent = message
    setTimeout(() => {
        modalWindow.remove()
    }, 3000)
}

export function startGameTable() {
    if (globalVariables.resetGame) {
        clearTableAfterRound();

        UI.PLUS_BUTTON.disabled = false;
        UI.MINUS_BUTTON.disabled = false;
        UI.PLAY.disabled = false;

        UI.PLAY.textContent = 'Играть';
        UI.MORE.disabled = true;
        UI.PASS.disabled = true;
    } else {
        if (betCheck()) {
            return newModalMessage('Сделайте ставку!')
        }

        firstDistribution();

        UI.PLUS_BUTTON.disabled = true;
        UI.MINUS_BUTTON.disabled = true;
        UI.PLAY.disabled = true;


        UI.PASS.disabled = false;
        UI.MORE.disabled = false;
    }

    globalVariables.resetGame = !globalVariables.resetGame;
}



export function accountCheck() {
    if (globalVariables.userScore > 21) {
        UI.MORE.disabled = true;
        UI.PASS.disabled = true;
        randomMessage();
        UI.COMPUTER_BANK.textContent = `${globalVariables.computerBank += globalVariables.totalRate}$`;
        setTimeout(() => {
            newModalMessage(`Вы проиграли - перебор!${globalVariables.enemy} : ${globalVariables.message}`)
        }, 1000);
        return setTimeout(startGameTable, 3500);
    }

    if (globalVariables.computerScore > 21) {
        UI.MORE.disabled = true;
        UI.PASS.disabled = true;
        randomMessage();
        UI.USER_BANK.textContent = `${globalVariables.userBank += globalVariables.totalRate}$`;
        setTimeout(() => newModalMessage(`${globalVariables.enemy} проиграл - перебор!`), 1000);
        return setTimeout(startGameTable, 3500);
    }

    if (globalVariables.userScore === 21) {
        UI.MORE.disabled = true;
        UI.PASS.disabled = true;
        UI.USER_BANK.textContent = `${globalVariables.userBank += globalVariables.totalRate}$`;
        setTimeout(() => newModalMessage('Блэкджек! Вы выиграли!'), 1000);
        return setTimeout(startGameTable, 3500);
    }

    if (globalVariables.computerScore === 21) {
        UI.MORE.disabled = true;
        UI.PASS.disabled = true;
        randomMessage();
        UI.COMPUTER_BANK.textContent = `${globalVariables.computerBank += globalVariables.totalRate}$`;
        setTimeout(() => {
            newModalMessage(`${globalVariables.enemy} выиграл - ${globalVariables.message}`)
            }, 1000);
        return setTimeout(startGameTable, 3500);
    }

    return false;
}

UI.PLAY.addEventListener('click', startGameTable);