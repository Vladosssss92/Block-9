/**

 * Описание задачи: Напишите функцию, которая глубоко находит пересечения объектов и возвращает объект пересечений.
 * Ожидаемый результат: ({ a: 1, b: { c: 3 } }, { c: 1, b: { c: 3 } }) => { b: { c: 3 } }
 * @param {Object} firstObject - объект любых значений
 * @param {Object} secondObject - объект любых значений
 * @returns {Object}
 */

// const intersectionDeep = (firstObject, secondObject) => {
//     let newObj = {};
//     for (let dataElem in firstObject) {
//         for (let data2Elem in secondObject) {
//             if (
//                 dataElem === data2Elem &&
//                 firstObject[dataElem] === secondObject[data2Elem] && typeof(firstObject[dataElem]) !== 'object'
//             ) {
//                 newObj[dataElem] = firstObject[dataElem];
//             } else if (typeof(firstObject[dataElem]) === 'object') {
//                 console.log(111)
//             }
//         }
//     }
//     return newObj;
//     // throw new Error(`Напишите здесь свое решение ${firstObject}, ${secondObject}`);
// };

// const data = { a: 1, b: { c: 3 } };
// const data2 = { c: 1, b: { c: 3} };
// console.log(intersectionDeep(data, data2)); // { b: { c: 3 } }

console.log(Object.values(data));
let newObj = {};
for (let dataElem in data) {
    for (let data2Elem in data2) {
        console.log(data2[data2Elem]);
        console.log(typeof data2[data2Elem] === "object");
        if (dataElem === data2Elem && data[dataElem] === data2[data2Elem])
            newObj[dataElem] = data[dataElem];
    }
}
console.log(newObj);
return newObj;

const data = { a: 1, b: { c: 3 } };
const data2 = { c: 1, b: { c: 3 } };
console.log(isEqualDeep(data, data2)); // { b: { c: 3 } }

// module.exports = intersectionDeep;
