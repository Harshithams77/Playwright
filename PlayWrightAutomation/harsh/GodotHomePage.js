const { test, expect } = require('@playwright/test');

class GodotHomePage {
  constructor(page) {
    this.page = page;
  }

  async open()
   {
    await this.page.goto('https://godotengine.org/');
  }

  async clickAssetsButton() {
    await this.page.click('text=Assets');
    this.pageTitle = "Godot Asset Library";
    await expect(this.page).toHaveTitle(this.pageTitle);
    console.log(`Page title: ${this.pageTitle}`);
  }
}

module.exports = { GodotHomePage };




