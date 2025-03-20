const { expect } = require('@playwright/test')
export class Checkout {
    constructor(page) {
        this.page = page
    }

    async goToCheckout() {
        await this.page.locator('[data-test="checkout"]').click()
    }

    async goToCheckoutStepTwo(){
        await this.page.locator('[data-test="continue"]').click()        
    }
    
    async goToFinishStep(){
        await this.page.locator('[data-test="finish"]').click()        
    }

    async submit(firstName, lastName, postalCode) {
        await this.page.fill('[data-test="firstName"]', firstName);
        await this.page.fill('[data-test="lastName"]', lastName);
        await this.page.fill('[data-test="postalCode"]', postalCode);
        await this.page.click('[data-test="continue"]');
    }

    async goToInfoProduct() {
        const inventoryNameElement = '[data-test="inventory-item-name"]'
        const product = 'Sauce Labs Backpack'
       
        this.page.locator(inventoryNameElement, { hasText: product }).click();
        await expect(this.page.locator('.inventory_details_name')).toHaveText(product);
        await expect(this.page.locator('[data-test="back-to-products"]')).toHaveText('Back to products');
    }

    async checkErrorIcons() {
        const errorIcons = this.page.locator('svg[data-icon="times-circle"]');
    
        await expect(errorIcons).toHaveCount(3);
        // Garante que cada um dos ícones está visível individualmente
        for (let i = 0; i < 3; i++) {
            await expect(errorIcons.nth(i)).toBeVisible();
        }
    }

    async checkPaymentInformationHasValue(){
        const paymentInfo = this.page.locator('[data-test="payment-info-value"]');
        await expect(paymentInfo).not.toBeEmpty();
    }

    async checkShippingInformationHasValue(){
        const shippingInfo = this.page.locator('[data-test="shipping-info-value"]');
        await expect(shippingInfo).not.toBeEmpty();
    }

    async checkHasPriceProduct(){
        const priceInfo = this.page.locator('[data-test="subtotal-label"]');
        await expect(priceInfo).not.toBeEmpty();
    }

    async checkTaxHasInfo(){
        const priceInfo = this.page.locator('[data-test="tax-label"]');
        await expect(priceInfo).not.toBeEmpty();
    }

    async textOrderFinish(){
        const element = '[data-test="complete-header"]'
        const message = 'Thank you for your order!'
        await expect(this.page.locator(element)).toHaveText(message)
    }
    
}