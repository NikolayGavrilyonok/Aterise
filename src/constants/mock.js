const dateNow = new Date();
const dateNowISO = dateNow.toISOString();

export const mockData = [
  // today
  {
    amount: 2337,
    category: 'category 1',
    date: dateNowISO,
    description: 'description 1',
    title: 'transaction 1'
  },
  {
    amount: -2982,
    category: 'category 2',
    date: dateNowISO,
    description: 'description 2',
    title: 'transaction 2'
  },
  {
    amount: 909828,
    category: 'category 1',
    date: dateNowISO,
    description: 'description 1',
    title: 'transaction 3'
  },

  // last week
  {
    amount: 436789,
    category: 'category 5',
    date: new Date('2019-06-23').toISOString(),
    description: 'description 4',
    title: 'transaction 3'
  },
  {
    amount: -9816,
    category: 'category 2',
    date: new Date('2019-06-23').toISOString(),
    description: 'description 6',
    title: 'transaction 4'
  },
  {
    amount: -177292,
    category: 'category 1',
    date: new Date('2019-06-23').toISOString(),
    description: 'description 7',
    title: 'transaction 5'
  },

  // last month
  {
    amount: 1120992,
    category: 'category 1',
    date: new Date('2019-05-07').toISOString(),
    description: 'description 7',
    title: 'transaction 7'
  },
  {
    amount: -3535352,
    category: 'category 1',
    date: new Date('2019-05-07').toISOString(),
    description: 'description 7',
    title: 'transaction 8'
  },
  {
    amount: 1726,
    category: 'category 1',
    date: new Date('2019-05-07').toISOString(),
    description: 'description 7',
    title: 'transaction 9'
  },

  // other
  {
    amount: 1726,
    category: 'category 1',
    date: new Date('2014-05-07').toISOString(),
    description: 'description 7',
    title: 'transaction 9'
  },
  {
    amount: 1726,
    category: 'category 1',
    date: new Date('2015-05-07').toISOString(),
    description: 'description 7',
    title: 'transaction 9'
  },
  {
    amount: 1726,
    category: 'category 1',
    date: new Date('2018-12-31').toISOString(),
    description: 'description 7',
    title: 'transaction 9'
  },
  {
    amount: 1726,
    category: 'category 1',
    date: new Date('2019-01-22').toISOString(),
    description: 'description 7',
    title: 'transaction 9'
  },
  {
    amount: 1726,
    category: 'category 1',
    date: new Date('2019-01-21').toISOString(),
    description: 'description 7',
    title: 'transaction 9'
  },
  {
    amount: 1726,
    category: 'category 1',
    date: new Date('2019-01-24').toISOString(),
    description: 'description 7',
    title: 'transaction 9'
  },
  {
    amount: 1726,
    category: 'category 1',
    date: new Date('2019-02-24').toISOString(),
    description: 'description 7',
    title: 'transaction 9'
  },
  {
    amount: 1726,
    category: 'category 1',
    date: new Date('2019-02-24').toISOString(),
    description: 'description 7',
    title: 'transaction 9'
  },
  {
    amount: 1726,
    category: 'category 1',
    date: new Date('2019-03-24').toISOString(),
    description: 'description 7',
    title: 'transaction 9'
  },
  {
    amount: 1726,
    category: 'category 1',
    date: new Date('2019-03-24').toISOString(),
    description: 'description 7',
    title: 'transaction 9'
  },
];
