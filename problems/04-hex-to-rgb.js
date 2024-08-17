// РЕШЕНО //

/**
 * Hex и RGB - текстовые форматы для представления цвета в коде.
 *
 * Напишите функцию hexToRgb(color) конвертирующую цвет закодированный в формате HEX
 * в RGB кодированную строку.
 *
 * Пример:
 *
 * hexToRgb('#000000') === 'rgb(0, 0, 0)'
 * hexToRgb('#fff') === 'rgb(255, 255, 255)'
 * hexToRgb('#800080') === 'rgb(128, 0, 128)'
 *
 * @param {string} color
 * @returns {string}
 */
function hexToRgb(color) {
    let arrRGB = [];
    let arrFix = [];
    let deleteFirstElem = color.split("");
    deleteFirstElem.shift();
    if (deleteFirstElem.length === 3) {
        deleteFirstElem.forEach((elem) => arrFix.push(elem + elem));
        arrFix.forEach((elem) => arrRGB.push(parseInt(elem, 16)));
    }
    if (deleteFirstElem.length === 6) {
        arrFix.push(
            deleteFirstElem[0] + deleteFirstElem[1],
            deleteFirstElem[2] + deleteFirstElem[3],
            deleteFirstElem[4] + deleteFirstElem[5]
        );
        arrFix.forEach((elem) => arrRGB.push(parseInt(elem, 16)));
    }
    return `rgb(${arrRGB[0]}, ${arrRGB[1]}, ${arrRGB[2]})`;
}

module.exports = hexToRgb;
