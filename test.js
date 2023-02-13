const puppeteer = require("puppeteer")
const start = async() => {
    const browser = await puppeteer.launch({headless:false})
    const page = await browser.newPage()
    await page.setViewport({ width: 1280, height: 800 })
    await page.goto('https://test.comparinggg.com/login')
    await new Promise((resolve) => setTimeout(() => resolve(), 3000))
    console.log(page)
    await page.waitForSelector('.input__password__and__login', {timeout: 5000}) //дожидается появления нужного селектора
    await page.click('.input__password__and__login') 
    await page.type('.input__password__and__login', 'gmemetovarishar@dpg.email')
    await page.waitForSelector('input[type="password"]')
    await page.click('input[type="password"]')
    await page.type('input[type="password"]', '89823302941')
    await page.click('.icon__remember')
    await page.keyboard.press('Enter');
    
    
}

async function sleep(time) {
    await new Promise((resolve) => setTimeout(() => resolve(), time))
}

start()