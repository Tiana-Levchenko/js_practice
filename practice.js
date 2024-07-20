// Якщо змінна a дорівнює 10, виведіть 'Вірно', інакше виведіть 'Невірно'.
function checkNumber(number) {
    if (number === 10) {
        return `вірно`;
    } else {
        return `невірно`;
    }
}

console.log(checkNumber(10));

// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі.
function checkSeason(num) {
    switch (num) {
        case 1:
            return `зима`;
        case 2:
            return `весна`;
        case 3:
            return `літо`;
        case 4:
            return `осінь`;
        default: 
            return `значення невірне`
    }
}
console.log(checkSeason(3));

// Функція checkForSpam(message) приймає рядок (параметр message), перевіряє його на вміст заборонених слів spam і sale, і повертає результат перевірки. Слова в рядку параметра message можуть бути в довільному регістрі, наприклад SPAM або sAlE.

// Доповни код функції таким чином, що:
// Якщо знайдено заборонене слово (spam або sale), то функція повертає буль true
// Якщо в рядку відсутні заборонені слова, функція повертає буль false

// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.


function checkForSpam(message) {
    const normalizeMessage = message.toLowerCase()
    return  normalizeMessage.includes("spam") || normalizeMessage.includes("sale")

}
console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

