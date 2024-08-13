// РЕШЕНО //

/**
 * Строка со скобками считается валидной, если на каждую закрывающую скобку имеется ранее открытая
 * и на каждую ранее открытую имеется закрывающая.
 *
 * Напишите функцию parentheses(value) проверяющую строку со скобками на валидность.
 *
 * Пример:
 *
 * parentheses('') === false
 * parentheses('()()') === true
 * parentheses('(()())') === true
 * parentheses('(()') === false
 * parentheses(')') === false
 *
 * @param {string} value
 * @returns {boolean}
 */
function parentheses(value) {
    if (value === "" || value == undefined || Number.isNaN(value)) return false;
    let bracket = value.split("").filter((open) => open === "(" || ")");
    let arrClose = value.split("").filter((close) => close === ")");
    let arrOpen = value.split("").filter((open) => open === "(");
    if (
        bracket[0] === ")" ||
        bracket[bracket.length - 1] === "(" ||
        bracket.length % 2 !== 0 ||
        arrOpen.length !== arrClose.length
    ) {
        return false;
    }
    return true;
}

module.exports = parentheses;
