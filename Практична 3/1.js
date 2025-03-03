document.getElementById('generateButton').addEventListener('click', function() {
    // Створення масиву рядків з іменами
    const names = ['Олександр', 'Марія', 'Іван', 'Олена', 'Дмитро']

    // Перетворення масиву в об'єкт
    const namesLength = names.reduce((acc, name) => {
        acc[name] = name.length; // Додаємо до об'єкта: ключ - ім'я, значення - довжина імені
        return acc;
    }, {});

    // Виведення отриманого об'єкта в консоль
    console.log(namesLength);

    // Виведення результату на сторінку
    document.getElementById('result').textContent = JSON.stringify(namesLength, null, 2);
});