const { test, expect } = require('@playwright/test');
const {GoogleHP} = require('./GoogleHP');



test('Google', async ({ page }) => {
  const googleHomePage= new GoogleHP(page);
  await googleHomePage.open();
  await googleHomePage.clickFeelingLuckyButton();
});