// РЕШЕНО //

/**
 * Напишите функцию rle(value) реализующую алгоритм сжатия строки.
 *
 * Пример:
 *
 * rle('AAABC') === '3ABC'
 * rle('AAAaaB') === '3A2aB'
 *
 * @param {string} value
 * @returns {string}
 */
function rle(value) {
    let count = 1;
    let compression = [];
    let compressionFilter = [];
    let arrSplit = value.split("");
    for (let i = 0; i < value.length; i++) {
        if (arrSplit[i] === arrSplit[i + 1]) {
            count++;
        } else {
            compression.push(count, arrSplit[i]);
            count = 1;
        }
    }
    compressionFilter = compression.filter((one) => one !== 1).join("");
    return compressionFilter;
}
module.exports = rle;
