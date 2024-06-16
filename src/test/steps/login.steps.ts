import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium,Page,Browser,expect } from "@playwright/test";

let browser : Browser;
let page : Page;
Given('User navigates to the application', async function () {
    // Write code here that turns the phrase above into concrete actions
    // Launch the browser
    browser = await chromium.launch({ headless: false });

    // Create a new page and await its resolution
    page = await browser.newPage();

    // Navigate to the application (if needed)
    await page.goto('https://storytale.io/');
  });

// ?And User click on the login link

  Given('User click on the login link', async function () {
    // Write code here that turns the phrase above into concrete actions
   page.locator('normalize-space()').click
  });

// ? And User enter the username as "contactkkiran@gmail.com"

  Given('User enter the username as {string}', async function (username) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

// ? And User enter the password as "Varma@143"

  Given('User enter the password as {string}', async function (password) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

// ?When User click on the login button

  When('User click on the login button', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

//  Then Login should be success

  Then('Login should be success', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });


// Scenario: Login should not be success # src\test\features\login.feature:13
// Given User navigates to the application

  Given('User navigates to the application', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

// ? And User click on the login link

  Given('User click on the login link', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

//  Given User enter the username as "Dummy@gmail.com"

  Given('User enter the username as {string}', async function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

//  Given User enter the password as "Dummy"

  Given('User enter the password as {string}', async function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

//  When User click on the login button

  When('User click on the login button', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

// But Login should fail and should show error message

  When('Login should fail and should show error message', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });