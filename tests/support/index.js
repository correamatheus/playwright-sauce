const { test: base, expect } = require('@playwright/test')
const { Login } = require('./actions/Login')
const { ErrorMessage } = require('./actions/Components')
const { Inventory } = require('./actions/Inventory')
const { Cart } = require('./actions/Cart')
const { Checkout } = require('./actions/Checkout')
const { Filter } = require('./actions/Filter')

const test = base.extend({
    page: async ({ page }, use) => {
        const context = page

        context['login'] = new Login(page)
        context['errorMessage'] = new ErrorMessage(page)
        context['inventory'] = new Inventory(page)
        context['cart'] = new Cart(page)
        context['checkout'] = new Checkout(page)
        context['filter'] = new Filter(page)
        await use(context)
    }
})

export { test, expect }