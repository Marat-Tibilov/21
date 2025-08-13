import { getRandomBoolean, randomizeArrayTo15, randomizeArrayTo17, randomizeArrayTo19 } from "./random.js";
import { globalVariables } from "./globalVariables.js";
import { newModalMessage, startGameTable } from "./main.js";
import { UI } from "./ui-elements.js";
import { randomMessage } from "./message.js";




export const isEnough = () => {
    if (globalVariables.computerScore < 13) {
        return false
    } else if (globalVariables.computerScore >= 13 && globalVariables.computerScore <= 15) {
        return getRandomBoolean(randomizeArrayTo15)
    } else if (globalVariables.computerScore >= 16 && globalVariables.computerScore <= 17) {
        return getRandomBoolean(randomizeArrayTo17)
    } else if (globalVariables.computerScore >= 18 && globalVariables.computerScore <= 19) {
        return getRandomBoolean(randomizeArrayTo19)
    } else if (globalVariables.computerScore > 19) {
        return true
    }
}

export function winnerCheck() {
    if (globalVariables.computerScore > globalVariables.userScore) {
        UI.COMPUTER_BANK.textContent = `${globalVariables.computerBank += globalVariables.totalRate}$`;
        randomMessage();
        setTimeout(() => {
            newModalMessage(`${globalVariables.enemy} выиграл : ${globalVariables.message}`)
        },1500)
        return setTimeout(startGameTable, 2500);
    }
    if (globalVariables.userScore > globalVariables.computerScore) {
        UI.USER_BANK.textContent = `${globalVariables.userBank += globalVariables.totalRate}$`;
        setTimeout(() => newModalMessage('Красава разъебал'),1500)
        return setTimeout(startGameTable, 2500);
    }
    else {
        UI.COMPUTER_BANK.textContent = `${globalVariables.computerBank += globalVariables.totalRate / 2}$`;
        UI.USER_BANK.textContent = `${globalVariables.userBank += globalVariables.totalRate / 2}$`;
        setTimeout(() => newModalMessage('Ничья! Ставки возвращены'), 1500);
        return setTimeout(startGameTable, 2500);
    }
}


export const animateCard = (cardDiv) => {
    cardDiv.classList.add('fromDeckToTable')
    setTimeout(() => {
        cardDiv.classList.remove('fromDeckToTable')
    }, 1500)
}

export const animateCompCard = (cardDiv) => {
    cardDiv.classList.add('fromDeckToTableComp')
    setTimeout(() => {
        cardDiv.classList.remove('fromDeckToTableComp')
    }, 1500)
}