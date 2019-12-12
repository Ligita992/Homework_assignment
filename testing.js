require('chromedriver');
const { Builder, By } = require('selenium-webdriver');

const driver = new Builder().forBrowser('chrome').build();

const start = async () => {
    await driver.get('https://tesonet.com/');
    await driver. manage().window().maximize();
    await driver.findElement(By.id('menu-item-19')).click();
    const elements = await driver.findElements(By.xpath("//li[contains(@class, 'px-5')]"));
    console.log('result: ' + elements.length);
    await driver.quit();

};

start();


