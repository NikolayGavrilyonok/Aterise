import {WEEK_DURATION_MS} from '../constants/constants';
import {reduceOtherMonthTransactions} from './map';

export const filterTodayTransactions = (data, dateNow = new Date()) => {
  let currentDate = dateNow.getUTCDate();

  const filteredData = data.filter(item => {
    let transactionDate = new Date(item.date).getUTCDate();

    return transactionDate === currentDate;
  });

  return {
    sectionTitle: 'Today',
    data: filteredData
  };
};

export const filterLastWeekTransactions = (data, dateNow = new Date()) => {
  let dateNowUTCDate = dateNow.getUTCDate();
  let dateNowMs = dateNow.valueOf();
  let dateLastWeekMs = dateNowMs - WEEK_DURATION_MS;

  const filteredData = data.filter(item => {
    let transactionDate = new Date(item.date);
    let transactionDateUTCDate = transactionDate.getUTCDate();
    let transactionDateMs = transactionDate.valueOf();

    if (transactionDateUTCDate !== dateNowUTCDate) {
      return transactionDateMs < dateNowMs && transactionDateMs > dateLastWeekMs;
    }
  });

  return {
    sectionTitle: 'Last week',
    data: filteredData
  };
};

export const filterCurrentMonthTransactions = (data, dateNow = new Date()) => {
  let monthNow = dateNow.getUTCMonth();

  const filteredData = data.filter(item => {
    let transactionMonth = new Date(item.date).getUTCMonth();

    return transactionMonth === monthNow;
  });

  return {
    sectionTitle: 'Current month',
    data: filteredData
  };
};

export const filterLastMonthTransactions = (data, dateNow = new Date()) => {
  let monthNow = dateNow.getUTCMonth();
  let yearNow = dateNow.getUTCFullYear();

  const filteredData = data.filter(item => {
    let transactionYear = new Date(item.date).getUTCFullYear();
    let transactionMonth = new Date(item.date).getUTCMonth();

    if (monthNow === 0) {
      return (transactionYear - yearNow === 1) && transactionMonth === 11;
    }

    return transactionYear === yearNow && (monthNow - transactionMonth === 1);
  });

  return {
    sectionTitle: 'Last month',
    data: filteredData
  };
};

export const filterOtherMonthTransactions = (data, dateNow = new Date()) => {
  let monthNow = dateNow.getUTCMonth();
  let yearNow = dateNow.getUTCFullYear();

  let otherMonthTransactions = data.filter(item => {
    let transactionYear = new Date(item.date).getUTCFullYear();
    let transactionMonth = new Date(item.date).getUTCMonth();

    if (transactionYear === yearNow) {
      return (transactionMonth - monthNow) < -1;
    }

    if (yearNow - transactionYear === 1) {
      if (transactionMonth === 11) return monthNow > 0;

      return true;
    }

    return (yearNow - transactionYear) > 1;
  });

  return reduceOtherMonthTransactions(otherMonthTransactions);
};
