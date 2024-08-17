// РЕШЕНО //
// тест не идет!

/**
 * Напишите функцию flatten(array) которая делает вложенный массив плоским
 *
 * Пример:
 *
 * flatten([1, [2, 3]]) === [1, 2, 3]
 * flatten([1, [2, [3, 4]]]) === [1, 2, 3, 4]
 *
 * @param {Array.<number|[]>} array
 * @returns {number[]}
 */
let arr = [1, 1, [1, 2]];
let newArr = [];
function flatten(array) {
    if (array.length === 0) return newArr;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== "object") {
            newArr.push(array[i]);
        } else flatten(array[i]);
    }
    return newArr;
}
console.log(flatten(arr));
module.exports = flatten;
