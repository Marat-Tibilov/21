import { UI } from "./ui-elements.js";
import { globalVariables } from "./globalVariables.js";
import { newModalMessage } from "./main.js";

UI.USER_BANK.textContent = `${globalVariables.userBank}$`;
UI.COMPUTER_BANK.textContent = `${globalVariables.computerBank}$`;
UI.USER_BET.textContent = `${globalVariables.userBet}$`;
UI.COMPUTER_BET.textContent = `${globalVariables.computerBet}$`;
UI.TOTAL_RATE.textContent = `${globalVariables.totalRate}`;

export function raisingTheRate() {
    if (bankCheck()) {
        if (globalVariables.userBank >= globalVariables.computerBank) {
            return newModalMessage(`Максимальная ставка ${globalVariables.computerBet}`);
        } if (globalVariables.computerBank >= globalVariables.userBank) {
            return newModalMessage(`Максимальная ставка ${globalVariables.userBet}`);
        }
    }

    UI.COMPUTER_BET.textContent = `${globalVariables.computerBet += globalVariables.bet}$`;
    UI.USER_BET.textContent = `${globalVariables.userBet += globalVariables.bet}$`;
    globalVariables.totalRate = globalVariables.userBet + globalVariables.computerBet;
    UI.TOTAL_RATE.textContent = `${globalVariables.totalRate}$`;
    UI.COMPUTER_BANK.textContent = `${globalVariables.computerBank -= globalVariables.bet}$`;
    UI.USER_BANK.textContent = `${globalVariables.userBank -= globalVariables.bet}$`;
}

export function rateReduction() {
    if (betCheck()) {
        return newModalMessage('Ставка не может меньше 25');
    }


    UI.COMPUTER_BET.textContent = `${globalVariables.computerBet -= globalVariables.bet}$`;
    UI.USER_BET.textContent = `${globalVariables.userBet -= globalVariables.bet}$`;
    globalVariables.totalRate = globalVariables.userBet + globalVariables.computerBet;
    UI.TOTAL_RATE.textContent = `${globalVariables.totalRate}$`;
    UI.COMPUTER_BANK.textContent = `${globalVariables.computerBank += globalVariables.bet}$`;
    UI.USER_BANK.textContent = `${globalVariables.userBank += globalVariables.bet}$`;
}

export function betCheck() {
    return (globalVariables.userBet < 25 && globalVariables.computerBet < 25);
}

export function bankCheck() {
    return (globalVariables.userBank <= 0 || globalVariables.computerBank <= 0);
}

UI.PLUS_BUTTON.addEventListener('click', raisingTheRate);
UI.MINUS_BUTTON.addEventListener('click', rateReduction);