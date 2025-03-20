const { expect } = require('@playwright/test')

export class ErrorMessage {

    constructor(page) {
        this.page = page
    }

    async haveText(message) {
        const element = this.page.locator('[data-test="error"]')

        await expect(element).toHaveText(message)
    }
}