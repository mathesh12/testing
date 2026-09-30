import { test } from "@playwright/test";

test("Page Screenshot", async ({ page }) => {

    await page.goto("https://playwright.dev");

    await page.screenshot({
        path: "screenshots/login-page.png"
    });

});

// import { test } from "@playwright/test";

// test("Element Screenshot", async ({ page }) => {

//     await page.goto("https://www.saucedemo.com/");

//     await page.locator("#login-button").screenshot({path: "screenshots/login-button.png"});

// });


// import { test } from "@playwright/test";

// test("Full Page Screenshot", async ({ page }) => {

//     await page.goto("https://playwright.dev/");

//     await page.screenshot({
//         path: "screenshots/full-page.png",
//         fullPage: true
//     });

// });