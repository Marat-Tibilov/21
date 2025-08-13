import { UI } from "./ui-elements.js";
import { globalVariables } from "./globalVariables.js";
import { checkDeck } from "./checkDeck.js";
import { checkLength, currentNameAndDeck } from "./currentLayoutOfTheThirdScreen.js";
import { newModalMessage } from "./main.js";
import {enemyCheck} from "./enemy.js";


export function hideFirstBlock() {
    UI.FIRST_BLOCK.classList.add("hidden");
    setTimeout(() => {
        UI.FIRST_BLOCK.remove();
    }, 700);
}

export function showSecondBlock() {
    setTimeout(() => {
        UI.SECOND_BLOCK.classList.remove('hidden');
        UI.FORM.classList.remove('hidden')
    }, 700)
}
export function hideSecondBlock() {
    UI.SECOND_BLOCK.classList.add('hidden');
    setTimeout(() => {
        UI.SECOND_BLOCK.remove();
    }, 700);
}
export function showThirdBlock() {
    UI.THIRD_BLOCK.classList.add('show');
    setTimeout(() => UI.THIRD_BLOCK.classList.remove('hidden'), 700)
}

export function begin() {
    hideFirstBlock();
    showSecondBlock();
}

export function startGame(event) {
    event.preventDefault();
    enemyCheck();
    console.log(globalVariables.enemy);
    globalVariables.userName = UI.INPUT_NAME.value;
    UI.INPUT_NAME.value = "";
    globalVariables.checkedDeck = checkDeck();
    const nameCheck = checkLength(globalVariables.userName);
    if (nameCheck) {
        hideSecondBlock();
        showThirdBlock();
        currentNameAndDeck(globalVariables.userName, globalVariables.checkedDeck);
    } else {
        newModalMessage('Некорректное имя')
    }
}


UI.START_BUTTON.addEventListener("click", begin);
UI.FORM.addEventListener('submit', startGame);