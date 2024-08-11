/**

 * Описание задачи: Напишите функцию, которая поверхностно находит пересечения объектов и возвращает объект пересечений.
 * Ожидаемый результат: ({ a: 1, b: 2 }, { c: 1, b: 2 }) => { b: 2 }
 * @param {Object<string | number>} firstObject - объект с примитивными значениями
 * @param {Object<string | number>} secondObject - объект с примитивными значениями
 * @returns {Object}
 */
// +++
const intersection = (firstObject, secondObject) => {
    let newObj = {};
    for (let dataElem in firstObject) {
        for (let data2Elem in secondObject) {
            if (
                dataElem === data2Elem &&
                firstObject[dataElem] === secondObject[data2Elem]
            )
                newObj[dataElem] = firstObject[dataElem];
        }
    }
    return newObj;
};

module.exports = intersection;
