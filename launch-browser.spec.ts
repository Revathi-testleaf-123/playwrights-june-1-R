import { chromium, test } from "@playwright/test";

test("To launch a browser", async () => {

const browserInstance = await chromium.launch({ headless: false, channel : "chrome" });

const browserContext = await browserInstance.newContext();

const page = await browserContext.newPage();
console.log("✅ step 1");

await page.goto("http://leaftaps.com/opentaps/control/main");
await page.waitForTimeout(5000);
await page.screenshot({ path: 'screenshots/login-page.png' });
console.log("✅ step 2");

await page.locator('input[type="text"]').fill('mrevabala@gmail.com');
await page.locator('input[type="password"]').fill('Reva@1992');
await page.screenshot({ path: 'before-click.png' });
const loginButton = page.getByRole('button', { name: 'Login' });
await loginButton.waitFor({ state: 'visible', timeout: 5000 });
await loginButton.click();
console.log("✅ Video recording demo completed");

});