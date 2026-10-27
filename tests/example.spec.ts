import { test, expect } from '@playwright/test';

test.describe('tests with playwright page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://playwright.dev/')
  });

  test('has title', async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('get started link', async ({ page }) => {
    // Click the get started link.
    await page.getByRole('link', { name: 'Get started' }).click();

    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });

  test('Discord element on playwright page', async ({page}) => {
    await expect(page.locator('[class="navbar__item navbar__link header-discord-link"]')).toBeVisible();
  });

  test('GitHub element on playwright page', async ({page}) => {
    await expect(page.locator('[class="navbar__item navbar__link header-github-link"]')).toBeVisible();
  });

  test('Light mode element on playwright page', async ({page}) => {
    await expect(page.locator('[class="clean-btn toggleButton_gllP"]')).toBeVisible();
  });
})
