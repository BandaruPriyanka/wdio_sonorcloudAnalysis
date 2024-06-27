const { $, driver, browser } = require("@wdio/globals");
require("dotenv").config();
const { assert, expect } = require("chai");
const platform = require("../../../Utils/mobile");
const mobiledata=require("../../../data/lettyshop.json")
class HomePage {
  locators = {
    android: {
      searchBarElement:
        "(//android.widget.TextView[@resource-id='com.letyshops:id/toolbar_title'])[1]",
      notificationIcon:
        "//android.widget.TextView[@content-desc='Notifications']",
      notificationBackIcon: "//android.widget.ImageButton",
      noticationHeading:
        "(//android.widget.TextView[@resource-id='com.letyshops:id/toolbar_title'])[2]",
      searchElement1:
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.widget.FrameLayout",
      selectItem1:
        "(//android.widget.FrameLayout[@resource-id='com.letyshops:id/foreground_view'])[1]",
      enterSearch:
        "//android.widget.EditText[@resource-id='com.letyshops:id/edit_text_search']",
    },
  };

  get searchelement() {
    return $(this.locators[platform()].searchBarElement);
  }
  get clickenterelement() {
    return $(this.locators[platform()].enterSearch);
  }
  get enterelement1() {
    return $(this.locators[platform()].searchElement1);
  }
  get selectelement() {
    return $(this.locators[platform()].selectItem1);
  }
  
  get clickNotification() {
    return $(this.locators[platform()].notificationIcon);
  } 
  get clickNotificationBack() {
    return $(this.locators[platform()].notificationBackIcon);
  }
  get getNotificationHeading() {
    return $(this.locators[platform()].noticationHeading);
  }
  get clickNotificationBack() {
    return $(this.locators[platform()].notificationBackIcon);
  }
  get clickNotificationBack() {
    return $(this.locators[platform()].notificationBackIcon);
  }
  async itemSearch() {
    await browser.setTimeout({ implicit: 10000 });
    await this.searchelement.click();
    await this.clickenterelement.setValue(mobiledata.searchItem);
    await this.enterelement1.click();
    // await this.clickNotification.click();
    // await this.clickNotificationBack.click();
    await this.selectelement.click();

  }
}
module.exports = new HomePage();
