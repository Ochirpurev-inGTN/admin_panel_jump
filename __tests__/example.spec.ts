import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.click('text=Jump to Dashboard')
  await expect(page).toHaveURL('http://localhost:3000/dashboard')
  await expect(page.locator('label')).toHaveCount(3)
  // await page.locator('text=Get started').click();
  // await expect(page).toHaveTitle(/Getting started/);
});
