const { I } = inject();
// Add in your custom step files

Given('I have access to the API', () => {
 
});

When('I send a GET request to the {string} endpoint', async(endpoint) => {
  const response = await I.sendGetRequest(`https://restful-booker.herokuapp.com${endpoint}`);
  I.seeResponseCodeIsSuccessful();
});

Then('I should receive a response with status code {int}', (statusCode) => {});

Then('the response should contain data for {string}', (key) => {
  I.seeResponseContainsKeys([key]);
});




