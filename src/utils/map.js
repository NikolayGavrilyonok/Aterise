import {MONTHS} from '../constants/constants';

export const mapTransactionsData = arrayOfFilterFunctions => data => {
  const dateNow = new Date();

  return arrayOfFilterFunctions.reduce((acc, next) => {
    return [...acc, next(data, dateNow)];
  }, []);
};

export const reduceTransactionsData = data => data.reduce((acc, next) => {
  if (Array.isArray(next)) return [...acc, ...reduceTransactionsData(next)];

  return [...acc, next];
}, []);

export const reduceOtherMonthTransactions = data => {
  let result = [];
  let section = {};
  let currentMonth = null;
  let currentYear = null;

  for (let i = 0; i < data.length; i++) {
    let {date} = data[i];
    let transactionMonth = new Date(date).getUTCMonth();
    let transactionYear = new Date(date).getUTCFullYear();

    if (
      currentMonth !== transactionMonth ||
      currentMonth === transactionMonth && currentYear !== transactionYear
    ) {
      if (!Array.isArray(section.data)) {
        section.sectionTitle = `${transactionYear}, ${MONTHS[transactionMonth]}`;
        section.data = [data[i]];

        currentMonth = transactionMonth;
        currentYear = transactionYear;
        continue;
      }

      result.push(section);

      currentMonth = transactionMonth;
      currentYear = transactionYear;

      section = {};
      section.sectionTitle = `${transactionYear}, ${MONTHS[transactionMonth]}`;
      section.data = [data[i]];

      if (i === data.length - 1) result.push(section);
    }

    else if (currentMonth === transactionMonth && currentYear === transactionYear) {
      section.data.push(data[i]);
    }
  }

  return result;
};
