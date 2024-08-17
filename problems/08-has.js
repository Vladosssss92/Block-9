/**
 * Напишите функцию has(path, object) возвращающую true, если в объекте есть свойство
 * описанное массивом path, иначе false
 *
 * Пример:
 *
 * has(['a'], { a: 1 }) === true
 * has(['b'], { a: 1 }) === false
 * has(['o', 'a'], { o: { a: 2 } }) === true
 *
 * @param {string[]} path
 * @param {object} object
 * @returns {boolean}
 */
const testObject = {
    a: 1,
    o: {
        a: 2,
    },
    n: null,
    "a.b.c": undefined,
};

function has(path, object) {
    return false;
}
console.log(has(["o", "b"], testObject));

module.exports = has;
