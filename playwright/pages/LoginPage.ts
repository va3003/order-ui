import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly loginHeader: Locator;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginBtn: Locator;
  readonly loginSuccess: Locator;
  readonly loginFailed: Locator;

//   readonly pomLink: Locator;
//   readonly tocList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginHeader = page.locator('h1', { hasText: 'Login' });
    this.username = page.getByLabel('username');
    this.password = page.getByLabel('password');
    this.loginBtn = page.getByRole('button', { name: 'Login' });
    this.loginSuccess = page.getByText('Login Successful!');
    this.loginFailed = page.getByText('Login Failed',{ exact: true});

    // this.pomLink = page.locator('li', {
    //   hasText: 'Guides',
    // }).locator('a', {
    //   hasText: 'Page Object Model',
    // });
    // this.tocList = page.locator('article div.markdown ul > li > a');
  }


  async loginUser(username:string, password:string) {
    await expect(this.loginHeader).toBeVisible();
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginBtn.first().click();
  }

//   async pageObjectModel() {
//     await this.getStarted();
//     await this.pomLink.click();
//   }
}