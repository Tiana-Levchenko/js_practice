// Якщо змінна a дорівнює 10, виведіть 'Вірно', інакше виведіть 'Невірно'.
function checkNumber(number) {
    if (number === 10) {
        return `вірно`;
    } else {
        return `невірно`;
    }
}

console.log(checkNumber(10));