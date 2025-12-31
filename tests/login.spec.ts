import { test, expect } from "@playwright/test";


  test("login form selectors with assertions", async ({ page , context}) => {

    await page.goto("http://localhost:5173/login");

    // getByLabel
    const email = page.getByLabel("Email");
    await email.fill("test@example.com");
    await expect(email).toHaveValue("test@example.com");

    // getByPlaceholder
    const password = page.getByPlaceholder("Enter Your Password");
    await password.fill("123456");
    await expect(password).toHaveValue("123456");

    // getByTestId
    await expect(page.getByTestId("email")).toBeVisible();

    // getByRole
    const loginBtn = page.getByRole("button", { name: /login/i });
    await expect(loginBtn).toBeEnabled();
    await loginBtn.click();


    // cokkies

      const cookies = await context.cookies();

      const authCookies = await cookies.find(cookie=>cookie.name ==="access_token");

      await expect(authCookies).toBeDefined();
      
    // result assertion
    // await expect(page).toHaveURL(/dashboard/);
  });

