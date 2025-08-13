import { UI } from "./ui-elements.js";
import {globalVariables} from "./globalVariables.js";


export function checkLength(userName) {
    return userName.length > 1 && userName.length < 15;
}

export function currentNameAndDeck(name, deck) {
    displayName(name);
    displayDeck(deck);
}

function displayName(user) {
    UI.PLAYER_NAME.textContent = user;
    UI.ENEMY_NAME.textContent = globalVariables.enemy;
    UI.ENEMY_IMG.style.background = globalVariables.enemyImg;
}

function displayDeck(typeDeck) {
    if (typeDeck === 'strada') {
        UI.DECK.src = './images/deckStrada.svg'
    }
}