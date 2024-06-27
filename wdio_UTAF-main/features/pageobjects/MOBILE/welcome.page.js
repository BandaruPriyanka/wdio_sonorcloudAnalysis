const { $, driver, browser } = require("@wdio/globals");
require("dotenv").config();
const { assert, expect } = require("chai");
const platform=require("../../../Utils/mobile");


class WelcomePage {
  locators = {
    android: {
        enterToAccountButton:"//android.widget.Button[@resource-id='com.letyshops:id/login_btn']",
        titleLetyshops:"//android.widget.ImageView[@resource-id='com.letyshops:id/logo']",
        logoLetyshops:"//android.widget.ImageView[@resource-id='com.letyshops:id/image']",
        welcomeText:"//android.widget.TextView[@resource-id='com.letyshops:id/title_text']",
        registerButton:"//android.widget.Button[@resource-id='com.letyshops:id/registration_btn']"
    },
  };
  
  get clickEnterToAccountButton() {
    return $(this.locators[platform()].enterToAccountButton);
  }
  get getTitle() {
    return $(this.locators[platform()].titleLetyshops);
  }
  get getLogo() {
    return $(this.locators[platform()].logoLetyshops);
  }
  get getWelcomeText() {
    return $(this.locators[platform()].welcomeText);
  }
  get RegisterBtn() {
    return $(this.locators[platform()].registerButton);
  }
  async clickonAccount(){
    await this.clickEnterToAccountButton.click();
    //const actualText=await this.getWelcomeText.getText();
  }
  async clickonregisterButton(){
    await this.RegisterBtn.click();
  }
    
   
}
module.exports = new WelcomePage();
