# Playwright Test Automation Project

End-to-end test suite built with [Playwright](https://playwright.dev/) and TypeScript.

## Project Structure

```
project/
├── tests/
│   ├── example.spec.ts   # Sample Playwright demo test (playwright.dev)
│   └── login.spec.ts     # Login tests for https://www.saucedemo.com/
├── playwright.config.ts  # Playwright configuration (browsers, retries, reporter)
├── package.json          # Project dependencies
└── playwright-report/    # HTML report generated after each run
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm (comes with Node.js)

## Installation

1. Clone or download this project, then open a terminal in the project folder.

2. Install dependencies:

   ```bash
   npm install
   ```

3. Install the Playwright browsers (Chromium, Firefox, WebKit):

   ```bash
   npx playwright install
   ```

## Running Tests

Run all tests (all browsers):

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test tests/login.spec.ts
```

Run tests on a single browser:

```bash
npx playwright test --project=chromium
```

Run tests in headed mode (see the browser window):

```bash
npx playwright test --headed
```

Run a single test by name:

```bash
npx playwright test -g "successful login"
```

Run tests in UI mode (interactive test runner):

```bash
npx playwright test --ui
```

## Viewing the Test Report

After a run, an HTML report is generated in `playwright-report/`. Open it with:

```bash
npx playwright show-report
```

## Configuration

Key settings live in [playwright.config.ts](playwright.config.ts):

- **testDir** — tests are picked up from the `tests/` folder
- **projects** — tests run against Chromium, Firefox, and WebKit
- **retries** — failed tests retry automatically on CI
- **trace** — a replayable trace is captured on the first retry of a failing test

## Adding New Tests

Create a new `*.spec.ts` file inside `tests/` and use the Playwright test API:

```ts
import { test, expect } from '@playwright/test';

test('example test', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});
```
