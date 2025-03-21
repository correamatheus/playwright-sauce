const { test, expect } = require('../support')

test('deve ordernar produtos pelo nome (A para Z) - [TC-18]', async ({ page }) => {
    await page.login.do('standard_user', 'secret_sauce')
    await page.filter.sortBy('az')
    await page.filter.validateSortOrder('az')
})

test('deve ordernar produtos pelo nome (Z para A) - [TC-19]', async ({ page }) => {
    await page.login.do('standard_user', 'secret_sauce')
    await page.filter.sortBy('za')
    await page.filter.validateSortOrder('za')
})

test('deve ordernar produtos pelo preço (low to high) - [TC-20]', async ({ page }) => {
    await page.login.do('standard_user', 'secret_sauce')
    await page.filter.sortBy('lohi')
    await page.filter.validateSortOrder('lohi')
})

test('deve ordernar produtos pelo preço (high to low) - [TC-21]', async ({ page }) => {
    await page.login.do('standard_user', 'secret_sauce')
    await page.filter.sortBy('hilo')
    await page.filter.validateSortOrder('hilo')
})