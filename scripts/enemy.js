import { globalVariables } from "./globalVariables.js";
import { UI } from "./ui-elements.js";

const enemyBackground = {
    Artem: "url('../images/Artem.png') no-repeat center / cover",
    Denis: "url('../images/Denis.png') no-repeat center / cover",
    Pavel: "url('../images/Pavel.png') no-repeat center / cover"
}


export function enemyCheck() {
    UI.ENEMY_CHECK.forEach(check => {
        if (check.checked) {
            globalVariables.enemy = check.value;
            globalVariables.enemyImg = enemyBackground[check.value];
        }
    })
}

