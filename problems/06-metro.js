/**
 * Витя из дома до работы добирается по кольцевой линии метро.
 *
 * Напишите функцию metro(x,y) вычисляющую минимальное количество промежуточных станций
 * (не считая станции посадки и высадки), которые необходимо проехать Вите,
 * если на кольцевой линии 13 станций.
 *
 * Пример:
 *
 * metro(1, 2) === 0
 * metro(1, 3) === 1
 * metro(13, 1) === 0
 * metro(1, 13) === 0
 *
 * @param {number} x – станция посадки
 * @param {number} y - станция высадки
 * @returns {number}
 */
function metro(x, y) {
    let maxStation = 13;
    let variantXY = x - y - 1;
    console.log(variantXY);
    let variantYX = y - x - 1;
    console.log(variantYX);
    let varianMaxX = maxStation - (x + y - 1);
    console.log(varianMaxX);
    let variantMaxY = maxStation - (y + x - 1);
    console.log(variantMaxY);
    if ((x === 1 && y === maxStation) || (y === 1 && x === maxStation)) {
        return 0;
    }
    if (x > y && variantXY <= varianMaxX) {
        return variantXY;
    } else if (x > y && variantXY >= varianMaxX) {
        return varianMaxX;
    }
    if (x < y && variantYX <= variantMaxY) {
        return variantYX;
    } else {
        return variantMaxY;
    }
}
console.log(metro(11, 7));
module.exports = metro;
