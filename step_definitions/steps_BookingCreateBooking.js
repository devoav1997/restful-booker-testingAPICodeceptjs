const { I } = inject();
let response;
let bookingData;


Given('I have the necessary information to create a booking', () => {
    bookingData = {
      "firstname" : "Devo",
      "lastname" : "Megalodon",
      "totalprice" : 1200,
      "depositpaid" : true,
      "bookingdates" : {
        "checkin" : "2023-07-02",
        "checkout" : "2023-07-07"
      },
      "additionalneeds" : "Breakfast, Lunch, Dinner"
    };
  });

When('I send a POST request to the CreateBooking API with the correct information', async () => {
  // Setel header untuk permintaan
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  };

  // Kirim permintaan POST ke API CreateBooking dengan informasi dan header yang benar
  response = await I.sendPostRequest(
    'https://restful-booker.herokuapp.com/booking',
    bookingData,
    headers
  );

  // Log respons
  console.log(bookingData);

    // Periksa status kode respons
    if (response.status === 200) {
        console.log('\nPermintaan POST berhasil terkirim!\n');
    } else {
        console.log('\nTerjadi kesalahan saat mengirim permintaan POST:', response.status, '\n');
    }
});

Then('I should receive a successful response with the booking details', () => {
    I.seeResponseCodeIs(200);
    I.seeResponseContainsJson({
      booking: bookingData
    });
  });
  
