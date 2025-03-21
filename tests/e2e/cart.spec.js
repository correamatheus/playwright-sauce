const { test, expect } = require('../support')

test('deve poder adicionar produto ao carrinho - [TC-07]', async ({ page }) => {
    await page.login.do('standard_user', 'secret_sauce')
    await page.cart.addToCart()
})

test('deve exibir produto adicionado ao carrinho - [TC-08]', async ({ page }) => {
    await page.login.do('standard_user', 'secret_sauce')
    await page.cart.addToCart()
    await page.cart.goToCart()
    await page.cart.checkCartPage()
    await page.cart.checkProductInCart()
})

test('deve remover produto do carrinho em cart.html - [TC-09]', async ({ page }) => {
    await page.login.do('standard_user', 'secret_sauce')
    await page.cart.addToCart()
    await page.cart.goToCart()
    await page.cart.removeProduct()
})