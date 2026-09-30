// import { test, expect } from '@playwright/test';

// //test.describe.configure({ mode: 'parallel' });

// test('Login Test', async ({ page }) => {

//   await page.goto('https://www.saucedemo.com/');
// //  await  page.waitForTimeout(2000);
//   await page.getByPlaceholder('Username').fill('standard_user');
//   await page.getByPlaceholder('Password').fill('secret_sauce');
//   await page.getByRole('button', { name: 'Login' }).click();

//   await expect(page).toHaveURL(/inventory.html/);

// });

// test('Add Product Test', async ({ page }) => {

//   await page.goto('https://www.saucedemo.com/');
//   // await  page.waitForTimeout(2000);
//   await page.getByPlaceholder('Username').fill('standard_user');
//   await page.getByPlaceholder('Password').fill('secret_sauce');
//   await page.getByRole('button', { name: 'Login' }).click();

// //   await page.getByRole('button', { name: 'Add to cart' }).first().click();

// //   await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

// });


// test('Logout Test', async ({ page }) => {

//   await page.goto('https://www.saucedemo.com/');

//   await page.getByPlaceholder('Username').fill('standard_user');
//   await page.getByPlaceholder('Password').fill('secret_sauce');
//   await page.getByRole('button', { name: 'Login' }).click();

// //   await page.locator('#react-burger-menu-btn').click();
// //   await page.getByText('Logout').click();

// //   await expect(page).toHaveURL('https://www.saucedemo.com/');

// });