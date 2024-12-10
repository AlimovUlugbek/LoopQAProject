class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = '#username';
    this.passwordInput = '#password';
    this.loginButton = 'button:has-text("Sign in")';
  }

  async navigateToLoginPage() {
    await this.page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
  }

  async login(email, password) {
    await this.page.fill(this.emailInput, email);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }
}

module.exports = LoginPage;
