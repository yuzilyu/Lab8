# Lab8_Starter

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)

1

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

I would not use a unit test to test the "message" feature of a messaging application because the message feature is a feature that requires multiple individual components interact with each other

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters

I would use a unit test to test the "max message length" feature because it is one small part of the feature. There aren't many moving parts.

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?

If the field "headless" is set to true, we would not see a broser UI at all. It would be the same as running the test using npm.

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?

I would add `await page.click('img');` so that the puppeteer will click the setting image before anything else. 