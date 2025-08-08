const { test, expect, request } = require('@playwright/test');

test.only('POST request - Create user', async ({ request }) => {
  const response = await request.post('https://reqres.in/api/users', {
    data: {
      name: 'John',
      job: 'QA Engineer'
    }
  });

  expect(response.status()).toBe(401);
  const body = await response.json();

  // Assertions
  expect(body.name).toBe('John');
  expect(body.job).toBe('QA Engineer');
  expect(body).toHaveProperty('id');
  expect(body).toHaveProperty('createdAt');
});

test('PUT request - Update user', async ({ request }) => {
  const response = await request.put('https://reqres.in/api/users/2', {
    data: {
      name: 'John Updated',
      job: 'Lead QA'
    }
  });

  expect(response.status()).toBe(200);
  const body = await response.json();

  expect(body.name).toBe('John Updated');
  expect(body.job).toBe('Lead QA');
  expect(body).toHaveProperty('updatedAt');
});
