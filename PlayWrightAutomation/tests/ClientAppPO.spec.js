const{test,expect} = require('@playwright/test');
const {POManager}=require('../pageobjects/POManager');

test('Client App login',async({page})=>

{
  const poManager=new POManager(page);
  //js-file-login.js,Dashboardpage
const username = "anshika@gmail.com";
const password = "Iamking@000";
const productName =' ZARA COAT 3';
const products = page.locator(".card-body");

const loginPage=poManager.getLoginPage();
await loginPage.goTo();
await loginPage.validLogin(username,password); 

const dashboardPage = poManager.getDashboardPage();
await dashboardPage.searchProductAddCart(productName);
await dashboardPage.navigateToCart();



await page.waitForLoadState('networkidle');
const titles=await page.locator(".card-body b").allTextContents();
console.log(titles);

const count = await products.count();
console.log(count);


/*for (let i = 0; i < count; ++i) 
{
    
    if (await products.nth(i).locator("b").textContent() == productName)
     {
      //add to cart
      await products.nth(i).locator("text= Add To Cart").click();
      break;
    }
  }*/
    


//await page.locator('button:nth-child(4)').first().click();



const bool=await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
0

await page.locator("[placeholder*='Country']").type("ind",{delay:100});
const dropdown=page.locator(".ta-results");
await dropdown.waitFor();
const optionsCount = await dropdown.locator("button").count(); //3 elements
let text;
for(let i = 0;i < optionsCount;++i)
{
 text = await dropdown.locator("button").nth(i).textContent();
 if(text === " India")
 {
  //click
  await dropdown.locator("button").nth(i).click();
  break;
 

 }
}

await page.pause();
await expect(page.locator(".user__name label[type='text']")).toHaveText(username);

await page.locator(".action__submit").click();

await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");

//grab order id in one variable
const orderId = await page.locator("label[class='ng-star-inserted']").textContent();
console.log(orderId);

await page.locator("button[routerlink*='myorders']").click();
await page.locator("tbody").waitFor();
const rows = await page.locator("tbody tr");
for(let i = 0 ;i < await rows.count(); ++i)
{
  const rowOrderId=await rows.nth(i).locator("th").textContent();
  if(orderId.includes(rowOrderId))
  {
    //click on view
    await rows.nth(i).locator("button").first().click();
    break;
  }
}
//textContent has autowait
const orderIdDetails=await page.locator(".col-text").textContent();
expect(orderid.includes(orderIdDetails)).toBeTruthy();

});
