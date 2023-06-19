const {test,expect} = require('@playwright/test');

test("Lets shop",async({page})=>
{

    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("anshika@gmail.com");
    await page.locator("#userPassword").type("Iamking@000");
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');
    const titles=await page.locator(".card-body b").allTextContents();
    console.log(titles);
    

   
    




});
test('UI Controls ', async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.google.com");
   
    const verify=page.locator("div[class='FPdoLc lJ9FBc'] input[name='btnI']");
   
   
    const [newPage]= await Promise.all([

        context.waitForEvent('page'),
        verify.click(),
])

test.only('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('button', { name: 'I\'m Feeling Lucky' }).click();

});



    test('godotengine ', async ({browser})=>
    {
      const context = await browser.newContext();
      const page = await context.newPage();
       
        await page.goto("https://godotengine.org");
      
        const assetbutton=page.locator("a[href='https://godotengine.org/asset-library/asset']");
        

        const [newPage]= await Promise.all([

            context.waitForEvent('page'),
            assetbutton.click(),
    ])
    newPage.locator("input.form-control").type("dialogue");
    //newPage.locator("button.btn").click();


    });    
    test.only('test', async ({ page }) => {
        await page.goto('https://www.google.com/');
        await page.getByRole('button', { name: 'I\'m Feeling Lucky' }).click();
      
      });      

    class GoogleHomePage {
        constructor(page) {
          this.page = page;
        }
      
        async open() {
          await this.page.goto('https://www.google.com/');
        }
      
        async clickFeelingLuckyButton() {
          const feelingLuckyButton = await this.page.getByRole('button', { name: 'I\'m Feeling Lucky' });
          await feelingLuckyButton.click();
        }
      }

      const GoogleHomePage = require('./GoogleHomePage');

test('Google', async ({ page }) => {
  const googleHomePage = new GoogleHomePage(page);
  await googleHomePage.open();
  await googleHomePage.clickFeelingLuckyButton();
})




//godotengine
const { chromium } = require('playwright');

class GodotHomePage {
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

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const godotHomePage = new GodotHomePage(page);
  const assetLibraryPage = new AssetLibraryPage(page);

  // Open GodotEngine homepage
  await godotHomePage.open();

  // Click Assets button at the top
  await godotHomePage.clickAssetsButton();

  // Verify that it takes to the Asset Library page
  if (!(await assetLibraryPage.isLoaded())) {
    console.log('Did not navigate to Asset Library page!');
    await browser.close();
    return;
  }

  // Search for "dialogue" in the search bar
  const query = 'dialogue';
  await assetLibraryPage.searchForAsset(query);

  // Verify that "Dialogue Manager" item shows up in the search results
  const assetName = 'Dialogue Manager';
  if (!(await assetLibraryPage.isAssetInSearchResults(assetName))) {
    console.log(`Did not find "${assetName}" in search results for query "${query}"!`);
    await browser.close();
    return;
  }

  console.log('Test passed!');
  await browser.close();
});