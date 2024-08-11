/**

 * Описание задачи: Напишите функцию, которая глубоко находит пересечения объектов и возвращает объект пересечений.
 * Ожидаемый результат: ({ a: 1, b: { c: 3 } }, { c: 1, b: { c: 3 } }) => { b: { c: 3 } }
 * @param {Object} firstObject - объект любых значений
 * @param {Object} secondObject - объект любых значений
 * @returns {Object}
 */

const intersectionDeep = (firstObject, secondObject) => {
    // throw new Error(`Напишите здесь свое решение ${firstObject}, ${secondObject}`);
};

const data = { a: 1, b: { c: 3 } };
const data2 = { c: 1, b: { c: 3 } };
// console.log(intersectionDeep(data, data2)); // { b: { c: 3 } }

// console.log(Object.values(data))
let newObj = {};
for (let dataElem in data) {
    for (let data2Elem in data2) {
        if (dataElem === data2Elem && data[dataElem] === data2[data2Elem])
            newObj[dataElem] = data[dataElem];
    }
}
console.log(newObj);
// return newObj;

// module.exports = intersectionDeep;
