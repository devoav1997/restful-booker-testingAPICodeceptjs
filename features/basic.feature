Feature: API Testing
  As a user
  I want to test the GetBookingIds endpoint
  So that I can verify that it is working correctly

Scenario: Menguji endpoint GetBookings
  Given I have access to the API
  When I send a GET request to the "/booking" endpoint
  Then I should receive a response with status code 200
  And the response should contain data for "bookingid"



