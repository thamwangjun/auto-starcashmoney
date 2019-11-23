const puppeteer = require('puppeteer')

async function main() {
  console.log('Starting login attempt...')
  var browser = await puppeteer.launch()
  var page = await browser.newPage()
  var indexPromise = await page.goto('http://login5.d-synergy.com/starbucks/v3/index1.php')
  
  var clickLoginResponse = await Promise.all([
    page.waitForNavigation(),
    await page.click('#checkbox'),
    await page.click('input.btn[value="Log In / Register your Device"]')
  ])

  var clickGetWifiResponse = await Promise.all([
    page.waitForNavigation(),
    await page.evaluate(() => console.log(`url is ${location.href}`)),
    await page.click('input.btn[value="Give me Wi-Fi"]')
  ])

  var redirectedToStarbucksResponse = await Promise.all([
    page.waitForNavigation()
  ])

  console.log('Login attempt has finished.')

}

var twentyFiveMinutesInMillis = 25 * 60 * 1000 

console.log('auto-starcashmoney will repeat login every 25 mins from now...')
console.log('Press Ctrl+C to stop!')

var firstLogin = main()

setInterval(main, twentyFiveMinutesInMillis)
