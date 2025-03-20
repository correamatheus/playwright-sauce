const { expect } = require('@playwright/test')
export class Inventory {
    constructor(page) {
        this.page = page
    }

    async addToCart() {
        const removeCartButton = this.page.locator('[data-test="remove-sauce-labs-backpack"]')
        const shoppingCartBadge = this.page.locator('[data-test="shopping-cart-link"]')
        await this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        await expect(removeCartButton).toBeVisible();
        await expect(shoppingCartBadge).toHaveText('1');
    }

    async goToInfoProduct() {
        const inventoryNameElement = '[data-test="inventory-item-name"]'
        const product = 'Sauce Labs Backpack'
       
        await this.page.locator(inventoryNameElement, { hasText: product }).click();
        await expect(this.page.locator('.inventory_details_name')).toHaveText(product);
        await expect(this.page.locator('[data-test="back-to-products"]')).toHaveText('Back to products');
    }
    
}