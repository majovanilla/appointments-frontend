const initState = {
  appointments: [
    {
      id: 1,
      location: 'London',
      tutor_id: 1,
      canceled: false,
      created_at: '2020-06-08 16:51:35',
      updated_at: '2020-06-08 16:51:35',
      user_id: 1,
      date: '2020-07-05',
      time: '1  8:00:00',
    },
    {
      id: 2,
      location: 'Mexico City',
      tutor_id: 1,
      canceled: false,
      created_at: '2020-06-08 16:51:35',
      updated_at: '2020-06-08 16:51:35',
      user_id: 1,
      date: '2020-07-05',
      time: '15:00:00',
    },
    {
      id: 3,
      location: 'Mexico City',
      tutor_id: 1,
      canceled: false,
      created_at: '2020-06-08 16:51:35',
      updated_at: '2020-06-08 16:51:35',
      user_id: 1,
      date: '2020-07-05',
      time: '15:00:00',
    },
    {
      id: 4,
      location: 'Mexico City',
      tutor_id: 1,
      canceled: false,
      created_at: '2020-06-08 16:51:35',
      updated_at: '2020-06-08 16:51:35',
      user_id: 1,
      date: '2020-07-05',
      time: '15:00:00',
    },
    {
      id: 5,
      location: 'Mexico City',
      tutor_id: 1,
      canceled: false,
      created_at: '2020-06-08 16:51:35',
      updated_at: '2020-06-08 16:51:35',
      user_id: 1,
      date: '2020-07-05',
      time: '15:00:00',
    },
    {
      id: 6,
      location: 'Mexico City',
      tutor_id: 1,
      canceled: false,
      created_at: '2020-06-08 16:51:35',
      updated_at: '2020-06-08 16:51:35',
      user_id: 1,
      date: '2020-07-05',
      time: '15:00:00',
    },
    {
      id: 7,
      location: 'Mexico City',
      tutor_id: 1,
      canceled: false,
      created_at: '2020-06-08 16:51:35',
      updated_at: '2020-06-08 16:51:35',
      user_id: 1,
      date: '2020-07-05',
      time: '15:00:00',
    },
  ],
};

const apptReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_APPOINTMENTS':
      return {
        ...state,
        appointments: action.appointments,
      };
    default:
      return state;
  }
};

export default apptReducer;
