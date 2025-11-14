import { test, expect } from '@playwright/test';
import { HomePage } from 'playwright/pages/HomePage';
import { LoginPage } from 'playwright/pages/LoginPage';

test('validate login successful', async ({ page, baseURL }) => {
  const homePage = new HomePage(page);
  await homePage.goto(baseURL);
  await homePage.navigateToLoginPage();

  const loginPage = new LoginPage(page);
  await loginPage.loginUser('kc121', '123456');
  expect(await loginPage.loginSuccess.isVisible());
});

test('validate login not successful', async ({ page, baseURL }) => {
  const homePage = new HomePage(page);
  await homePage.goto(baseURL);
  await homePage.navigateToLoginPage();

  const loginPage = new LoginPage(page);
  await loginPage.loginUser('kc12', '12345');
  expect(await loginPage.loginFailed.isVisible());

});
