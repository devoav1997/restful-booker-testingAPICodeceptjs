Feature: CreateBooking
  As a user
  I want to create a new booking
  So that I can reserve a room

Scenario: Successfully create a new booking
  Given I have the necessary information to create a booking
  When I send a POST request to the CreateBooking API with the correct information
  Then I should receive a successful response with the booking details
