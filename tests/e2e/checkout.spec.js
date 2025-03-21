const { test, expect } = require('../support')

test('não continuar compra quando nenhum campo é preenchido - [TC-10]', async ({ page }) => {
    const message = 'Error: First Name is required'    

    await page.login.do('standard_user', 'secret_sauce')
    await page.cart.addToCart()
    await page.cart.goToCart()
    await page.checkout.goToCheckout()
    await page.checkout.submit('','','')
    await page.checkout.checkErrorIcons()
    await page.errorMessage.haveText(message)
})

test('não continuar compra quando apenas first name não é preenchido - [TC-11]', async ({ page }) => {
    const message = 'Error: First Name is required'    

    await page.login.do('standard_user', 'secret_sauce')   
    await page.cart.addToCart()
    await page.cart.goToCart()
    await page.checkout.goToCheckout()
    await page.checkout.submit('','Last Name Teste','12345')
    await page.errorMessage.haveText(message)
})

test('não continuar compra quando apenas last name não é preenchido - [TC-12]', async ({ page }) => {
    const message = 'Error: Last Name is required'    

    await page.login.do('standard_user', 'secret_sauce')   
    await page.cart.addToCart()
    await page.cart.goToCart()
    await page.checkout.goToCheckout()
    await page.checkout.submit('Nome Teste','','12345')
    await page.errorMessage.haveText(message)
})

test('não continuar compra quando apenas zip code não é preenchido - [TC-13]', async ({ page }) => {
    const message = 'Error: Postal Code is required'

    await page.login.do('standard_user', 'secret_sauce')   
    await page.cart.addToCart()
    await page.cart.goToCart()
    await page.checkout.goToCheckout()
    await page.checkout.submit('Nome Teste','Last Teste','')
    await page.errorMessage.haveText(message)
    
})

test('deve exibir informações de pagamento, transporte e taxas - [TC-14]', async ({ page }) => {

    await page.login.do('standard_user', 'secret_sauce')   
    await page.cart.addToCart()
    await page.cart.goToCart()
    await page.checkout.goToCheckout()
    await page.checkout.submit('Nome Teste','Last Name Teste','1234')
    await page.checkout.checkPaymentInformationHasValue()
    await page.checkout.checkShippingInformationHasValue()
    await page.checkout.checkHasPriceProduct()
    await page.checkout.checkTaxHasInfo()
})


test('deve finalizar compra com sucesso - [TC-15]', async ({ page }) => {

    await page.login.do('standard_user', 'secret_sauce')   
    await page.cart.addToCart()
    await page.cart.goToCart()
    await page.checkout.goToCheckout()
    await page.checkout.submit('Nome Teste','Last Name Teste','1234')
    await page.checkout.goToFinishStep()
    await page.checkout.textOrderFinish()
})