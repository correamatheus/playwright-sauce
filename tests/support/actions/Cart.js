const { expect } = require('@playwright/test')
export class Cart {
    constructor(page) {
        this.page = page
    }

    async goToCart() {
        await this.page.locator('[data-test="shopping-cart-link"]').click();
    }

    async checkCartPage() {
        await expect(this.page).toHaveURL(/cart\.html$/);
    }

    async checkProductInCart(){
        const product = 'Sauce Labs Backpack'
        const description = 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.'
        const price = '$29.99'
        await expect(this.page.locator('[data-test="inventory-item-name"]')).toHaveText(product);
        await expect(this.page.locator('[data-test="inventory-item-desc"]')).toHaveText(description);
        await expect(this.page.locator('[data-test="inventory-item-price"]')).toHaveText(price);
    }

    async removeProduct() {
        const cartIcon = this.page.locator('[data-test="shopping-cart-link"]');
        this.page.locator('[data-test="remove-sauce-labs-backpack"]').click()
        await expect(cartIcon).toBeVisible();
        await expect(cartIcon).toHaveText('');
    }

    async addToCart() {
        const removeCartButton = this.page.locator('[data-test="remove-sauce-labs-backpack"]')
        const shoppingCartBadge = this.page.locator('[data-test="shopping-cart-link"]')
        await this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        await expect(removeCartButton).toBeVisible();
        await expect(shoppingCartBadge).toHaveText('1');
    }

}