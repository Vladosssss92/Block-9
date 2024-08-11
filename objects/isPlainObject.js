// РЕШЕНО

/**

 * Описание задачи: Напишите функцию, которая проверяет, является ли элемент именно простым объектом, а не массивом, null
 и т.п.
 * Ожидаемый результат: true если это объект, false в противном случае. ({ a: 1 }) => true, ([1, 2, 3]) => false
 * @param element - элемент для проверки
 * @returns {boolean}
 */
// +++

const isPlainObject = (element) => {
    if (Number.isNaN(element) || element == undefined || Array.isArray(element))
        return false;
    if (typeof element === "object") return true;
    return false;
};

const data = { a: 1, b: 2, fun() {}, d: { p: 2 } };
const data1 = function () {};
const data2 = [1, 2, 3];
const data3 = 1;
const data4 = "a";
const data5 = null;
const data6 = undefined;
const data7 = NaN;

console.log(isPlainObject(data));
console.log(isPlainObject(data1));
console.log(isPlainObject(data2));
console.log(isPlainObject(data3));
console.log(isPlainObject(data4));
console.log(isPlainObject(data5));
console.log(isPlainObject(data6));
console.log(isPlainObject(data7));
