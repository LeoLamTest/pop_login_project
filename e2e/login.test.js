// Import necessary dependencies
const { device, expect, element, by } = require('detox');

// Test case 1: Passed
describe('Login Test - Passed', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should navigate to the welcome screen when correct username and password are entered', async () => {
    await element(by.id('usernameInput')).typeText('popper1');
    await element(by.id('passwordInput')).typeText('password');
    await element(by.id('signInButton')).tap();
    await expect(element(by.id('welcomeScreen'))).toBeVisible();
  });
});

// Test case 2: Failed
describe('Login Test - Failed', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show a message box when incorrect password is entered', async () => {
    await element(by.id('usernameInput')).typeText('popper1');
    await element(by.id('passwordInput')).typeText('wrong');
    await element(by.id('signInButton')).tap();
    await expect(element(by.text('Password is incorrect'))).toBeVisible();
  });
});