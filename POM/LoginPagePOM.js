//este es el codigo del POM

const { By } = require("selenium-webdriver");

class LoginPagePOM {
  driver;

  usernameField = By.id("user-name");
  passwordField = By.id("password");
  loginButton = By.id("login-button");

  constructor(driver) {
    this.driver = driver;
  }

  async login(username, password) {
    await this.driver.findElement(this.usernameField).sendKeys(username);
    await this.driver.findElement(this.passwordField).sendKeys(password);
    await this.driver.findElement(this.loginButton).click();
  }
}

module.exports = LoginPagePOM;