Feature: Get booking information
  As a user
  I want to test the GetBooking endpoint
  So that I can verify that it is working correctly
Scenario: Retrieve booking information by ID
  Given I send a GET request to "/booking/1"
  When the response is received
  Then the response status code should be 200
