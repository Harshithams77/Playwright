const { test,expect } = require('@playwright/test');
class GodotHomePage {
    constructor(page)
     {
      this.page = page;
    }
  
    async open() 
    {
      await this.page.goto('https://godotengine.org');
    }
  
    async clickAssetsButton()
     {
      await this.page.click('text=Assets');
    }
    
   
    async isLoaded() 
    {
    console.log(await page.title());
    await expect(page).toHaveTitle("Godot Asset Library");

      //const pageTitle = await this.page.innerText('h1');
      //return pageTitle === 'Asset Library';
    }
  
    async searchForAsset(query) {
      await this.page.fill('#query', query);
      await this.page.press('#query', 'Enter');
    }
  
    async isAssetInSearchResults(assetName) {
      const searchResults = await this.page.innerText('.search-results');
      return searchResults.includes(assetName);
    }
  }
  
  
  
  module.exports = {GodotHomePage};