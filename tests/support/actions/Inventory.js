const { expect } = require('@playwright/test')
export class Inventory {
    constructor(page) {
        this.page = page
    }

    async goToInfoProduct() {
        const inventoryNameElement = '[data-test="inventory-item-name"]'
        const product = 'Sauce Labs Backpack'
       
        await this.page.locator(inventoryNameElement, { hasText: product }).click();
        await expect(this.page.locator('.inventory_details_name')).toHaveText(product);
        await expect(this.page.locator('[data-test="back-to-products"]')).toHaveText('Back to products');
    }
    
}