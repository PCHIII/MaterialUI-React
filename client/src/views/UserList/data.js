import uuid from 'uuid/v1';

export default [
  {
    id: uuid(),
    name: 'John Smith',
    address: {
      country: 'USA',
      state: 'Texas',
      city: 'Dallas',
      // street: '2849 Fulton Street'
    },
    email: 'js@mock.data',
    phone: '888-428-8897',
    // avatarUrl: '/images/avatars/avatar_3.png',
    createdAt: 1555016400000
  },
  {
    id: uuid(),
    name: 'Adam Smith',
    address: {
      country: 'USA',
      state: 'Bristow',
      city: 'Iowa',
      // street: '1865  Pleasant Hill Road'
    },
    email: 'as@mock.data',
    // avatarUrl: '/images/avatars/avatar_4.png',
    phone: '712-351-5711',
    createdAt: 1555016400000
  },
  
  
];
