/**
 * Лена планирует свой двухнедельный отпуск.
 *
 * Напишите функцию vacation(date) вычисляющую день следующий за отпуском Лены
 *
 * Примечание: вместо ручного подсчета используй класс Date и его методы
 *
 * Пример:
 *
 * vacation('01.01.2020') === '15.01.2020'
 * vacation('27.01.2020') === '10.02.2020'
 *
 * @param {string} date
 * @returns {string}
 */

function correctFirstNum(n) {
    return n < 10 ? "0" + n : n;
}

function vacation(date) {
    let arrDateSplit = date.split(".");
    let arrDateFix = [];
    arrDateFix.push(arrDateSplit[1], arrDateSplit[0], arrDateSplit[2]);
    arrDateFix = arrDateFix.join(".");
    let newDate = new Date(arrDateFix);
    let vacationDays = new Date(
        newDate.getFullYear(),
        newDate.getMonth(),
        newDate.getDate() + 14
    );
    let dateEndVacation = [];
    let year = vacationDays.getFullYear();
    let month = vacationDays.getMonth();
    let day = vacationDays.getDate();
    dateEndVacation.push(
        correctFirstNum(day),
        correctFirstNum(month + 1),
        year
    );
    dateEndVacation = dateEndVacation.join(".");
    return dateEndVacation;
}

module.exports = vacation;
