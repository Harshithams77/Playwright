
class GD2{
  constructor(page) {
    this.page = page;
  }

  async open() {
    await this.page.goto('https://godotengine.org');
  }

  async clickAssetsButton() {
    await this.page.click('text=Assets');
  }
}

class AssetLibraryPage {
  constructor(page) {
    this.page = page;
  }

  async isLoaded() {
    const pageTitle = await this.page.innerText('h1');
    return pageTitle === 'Asset Library';
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






module.exports = { GD2 };