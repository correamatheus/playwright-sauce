const { expect } = require('@playwright/test')

export class Filter {
    constructor(page) {
        this.page = page
        this.sortDropdown = page.locator('[data-test="product-sort-container"]')
        this.productNames = page.locator('.inventory_item_name')
        this.productPrices = page.locator('.inventory_item_price')
    }

    async sortBy(option) {
        await this.sortDropdown.selectOption(option)
    }

    async getProductNames() {
        return this.productNames.allTextContents()
    }

    async getProductPrices() {
        return this.productPrices.allTextContents()
    }

    async validateSortOrder(sortType) {
        if (sortType === 'az') {
            const productNames = await this.getProductNames()
            const sortedNames = [...productNames].sort()
            expect(productNames).toEqual(sortedNames)
        } else if (sortType === 'za') {
            const productNames = await this.getProductNames()
            const sortedNames = [...productNames].sort().reverse()
            expect(productNames).toEqual(sortedNames)
        } else if (sortType === 'lohi') {
            const productPrices = await this.getProductPrices()
            const sortedPrices = [...productPrices].sort((a, b) => parseFloat(a.replace('$', '')) - parseFloat(b.replace('$', '')))
            expect(productPrices).toEqual(sortedPrices)
        } else if (sortType === 'hilo') {
            const productPrices = await this.getProductPrices()
            const sortedPrices = [...productPrices].sort((a, b) => parseFloat(b.replace('$', '')) - parseFloat(a.replace('$', '')))
            expect(productPrices).toEqual(sortedPrices)
        }
    }
}