import { test, expect } from '@playwright/test';

test.describe('Post CRUD Flow', () => {


test('Create Post with fake backend', async ({ page }) => {

  await page.route('**/posts/create-post', async route => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        success: true,
        message: 'Post created',
      }),
    });
  });

  await page.goto('http://localhost:5173/posts/create');

  await page.fill('input[name="title"]', 'Fake Post');

  await page.getByTestId('submit-post').click();

  await expect(page.getByText('Post created')).toBeVisible();
});


test('Read posts with fake data', async ({ page }) => {

  await page.route('**/posts', async route => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify([
        { id: 1, title: 'Fake Post A' },
        { id: 2, title: 'Fake Post B' },
      ]),
    });
  });

  await page.goto('http://localhost:5173/posts');

  await expect(page.getByText('Fake Post A')).toBeVisible();
  await expect(page.getByText('Fake Post B')).toBeVisible();
});


//   test('Read Post', async ({ page }) => {
//     await page.goto('http://localhost:5173/posts');

//     await expect(page.getByText('Post A')).toBeVisible();
//   });

//   test('Update Post', async ({ page }) => {
//     await page.goto('http://localhost:5173/posts');

//     await page.click('text=Edit');
//     await page.fill('input[name="title"]', 'Updated Post A');
//     await page.click('button[type="submit"]');

//     await expect(page.getByText('Updated Post A')).toBeVisible();
//   });

//   test('Delete Post', async ({ page }) => {
//     await page.goto('http://localhost:5173/posts');

//     page.on('dialog', dialog => dialog.accept());

//     await page.click('text=Delete');

//     await expect(page.getByText('Updated Post A')).not.toBeVisible();
//   });

});
