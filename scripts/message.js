import { globalVariables } from "./globalVariables.js";

const pavelMessage = ['Норма, на новые гантели хватит', 'Тренируйся еще!', 'Слишком легко'];

const artemMessage = ['Учи js, карты не твое', 'Проигрываешь, потому что не задаешь вопросы в чате', 'Выигрывает и улетает в ЮАР'];

const denisMessage = ['Обожаю вино и выигрывать круглую сумму!', 'Пиздец! Слишком легко', 'На билеты до Португалии должно хватить '];


export function randomMessage() {
    if (globalVariables.enemy === 'Artem') {
        return globalVariables.message = artemMessage[Math.floor(Math.random() * artemMessage.length)];
    }
    if (globalVariables.enemy === 'Pavel') {
        return globalVariables.message = pavelMessage[Math.floor(Math.random() * pavelMessage.length)];
    }
    if (globalVariables.enemy === 'Denis') {
        return globalVariables.message = denisMessage[Math.floor(Math.random() * denisMessage.length)];
    }
}


