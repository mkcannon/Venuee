const sequelize = require("./database/db");
const User = require("./database/models/User");
const Vendor = require("./database/models/Vendor");
const Reservation = require("./database/models/Reservation");
const db = require("./database/associations");

const users = [
  {
    userName: "RickT1989",
    email: "rik@msic.tv",
    password: "livinlavidaloca",
    company: "Group Tech",
    userImg:
      "https://firebasestorage.googleapis.com/v0/b/venuee-41927.appspot.com/o/charlie.jpg?alt=media&token=d0ff7fa7-66fe-4088-94fb-6277663b44e9",
  },
  {
    userName: "PeterP",
    email: "pp@bowery.com",
    password: "secretpass",
    company: "Bowery CO.",
    userImg:
      "https://firebasestorage.googleapis.com/v0/b/venuee-41927.appspot.com/o/max.jpg?alt=media&token=b271f445-2cfa-4e00-a29e-83ee2df9476f",
  },
  {
    userName: "EliodorSkinner",
    email: "eskinner@shouse.biz",
    password: "anothersecret",
    company: "Swift house",
    userImg:
      "https://firebasestorage.googleapis.com/v0/b/venuee-41927.appspot.com/o/dee.jpg?alt=media&token=27828acb-591a-4a44-819b-c0c5a2054a60",
  },
  {
    userName: "JDolittle",
    email: "dolittle@pets.com",
    password: "lastsecret",
    company: "Pets 4 life",
    userImg:
      "https://firebasestorage.googleapis.com/v0/b/venuee-41927.appspot.com/o/dennis.jpg?alt=media&token=2c5c2a6a-91d9-4ccb-b236-3c15717ab617",
  },
];

const vendors = [
  {businessName: "Real Food", email: "real@foods.com", password: "myunrealfood", streetAddress: "rstreet", city: "rcity", state: "rstate", zipCode: "97111", maxCapacity: "90", type: "lounge", vendorImg: "url111"},
  {businessName: "Piccolo Sogno", email: "psogno@psogno.com", password: "greatestsecret", streetAddress: "pstreet", city: "pcity", state: "pstate", zipCode: "97222", maxCapacity: "15", type: "banquet hall", vendorImg: "url222"},
  {businessName: "Tropical Pizza", email: "tropical@pizza.com", password: "pinapplepizza", streetAddress: "tstreet", city: "tcity", state: "tstate", zipCode: "97222", maxCapacity: "25", type: "bar", vendorImg: "url333"},
  {businessName: "Big Barbecue", email: "bb@bbarbecue.com", password: "brutalbarbecues", streetAddress: "bstreet", city: "bcity", state: "bstate", zipCode: "97111", maxCapacity: "100", type: "restaurant", vendorImg: "url444"},
  {businessName: "Doug Fir Lounge", email: "events@dougfir.com", password: "eatfir", streetAddress: "801 NE Burnside Ave", city: "Portland", state: "Oregon", zipCode: "97222", maxCapacity: "80", type: "lounge", vendorImg: "url555" },
  {businessName: "Harlow", email: "events@harlow.com", password: "harlow2022", streetAddress: "3710 SE Belmont St", city: "Portland", state: "Oregon", zipCode: "97111", maxCapacity: "30", type: "restaurant", vendorImg: "url666" },
  {businessName: "Opal28", email: "events@opal.com", password: "opal2022", streetAddress: "900 SW Lovejoy Ave", city: "Portland", state: "Oregon", zipCode: "97222", maxCapacity: "20", type: "bar", vendorImg: "url777" },
];

const reservations = [
  {
    reserveDate: new Date("December 10, 2022 13:00:00"),
    partySize: 5,
    userId: 1,
    vendorId: 1,
  },
  {
    reserveDate: new Date("December 10, 2022 17:30:00"),
    partySize: 50,
    userId: 2,
    vendorId: 3,
  },
  {
    reserveDate: new Date("December 11, 2022 10:30:00"),
    partySize: 10,
    userId: 2,
    vendorId: 2,
  },
  {
    reserveDate: new Date("December 11, 2022 13:30:00"),
    partySize: 80,
    userId: 3,
    vendorId: 4,
  },
  {
    reserveDate: new Date("December 12, 2022 13:30:00"),
    partySize: 80,
    userId: 3,
    vendorId: 4,
  },
  {
    reserveDate: new Date("December 12, 2022 13:30:00"),
    partySize: 80,
    userId: 4,
    vendorId: 7,
  },
  {
    reserveDate: new Date("December 13, 2022 13:30:00"),
    partySize: 80,
    userId: 4,
    vendorId: 2,
  },
  
];

sequelize.sync ({ force: false }).then(() => {
}).then(async () => {
  for (let i = 0; i < users.length; i++) {
    await User.create(users[i]);
  };
  for (let i = 0; i < vendors.length; i++){
    await Vendor.create(vendors[i]);
  };
  for ( let i = 0; i < reservations.length; i++){
    await Reservation.create(reservations[i]);
  };

});

