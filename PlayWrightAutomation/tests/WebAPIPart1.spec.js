const{test,expect,request}=require('@playwright/test');
const loginPayLoad={userEmail: "anshika@gmail.com",
    userPassword: "Iamking@000"};

 let token;
  test.beforeAll( async()=>
  {
  const apiContext = await request.newContext();
  const loginResponse= await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
  {
    data:loginPayLoad
  })//200,201
  expect(loginResponse.ok()).toBeTruthy();
  const loginResponseJson= await loginResponse.json();
  const token=loginResponseJson.token;
  console.log(token);
  });

 test.beforeAll( ()=>                                               
 {

 })






test('Client App login',async ({page})=>
{
page.addInitScript(value  =>   
    {
        window.localStorage.setItem('token',value);
    },token );



const email = "";
const productName =' ZARA COAT 3';

await page.goto("https://rahulshettyacademy.com/client");

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
    


await page.locator('button:nth-child(4)').first().click();

await page.locator("[routerlink*='cart']").click();
await page.locator("div li").first().waitFor();
const bool=await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
expect(bool).toBeTruthy();
await page.locator("text=Checkout").click();
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
await expect(page.locator(".user__name label[type='text']")).toHaveText(email);

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

})