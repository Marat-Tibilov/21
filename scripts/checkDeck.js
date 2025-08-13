import { UI } from "./ui-elements.js";

export function checkDeck() {
    for (let element in UI.INPUTS_SUIT) {
        if (UI.INPUTS_SUIT[element].checked) {
            return UI.INPUTS_SUIT[element].value;
        }
    }
}

