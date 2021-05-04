export const reservation: any = {
  content: [
    {
      booking: {
        modificationCounter: 1,
        id: 0,
        name: 'user0',
        bookingToken: 'CB_20170509_123502555Z',
        comment: 'Booking Type CSR',
        bookingDate: 1590557837.734263,
        expirationDate: 1590554237.734263,
        creationDate: 1590125837.734263,
        email: 'user0@mail.com',
        cancelled: false,
        bookingType: 'COMMON',
        tableId: 0,
        orderId: 0,
        assistants: 3,
        userId: 0,
      },
      table: {
        modificationCounter: 1,
        id: 0,
        seatsNumber: 4,
      },
      invitedGuests: [],
      order: {
        modificationCounter: 1,
        id: 0,
        bookingId: 0,
        invitedGuestId: null,
        bookingToken: null,
        hostId: 0,
      },
      orders: [
        {
          modificationCounter: 1,
          id: 0,
          bookingId: 0,
          invitedGuestId: null,
          bookingToken: null,
          hostId: 0,
        },
      ],
      user: {
        modificationCounter: 1,
        id: 0,
        username: 'user0',
        email: 'user0@mail.com',
        twoFactorStatus: false,
        userRoleId: 0,
      },
    },
    {
      booking: {
        modificationCounter: 1,
        id: 1,
        name: 'user1',
        bookingToken: 'CB_20170510_123502575Z',
        comment: 'Booking Type GSR',
        bookingDate: 1590557837.734263,
        expirationDate: 1590554237.734263,
        creationDate: 1590125837.734263,
        email: 'user1@mail.com',
        cancelled: false,
        bookingType: 'INVITED',
        tableId: 1,
        orderId: 1,
        assistants: null,
        userId: 0,
      },
      table: {
        modificationCounter: 1,
        id: 1,
        seatsNumber: 4,
      },
      invitedGuests: [],
      order: {
        modificationCounter: 1,
        id: 1,
        bookingId: 3,
        invitedGuestId: 0,
        bookingToken: null,
        hostId: null,
      },
      orders: [],
      user: {
        modificationCounter: 1,
        id: 0,
        username: 'user0',
        email: 'user0@mail.com',
        twoFactorStatus: false,
        userRoleId: 0,
      },
    },
    {
      booking: {
        modificationCounter: 1,
        id: 2,
        name: 'user2',
        bookingToken: 'CB_20170510_123502595Z',
        comment: 'Booking Type GSR',
        bookingDate: 1590557837.734263,
        expirationDate: 1590554237.734263,
        creationDate: 1590125837.734263,
        email: 'user2@mail.com',
        cancelled: false,
        bookingType: 'COMMON',
        tableId: 2,
        orderId: null,
        assistants: 5,
        userId: 0,
      },
      table: {
        modificationCounter: 1,
        id: 2,
        seatsNumber: 4,
      },
      invitedGuests: [],
      order: null,
      orders: [],
      user: {
        modificationCounter: 1,
        id: 0,
        username: 'user0',
        email: 'user0@mail.com',
        twoFactorStatus: false,
        userRoleId: 0,
      },
    },
    {
      booking: {
        modificationCounter: 1,
        id: 3,
        name: 'host1',
        bookingToken: 'CB_20170510_123502655Z',
        comment: 'Booking Type GSR',
        bookingDate: 1590557837.734263,
        expirationDate: 1590554237.734263,
        creationDate: 1590125837.734263,
        email: 'host1@mail.com',
        cancelled: false,
        bookingType: 'INVITED',
        tableId: 3,
        orderId: null,
        assistants: null,
        userId: 0,
      },
      table: {
        modificationCounter: 1,
        id: 3,
        seatsNumber: 4,
      },
      invitedGuests: [
        {
          modificationCounter: 1,
          id: 0,
          bookingId: 3,
          guestToken: 'GB_20170510_02350266501Z',
          email: 'guest0@mail.com',
          accepted: true,
          modificationDate: 1590557837.734263,
        },
        {
          modificationCounter: 1,
          id: 1,
          bookingId: 3,
          guestToken: 'GB_20170510_12350266501Z',
          email: 'guest1@mail.com',
          accepted: true,
          modificationDate: 1590557837.734263,
        },
        {
          modificationCounter: 1,
          id: 2,
          bookingId: 3,
          guestToken: 'GB_20170510_22350266501Z',
          email: 'guest2@mail.com',
          accepted: false,
          modificationDate: 1590557837.734263,
        },
        {
          modificationCounter: 1,
          id: 3,
          bookingId: 3,
          guestToken: 'GB_20170510_32350266501Z',
          email: 'guest3@mail.com',
          accepted: true,
          modificationDate: 1590557837.734263,
        },
        {
          modificationCounter: 1,
          id: 4,
          bookingId: 3,
          guestToken: 'GB_20170510_42350266501Z',
          email: 'guest4@mail.com',
          accepted: false,
          modificationDate: 1590557837.734263,
        },
      ],
      order: null,
      orders: [
        {
          modificationCounter: 1,
          id: 1,
          bookingId: 3,
          invitedGuestId: 0,
          bookingToken: null,
          hostId: null,
        },
        {
          modificationCounter: 1,
          id: 2,
          bookingId: 3,
          invitedGuestId: 1,
          bookingToken: null,
          hostId: null,
        },
        {
          modificationCounter: 1,
          id: 3,
          bookingId: 3,
          invitedGuestId: 2,
          bookingToken: null,
          hostId: null,
        },
        {
          modificationCounter: 1,
          id: 4,
          bookingId: 3,
          invitedGuestId: 3,
          bookingToken: null,
          hostId: null,
        },
        {
          modificationCounter: 1,
          id: 5,
          bookingId: 3,
          invitedGuestId: 4,
          bookingToken: null,
          hostId: null,
        },
      ],
      user: {
        modificationCounter: 1,
        id: 0,
        username: 'user0',
        email: 'user0@mail.com',
        twoFactorStatus: false,
        userRoleId: 0,
      },
    },
    {
      booking: {
        modificationCounter: 1,
        id: 4,
        name: 'host1',
        bookingToken: 'CB_20170510_123503600Z',
        comment: 'Booking Type GSR',
        bookingDate: 1590557837.734263,
        expirationDate: 1590554237.734263,
        creationDate: 1590125837.734263,
        email: 'host1@mail.com',
        cancelled: false,
        bookingType: 'INVITED',
        tableId: 3,
        orderId: null,
        assistants: null,
        userId: 0,
      },
      table: {
        modificationCounter: 1,
        id: 3,
        seatsNumber: 4,
      },
      invitedGuests: [
        {
          modificationCounter: 1,
          id: 5,
          bookingId: 4,
          guestToken: 'GB_20170510_52350266501Z',
          email: 'guest5@mail.com',
          accepted: true,
          modificationDate: 1590557837.734263,
        },
        {
          modificationCounter: 1,
          id: 6,
          bookingId: 4,
          guestToken: 'GB_20170510_62350266501Z',
          email: 'guest6@mail.com',
          accepted: false,
          modificationDate: 1590557837.734263,
        },
        {
          modificationCounter: 1,
          id: 7,
          bookingId: 4,
          guestToken: 'GB_20170510_72350266501Z',
          email: 'guest7@mail.com',
          accepted: true,
          modificationDate: 1590557837.734263,
        },
        {
          modificationCounter: 1,
          id: 8,
          bookingId: 4,
          guestToken: 'GB_20170510_82350266501Z',
          email: 'guest0@mail.com',
          accepted: true,
          modificationDate: 1590557837.734263,
        },
        {
          modificationCounter: 1,
          id: 9,
          bookingId: 4,
          guestToken: 'GB_20170510_92350266501Z',
          email: 'guest1@mail.com',
          accepted: false,
          modificationDate: 1590557837.734263,
        },
      ],
      order: null,
      orders: [
        {
          modificationCounter: 1,
          id: 6,
          bookingId: 4,
          invitedGuestId: 8,
          bookingToken: null,
          hostId: null,
        },
        {
          modificationCounter: 1,
          id: 7,
          bookingId: 4,
          invitedGuestId: 9,
          bookingToken: null,
          hostId: null,
        },
      ],
      user: {
        modificationCounter: 1,
        id: 0,
        username: 'user0',
        email: 'user0@mail.com',
        twoFactorStatus: false,
        userRoleId: 0,
      },
    },
  ],
  pageable: {
    pageNumber: 0,
    pageSize: 5,
    sort: [],
  },
  totalElements: 5,
};
