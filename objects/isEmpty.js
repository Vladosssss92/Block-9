/**

 * Описание задачи: Напишите функцию, которая делает поверхностную проверку объекта на пустоту.
 * Ожидаемый результат: ({}) => true,
 ({ a: undefined }) => true,
 ({ a: 1 }) => false
 * Пустые значения: '', null, NaN, undefined
 * @param {Object} object - объект с примитивами
 * @returns {boolean}
 */

const isEmpty = (object) => {
    let checkingForEmptiness = false;
    for (let elem in object) {
        if (
            object[elem] == undefined ||
            object[elem] === "" ||
            Number.isNaN(object[elem])
        )
            checkingForEmptiness = true;
    }
    return console.log(checkingForEmptiness);
};

const data = { a: "2n", b: "" };
const data2 = { a: null };

isEmpty(data2);
