/* Мой тест написан на JS c использованием NODE и бибилиотеки PUPPETEER
для работы автотеста должен быть установлен Node.js и библиотека puppeteer:
npm install puppeteer

За элементы я считал все дивы, которые находятся в футере

*/
const puppeteer = require('puppeteer');
async function testQA() {
    // Запускаем браузер
    const browser = await puppeteer.launch({headless: false, slowMo: 100});
    const page = await browser.newPage();

    // Переходим на страницу
    await page.goto('https://only.digital/contacts');

    // Проверяем наличие футера
    const footerExists = await page.$('footer.FooterDark_root__78jjk');

    if (footerExists) {
        console.log('Футер есть');

        // Получаем количество элементов в футере
        const countFooterElements = await page.$$('footer.FooterDark_root__78jjk div'); 
        const elementCount = countFooterElements.length;
        console.log("Количество элементов в футере: " + elementCount);
    }

    else {
        console.log('Футера нет');
    }

    // Закрываем браузер
    await browser.close();
}
testQA();