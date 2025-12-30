import { test } from '@playwright/test'
test('fbRegistration', async ({ page }) => {
      await page.goto("https://www.facebook.com/");
      await page.locator("//a[contains(text(),'new')]").click();
      await page.waitForTimeout(3000);

      await page.locator("//input[@name='firstname']").fill("Jayabharathi")
      await page.locator("//input[@name='lastname']").fill("Balasubramanain")
      await page.selectOption("#day", "14")
      await page.selectOption("#month", "Jan")      
      await page.selectOption("#year", "1995")
      await page.locator("//input[@value='1']").click()
      
      await page.locator("//input[@name='reg_email__']").fill("1234567890")
      await page.locator("//input[@id='password_step_input']").fill("********")
      await page.locator("//button[text()='Sign up']").click

     
})