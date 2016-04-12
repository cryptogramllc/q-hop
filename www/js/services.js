angular.module('starter.services', [])

.factory('Chats', function() {
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };

})



.factory('Offers', function() {

  var offers = [{
    id: 0,
    name: 'Ben Sparrow',
    offer: '£10',
    quote: "I am offering a place in the queue.",
    queue: '6',
    time: '20:00',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    offer: '£8',
    quote: "This place is great. But I'm going somewhere else.",
    queue: '12',
    time: '21:00',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    offer: '£40',
    quote: "I need money more than this reservation.",
    queue: '1',
    time: '19:00',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    offer: '£20',
    quote: "Accidently bought these. Buy em from me.",
    queue: '5',
    time: '18:00',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    offer: '£6',
    quote: "Date cancelled. Get my place in line.",
    queue: '5',
    time: '20:00',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return offers;
    },
    remove: function(offer) {
      offers.splice(offers.indexOf(offer), 1);
    },
    get: function(offerId) {
      for (var i = 0; i < offers.length; i++) {
        if (offers[i].id === parseInt(offerId)) {
          return offers[i];
        }
      }
      return null;
    }
  };
})

.factory('Bookings', function() {

  var bookings = [{
    id: 0,
    place: 'The Fat Duck',
    price: '£10',
    //quote: "I am priceing a place in the queue.",
    date: 'May 26 2016',
    time: '20:00',
    address: 'High St, Bray, West Berkshire SL6 2AQ',
    phone: '01628 580333',
    //face: 'img/ben.png'
    img: "http://s3-media4.fl.yelpcdn.com/bphoto/ILe8nfeGR0vl_YLyoW0psg/ms.jpg"
  }, {
    id: 1,
    place: 'Restaurant Gordon Ramsay',
    price: '£8',
    //quote: "This place is great. But I'm going somewhere else.",
    date: 'September 22 2016',
    time: '21:00',
    address: '68 Royal Hospital Rd, London SW3 4HP',
    phone: '020 7352 4441',
    //face: 'img/max.png'
    img: "http://s3-media4.fl.yelpcdn.com/bphoto/TUccU5CCExFdR_LNpdh5jw/ms.jpg"
  }, {
    id: 2,
    place: 'Angler',
    price: '£40',
    //quote: "I need money more than this reservation.",
    date: 'June 21 2016',
    time: '19:00',
    address: 'South Place Hotel, 3 South Pl, London EC2M 2AF',
    phone: '020 3215 1260',
    //face: 'img/adam.jpg'
    img: "http://s3-media3.fl.yelpcdn.com/bphoto/yWLKgcHpS5s5OQ9MIeUclA/ms.jpg"
  }];

  return {
    all: function() {
      return bookings;
    },
    remove: function(booking) {
      bookings.splice(bookings.indexOf(booking), 1);
    },
    get: function(bookingId) {
      for (var i = 0; i < bookings.length; i++) {
        if (bookings[i].id === parseInt(bookingId)) {
          return bookings[i];
        }
      }
      return null;
    }
  };
});











