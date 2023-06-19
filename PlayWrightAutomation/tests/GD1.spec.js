const { test, expect } = require('@playwright/test');
const {GD2} = require('./GD2');

test('Engine', async ({ page }) => {

    //const context = await browser.newContext();
   // const page = await context.newPage();
    //const browser = await chromium.launch();
   // const page = await browser.newPage();
  
    const gd2 = new GD2(page);
    const assetLibraryPage = new AssetLibraryPage(page);
  
    // Open GodotEngine homepage
    await gd2.open();
  
    // Click Assets button at the top
    await gd2.clickAssetsButton();
  
    // Verify that it takes to the Asset Library page
    if (!(await assetLibraryPage.isLoaded())) {
      console.error('Did not navigate to Asset Library page!');
      await browser.close();
      return;
    }
  
    // Search for "dialogue" in the search bar
    const query = 'dialogue';
    await assetLibraryPage.searchForAsset(query);
  
    // Verify that "Dialogue Manager" item shows up in the search results
    const assetName = 'Dialogue Manager';
    if (!(await assetLibraryPage.isAssetInSearchResults(assetName))) {
      console.error(`Did not find "${assetName}" in search results for query "${query}"!`);
      await browser.close();
      return;
    }
  
    console.log('Test passed!');
    await browser.close();
  });
  
  

