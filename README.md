# Auto StarCashMoney 🌟

This tool is specific to _most_ starbucks outlets in Singapore.

For wifi networks in Starbucks Singapore, an internet user is required to re-login every 30 mins to maintain their wifi connection. 

This can get very annoying 😖.

This is an automatic login program for logging into starbucks wifi in every 25 mins, so that you won't get a surprise disconnection.

This tool uses a google tool called `puppeteer`.

It is actually an API to automate a headless Chromium instance. And as part of `npm install`, it will download chromium, which is around ~200 MB.

## Requirements

* You need to install the latest LTS version for NodeJS

## Setup

☣️ Please make sure to login into a wifi network, because the setup involves a huge download (More than 200 MB)!
```sh
npm install
```

## Run

**Please Login into Starbucks first, you actually need to have starbucks internet first efore this script will work**

```sh
npm start
```

## Caveats

Sometimes, exiting the program with Ctrl + C will result in an `ELIFECYCLE 130` error.
I don't think this will be a major issue at the moment.

## Issues

Please file issues if there are any problems.
The more information, the better 😇
