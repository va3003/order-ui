import { expect, type Locator, type Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly homePageHeader: Locator;
  readonly loginBtn: Locator;
  readonly registerBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.homePageHeader = page.locator('h1', { hasText: 'Online Book Ordering System' });
    // this.loginBtn = page.locator('a',{hasText : 'Login'});
    this.loginBtn = page.locator('//a[contains(text(),"Login")]');
    this.registerBtn = page.locator('//a[contains(text(),"Sign Up")]');
  }

  async goto(baseURL:string) {
    await this.page.goto(baseURL);
  }

  async navigateToLoginPage() {
    await expect(this.homePageHeader).toBeVisible();
    await this.loginBtn.click();
  }


  async navigateToRegisterPage() {
    await expect(this.homePageHeader).toBeVisible();
    await this.registerBtn.click();
  }
//   async pageObjectModel() {
//     await this.getStarted();
//     await this.pomLink.click();
//   }
}