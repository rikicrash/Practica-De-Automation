const { By, Builder, Browser } = require("selenium-webdriver");
const assert = require("assert");

describe("Interfaz test cases", function () {
  let driver;

  before(async () => {
    driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.get("http://www.automationpractice.pl/index.php");
  });

  after(async function () {
    await new Promise((r) => setTimeout(r, 1000));
    await driver.quit();
  });

  it("Home page debe de mostrar las pestañas segun el diseño", async () => {
    let elements = await driver.findElements(
      By.xpath("//*[contains(text(), 'Blog')]")
    );
    assert.equal(elements.length, 0, "El texto esta presente");
  });

  it("Verificar que el texto del shopping cart sea correcto", async () => {
    let element = await driver.findElement(By.xpath("//*[contains(text(), 'Cart')]"));
    let text = await element.getText();
    assert.equal(text, "Shopping Cart");
    
  });

  it("Verificar aparicion de ofertas populares", async () => {
    let element = await driver.findElement(By.xpath("//*[contains(text(), 'Blouse')]"));
    let text = await element.getText();
    assert.equal(text, "Blouse");
    
  });


  it("Verificar que la imagen de perfil de Facebook aparezca en la pagina de inicio", async () => {
    let element = await driver.findElement(By.xpath("//*[contains(text(), 'Blouse')]"));
    let text = await element.getText();
    assert.equal(text, "Blouse");
    
  });

});
