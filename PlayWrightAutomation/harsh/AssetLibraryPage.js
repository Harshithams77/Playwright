const { test, expect } = require('@playwright/test');

class AssetLibraryPage {
  constructor(page) {
    this.page = page;
    this.box = page.getByPlaceholder('Search for...');
    this.submit = page.locator("button[type='submit']");
    this.dialogue = page.locator("input[name='filter']");
    this.verify = page.locator("a[href*='/asset-library/asset/']");
  }
  
   async searchForAsset() {
    await this.box.click();
    await this.box.type('dialogue');
    await this.submit.click();
    //verify if Dialogue Manager item shows up
    console.log(await this.page.locator("a[href*='/asset-library/asset/']").first().textContent());
    console.log(await this.page.locator("a[href*='/asset-library/asset/']").nth(1).textContent());
    await expect(await this.page.locator("a[href*='/asset-library/asset/']").nth(1)).toContainText('Dialogue Manager');
  }
}

module.exports = { AssetLibraryPage };