const { test, expect } = require('@playwright/test');
const { POManager } = require('../harsh/POManager.js');

test('GodotEngine Web Application', async ({ page }) => {

  const poManager = new POManager(page);
  const godothomepage = poManager.getHomePage();
  await godothomepage.open();
  await godothomepage.clickAssetsButton();
  const assetLibraryPage = poManager.getLibraryPage();
  await assetLibraryPage.searchForAsset();
});
