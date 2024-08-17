// РЕШЕНО //

/**
 * Петя опубликовал картинку X секунд назад.
 *
 * Напишите функцию timeago(seconds) возвращаю текстовое представление периода прошедшего со времени публикации.
 * Для публикаций опубликованных более четырёх недель назад возвращайте строку 'undefined', ведь их никто не увидит.
 *
 * Пример:
 *
 * timeago(0) === 'just now'
 * timeago(10) === '10 seconds ago'
 * timeago(60) === '1 minute ago'
 * timeago(3600) === '1 hour ago'
 *
 * @param {number} seconds
 * @returns {string}
 */
function timeago(seconds) {
    switch (true) {
        case seconds < 10:
            return "just now";
        case seconds > 9 && seconds <= 59:
            return `${Math.floor(seconds / 10) * 10} seconds ago`;
        case seconds > 59 && seconds < 3600:
            if (Math.floor(seconds / 60) === 1) {
                return `${Math.floor(seconds / 60)} minute ago`;
            }
            if (Math.floor(seconds / 60) > 1 && Math.floor(seconds / 60) < 30) {
                return `${Math.floor(seconds / 60)} minutes ago`;
            }
            if (
                Math.floor(seconds / 60) > 29 &&
                Math.floor(seconds / 60) < 60
            ) {
                return `30 minutes ago`;
            }
        case seconds > 3599 && seconds < 86400:
            if (Math.floor(seconds / 3600) === 1) {
                return `${Math.floor(seconds / 3600)} hour ago`;
            }
            if (
                Math.floor(seconds / 3600) > 1 &&
                Math.floor(seconds / 3600) < 13
            ) {
                return `${Math.floor(seconds / 3600)} hours ago`;
            }
            if (
                Math.floor(seconds / 3600) > 12 &&
                Math.floor(seconds / 3600) < 24
            ) {
                return `12 hours ago`;
            }
        case seconds > 86399 && seconds <= 172799:
            return `${Math.floor(seconds / 86400)} day ago`;
        case seconds > 172799 && seconds < 604800:
            return "a few days ago";
        case seconds > 604799 && seconds < 2419200:
            if (Math.floor(seconds / 604800) === 1) {
                return `${Math.floor(seconds / 604800)} week ago`;
            } else return `${Math.floor(seconds / 604800)} weeks ago`;
        case seconds >= 2419200:
            return "undefined";
    }
}

console.log(timeago(2419200));
module.exports = timeago;
