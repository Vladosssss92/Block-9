// !!! НЕ РЕШЕНО !!!

/**

 * Описание задачи: Напишите функцию, которая глубоко находит пересечения объектов и возвращает объект пересечений.
 * Ожидаемый результат: ({ a: 1, b: { c: 3 } }, { c: 1, b: { c: 3 } }) => { b: { c: 3 } }
 * @param {Object} firstObject - объект любых значений
 * @param {Object} secondObject - объект любых значений
 * @returns {Object}
 */

let keyElement = [];
const intersectionDeep = (firstObject, secondObject) => {
    let newObj = {};
    let objDeep = {};
    for (let dataElem in firstObject) {
        if (secondObject[dataElem]) {
            objDeep[dataElem] = {};
        }
        for (let data2Elem in secondObject) {
            let dataElemKey1 = firstObject[dataElem];
            let dataElemKey2 = secondObject[data2Elem];

            // console.log(dataElem);
            // console.log(data2Elem);
            if (
                dataElem === data2Elem &&
                typeof dataElemKey1 === "object" &&
                typeof dataElemKey2 === "object"
            ) {
                keyElement = dataElem; // добавляем в переменную ключ элемента в который проваливаемся, сначала b
                objDeep[keyElement] = {}; // в объект {b: {}} добавляем ключ с пустым объектом
                console.log(2);
                console.log(objDeep);
                return intersectionDeep(dataElemKey1, dataElemKey2);
            }
            if (dataElem === data2Elem && dataElemKey1 === dataElemKey2) {
                // console.log(objDeep);
                newObj[dataElem] = firstObject[dataElem];
                console.log(newObj);
                // objDeep = { [keyElement]: newObj };
                objDeep[keyElement] = newObj; // по ключу b присваиваем новое свойство
                console.log(objDeep[keyElement]);
                console.log(keyElement);
                console.log(newObj);
            }
        }
    }
    if (keyElement === "") {
        return newObj;
    } else {
        return objDeep;
    }
};

const data = { a: 1, b: { d: { z: 1 } } };
const data2 = { c: 1, b: { d: { z: 1 } } };
console.log(intersectionDeep(data, data2)); // { b: { c: 3 } }

// module.exports = intersectionDeep;
