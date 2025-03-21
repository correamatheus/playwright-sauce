const { test, expect } = require('../support')

test ('deve logar como standart user - [TC-01]', async ({page})=> {
    await page.login.visit()
    await page.login.submit('standard_user', 'secret_sauce')
    await page.login.isLoggedIn()
})

test('não deve logar com senha incorreta - [TC-02]', async ({ page }) => {
    await page.login.visit()
    await page.login.submit('standard_user', '12345')

    const message = 'Epic sadface: Username and password do not match any user in this service'
    await page.errorMessage.haveText(message)
})

test('não deve logar quando o username é inválido - [TC-03]', async ({ page }) => {
    await page.login.visit()
    await page.login.submit('teste', 'secret_sauce')
    const message = 'Epic sadface: Username and password do not match any user in this service'
    await page.errorMessage.haveText(message)
})

test('não deve logar quando o username não é preenchido - [TC-04]', async ({ page }) => {
    await page.login.visit()
    await page.login.submit('', 'secret_sauce')
    const message = 'Epic sadface: Username is required'    
    await page.errorMessage.haveText(message)
})

test('não deve logar quando a senha não é preenchida - [TC-05]', async ({ page }) => {
    await page.login.visit()
    await page.login.submit('standard_user', '')
    const message = 'Epic sadface: Password is required'    
    await page.errorMessage.haveText(message)
})

test('não deve logar quando nenhum campo é preenchido - [TC-06]', async ({ page }) => {
    await page.login.visit()
    await page.login.submit('', '')
    const message = 'Epic sadface: Username is required'    
    await page.errorMessage.haveText(message)
})

test('não deve logar quando usuário está bloqueado - [TC-17]', async ({ page }) => {
    await page.login.visit()
    await page.login.submit('locked_out_user', 'secret_sauce')
    const message = 'Epic sadface: Sorry, this user has been locked out.'    
    await page.errorMessage.haveText(message)
})