const { test, expect } = require('@playwright/test');

 class LoginPage{
    //Init selectors using constructor
    constructor(page)
    {
        this.page=page
        this.usernameInput=page.locator('#user_login')
        this.passwordInput=page.locator('#user_password')
        this.submitButton=page.locator('text=Sign in')
        this.errorMessage=page.locator('.alert-error')
    }

    //define login page methods
    async visit(){
        await this.page.goto('http://zero.webappsecurity.com/')
    }

 }
 
 module.exports = { LoginPage };