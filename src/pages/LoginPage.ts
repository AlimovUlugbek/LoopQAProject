import { Page } from '@playwright/test';

class LoginPage {
  private page: Page;
  private emailInput: string;
  private passwordInput: string;
  private loginButton: string;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = '#username';
    this.passwordInput = '#password';
    this.loginButton = 'button:has-text("Sign in")';
  }

  async navigateToLoginPage(): Promise<void> {
    await this.page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
  }

  async login(email: string, password: string): Promise<void> {
    await this.page.fill(this.emailInput, email);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }
}

export default LoginPage;
