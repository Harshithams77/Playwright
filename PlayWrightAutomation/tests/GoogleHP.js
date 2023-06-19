 class GoogleHP
  {
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
   module.exports = {GoogleHP};
 

   async SearchAssetButton()
      {
        const SearchAsset = await page.locator("input-group .form-control").type("dialogue");
        await page.locator("button[type='submit']");
        SearchAsset.click();
      }