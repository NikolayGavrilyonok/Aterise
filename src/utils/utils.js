import {
  filterCurrentMonthTransactions,
  filterLastMonthTransactions,
  filterLastWeekTransactions,
  filterOtherMonthTransactions,
  filterTodayTransactions
} from './filter';
import {formatAmount} from './format';
import {mapTransactionsData, reduceTransactionsData} from './map';
import {sortByDate} from './sort';
import {
  DAY_CURRENT_MONTH,
  DAY_LAST_MONTH,
  DAY_LAST_WEEK,
  DAY_OTHER_MONTH,
  DURATION_MS_DAY
} from '../constants/constants';

export const getDateISO = day => {
  const date = new Date();
  const dateNow = date.getUTCDate();
  const monthNow = date.getUTCMonth() + 1;
  const yearNow = date.getUTCFullYear();
  let result;

  switch (day) {
    case DAY_LAST_WEEK:
      result = date.getTime() - DURATION_MS_DAY * getRandomInteger(2, 5);
      break;
    case DAY_CURRENT_MONTH:
      if (dateNow < 2) {
        result = `${yearNow}/${monthNow}/${getRandomInteger(1, dateNow)}`;
      }
      else {
        result = `${yearNow}/${monthNow}/${getRandomInteger(1, dateNow - 1)}`;
      }
      break;
    case DAY_LAST_MONTH:
      if (monthNow < 2) {
        result = `${yearNow - 1}/${12}/${getRandomInteger(1, 28)}`;
      }
      else {
        result = `${yearNow}/${monthNow - 1}/${getRandomInteger(1, 28)}`;
      }
      break;
    case DAY_OTHER_MONTH:
      if (monthNow < 3) {
        result = [
          yearNow - 1,
          getRandomInteger(1, 12),
          getRandomInteger(1, 28)
        ].join('/');
      }
      else {
        result = [
          yearNow,
          getRandomInteger(1, monthNow - 2),
          getRandomInteger(1, 28)
        ].join('/');
      }
      break;
    default:
      result = date;
  }

  return new Date(result).toISOString();
};

export const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getTotalTransactionsAmount = data => {
  if (!data.length) return '';

  const totalAmount = data.reduce((acc, next) => acc + next.amount, 0);

  return formatAmount(totalAmount);
};

export const mapTransactions = data => {
  const filterFunctionsArray = [
    filterTodayTransactions,
    filterLastWeekTransactions,
    filterCurrentMonthTransactions,
    filterLastMonthTransactions,
    filterOtherMonthTransactions
  ];

  const sortedData = data.sort(sortByDate);
  const mappedData = mapTransactionsData(filterFunctionsArray)(sortedData);

  return reduceTransactionsData(mappedData);
};
