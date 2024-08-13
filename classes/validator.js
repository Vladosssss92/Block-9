/**
 * Реализуйте класс Validator, который будет проверять строки.
 * К примеру, у него будет метод isEmail параметром принимает строку и проверяет, является ли она корректным емейлом или нет.
 * Если является - возвращает true, если не является - то false.
 * Кроме того, класс будет иметь следующие методы: метод isDomain для проверки домена,
 * метод isDate для проверки даты и метод isPhone для проверки телефона:
 */
class Validator {
    isEmail(value) {
        if (value == undefined) return false;
        let arrayEmail = value.split("");
        if (
            arrayEmail[0] === "@" ||
            arrayEmail[0] === "." ||
            arrayEmail[arrayEmail.length - 1] === "@" ||
            arrayEmail[arrayEmail.length - 1] === "." ||
            !arrayEmail.includes(".") ||
            !arrayEmail.includes("@") ||
            arrayEmail === ""
        ) {
            return false;
        } else return true;
    }
    isDomain(value) {
        if (value == undefined) return false;
        let arrayDomain = value.toLowerCase().split("");
        let arrLatinLetter = "abcdefghijklmnopqrstuvwxyz".split("");
        let valid = true;
        if (
            !arrayDomain.includes(".") ||
            arrayDomain === "" ||
            !arrLatinLetter.includes(arrayDomain[0]) ||
            !arrLatinLetter.includes(arrayDomain[arrayDomain.length - 1])
        ) {
            valid = false;
        }
        return valid;
    }
    isDate(value) {
        if (value == undefined) return false;
        let arrDate = value.split("");
        let arrNumber = "0123456789".split("");
        let arrSeparator = arrDate.filter((elem) => elem === ".").length;
        // console.log(arrNumber);
        // console.log(arrSeparator);
        if (arrDate[2] !== "." || arrDate[5] !== "." || arrSeparator !== 2) {
            return false;
        }
        return true;
    }
}

const validator = new Validator();

// console.log(validator.isEmail("p@hphtmlmail.ru"));
// console.log(validator.isDomain("vk.com"));
console.log(validator.isDate("12.05.2020"));
// console.log(validator.isPhone('+375 (29) 817-68-92')); //тут можете формат своей страны

module.exports = Validator;
