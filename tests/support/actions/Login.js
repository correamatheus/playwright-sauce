const { expect } = require('@playwright/test')
export class Login {
    constructor(page) {
        this.page = page
    }

    async do(username, password) {
        await this.visit()
        await this.submit(username, password)
    }

    async visit() {
        await this.page.goto('https://www.saucedemo.com/')

        const loginForm = this.page.locator('.login-box')
        await expect(loginForm).toBeVisible()
    }

    async submit(username, password) {
        await this.page.locator('[data-test="username"]').fill(username)
        await this.page.locator('[data-test="password"]').fill(password)
        await this.page.locator('[data-test="login-button"]').click()
    }

    async isLoggedIn() {
        const loggedTitle = this.page.locator('[data-test="title"]')       
        await expect(loggedTitle).toHaveText('Products')
    }

}