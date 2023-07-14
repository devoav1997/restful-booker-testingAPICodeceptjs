const { I } = inject();
const assert = require('assert');

let response;

Given('I send a GET request to {string}', async (url) => {
    const headers = {
      'Accept': 'application/json'
    };
    response = await I.sendGetRequest(url, headers);
  });
  

When('the response is received', () => {
  // tidak melakukan apa-apa, karena respons sudah diterima pada langkah sebelumnya
});

Then('the response status code should be {int}', () => {
  I.seeResponseCodeIs(200);
});      

