//este es con POM

const { By, Builder, Browser } = require("selenium-webdriver");
const assert = require("assert");
const LoginPagePOM = require("../POM/LoginPagePOM");

describe("Login Page Test Case con POM", () => {
  let driver;
  let loginPagePOM;

  before(async () => {
    driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.get("https://www.saucedemo.com/v1/index.html");
    loginPagePOM = new LoginPagePOM(driver);
  });

  after(async function () {
    await new Promise((r) => setTimeout(r, 1000));
    await driver.quit();
  });

  it("Login with valid credentials", async () => {
    await loginPagePOM.login("standard_user", "secret_sauce");

    let products = await driver.findElement(By.className("product_label"));
    let text = await products.getText();
    assert.equal(text, "Products");
  });

  //Agrega mas casos de prueba, ejemplo:
  // it("etc", async () => {
  //   //...
  // });


});