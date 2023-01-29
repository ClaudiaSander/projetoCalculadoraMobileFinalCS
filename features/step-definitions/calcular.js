const { Given, When, Then } = require("@wdio/cucumber-framework")

Given (/^que a calculadora esta aberta$/,async () => {
    // validar se apresentou o display de resultado
    const display = '//android.widget.ImageButton[@content-desc="4"]'
    await $(display).waitForDisplayed()
})


When (/^clico no botao "([^"]*)?"$/, async(botao) => {
    const button = `//android.widget.ImageButton[@content-desc="${botao}"]`
    await $(button).click()
})


Then (/^exibe o resultado "([^"]*)?"$/, async (numero) => {
    // validar o resultado esperado
    const display = "/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout/android.widget.FrameLayout[1]/android.widget.TextView"
    expect(await $(display).getText()).toEqual(numero)
})  