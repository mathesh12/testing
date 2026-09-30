 import {test} from '@playwright/test'

test("alert", async({page})=>{

await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

page.on("dialog",async (dialog) =>{
console.log(dialog.message())
await dialog.accept("playwright")

})

//await page.locator("button[onclick='jsPrompt()']").click()

})

// // accept()
// //dismiss()
// // accept("value")

//base syntax

// test.beforeAll(async()=>{
// setup
//})



// test.beforeAll(async({page})=>{

//   // nav
//   // username
//   // pass
//   // button

// });

// test("test- 1",async()=>{

// // verify the title

// })


// test("test- 2",async()=>{

// // Sauce Labs Backpack add to cart

// })

// test("test- 3",async()=>{

// // open the cart

// })

