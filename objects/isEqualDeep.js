// РЕШЕНО

/**

 * Описание задачи: Напишите функцию, которая делает глубокое сравнение объектов.
 * Ожидаемый результат: True если объекты идентичны ({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } }) => true
 * @param {Object} firstObj - Объект с любыми значениями
 * @param {Object} secondObj - Объект с любыми значениями
 * @returns {boolean}
 */

const isEqualDeep = (element1, element2) => {
    if (JSON.stringify(element1) === JSON.stringify(element2)) {
        return true;
    }
    return false;
};
const data = { a: 1, b: { c: 2 } };
const data2 = { a: 1, b: { c: 2 } };
const data3 = { a: 1, b: { c: 2 } };
console.log(isEqualDeep(data, data2)); // true
console.log(isEqualDeep(data, data3)); // false
