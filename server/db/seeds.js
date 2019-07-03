use hotel;
db.dropDatabase();

db.bookings.insertMany([
  {
    firstName: "Sandra",
    secondName: "Brown",
    email: "sandrabrown@gmail.com",
    bookedInStatus: false
  },
  {
    firstName: "Kyle",
    secondName: "Black",
    email: "kyle@gmail.com",
    bookedInStatus: false
  },
  {
    firstName: "Katherine",
    secondName: "Kerr",
    email: "katherine@gmail.com",
    bookedInStatus: false
  }
]);
