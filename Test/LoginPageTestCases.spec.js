const { By, Builder, Browser } = require("selenium-webdriver");
const assert = require("assert");

describe("Login Page Test Case", function () {
  let driver;

  before(async () => {
    driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.get("https://www.saucedemo.com/v1/index.html");
  });

  after(async function () {
    await new Promise((r) => setTimeout(r, 1000));
    await driver.quit();
  });

  it("Login valid credentials", async () => {
    let username = await driver.findElement(By.id("user-name"));
    let password = await driver.findElement(By.id("password"));
    let loginButton = await driver.findElement(By.id("login-button"));

    await username.sendKeys("standard_user");
    await password.sendKeys("secret_sauce");
    await loginButton.click();

    let products = await driver.findElement(By.className("product_label"));
    let text = await products.getText();
    assert.equal(text, "Products");
  });

  //   //Agrega mas casos de prueba
  //   it("etc", async () => {
  //     //...
  //   });
});
