// РЕШЕНО //
// тест не идет!!!

/**
 * Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(),
 * который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(),
 * который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords,
 * который принимает строку и делает заглавной первую букву каждого слова этой строки.
 */

class MyString {
    reverse(reverse) {
        let arrReverse = [];
        for (let i = reverse.length - 1; i >= 0; i--) {
            arrReverse.push(reverse[i]);
        }
        return arrReverse.join("");
    }
    ucFirst(ucFirst) {
        let arrUpperCaseFirstLetter = ucFirst.split("");
        arrUpperCaseFirstLetter[0] = arrUpperCaseFirstLetter[0].toUpperCase();
        return arrUpperCaseFirstLetter.join("");
    }
    ucWords(ucWords) {
        let arrSplitWord = ucWords.split(" ");
        let arrJoinWord = [];
        arrSplitWord.forEach((element) => {
            let arrLetter = element.split("");
            arrLetter[0] = arrLetter[0].toUpperCase();
            arrJoinWord.push(arrLetter.join(""));
        });
        return arrJoinWord;
    }
}

const str = new MyString();

console.log(str.reverse("abcde")); //выведет 'edcba'
console.log(str.ucFirst("abcde")); //выведет 'Abcde'
console.log(str.ucWords("abcde abcde abfdgfdgfgfdghfcde")); //выведет 'Abcde Abcde Abcde'

module.exports = MyString;
