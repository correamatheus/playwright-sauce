const { test, expect } = require('../support')

test('deve poder adicionar produto ao carrinho', async ({ page }) => {
    await page.login.do('standard_user', 'secret_sauce')
    await page.inventory.addToCart()
})

test('deve exibir informação ao clicar no produto', async ({ page }) => {
    await page.login.do('standard_user', 'secret_sauce')
    await page.inventory.goToInfoProduct()
})