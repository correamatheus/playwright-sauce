const { test, expect } = require('../support')

test('deve exibir informação ao clicar no produto - [TC-16]', async ({ page }) => {
    await page.login.do('standard_user', 'secret_sauce')
    await page.inventory.goToInfoProduct()
})