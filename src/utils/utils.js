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

export const getTotalTransactionsAmount = data => {
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
