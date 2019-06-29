import {
  DATA_SOURCE_AMOUNT,
  DATA_SOURCE_DATE
} from '../constants/constants';

export const formatAmount = amount => {
  const isNegative = amount < 0;
  const formatted = (Math.abs(amount) / 100).toFixed(2);

  return `${isNegative ? '-' : ''}$${formatted}`;
};

export const formatDate = dateISO => {
  const date = new Date(dateISO);
  const year = date.getUTCFullYear();
  let month = date.getUTCMonth() + 1;
  let day = date.getUTCDate();

  return [
    year,
    `${month < 10 ? `0${month}` : month}`,
    `${day < 10 ? `0${day}` : day}`
  ].join('/');
};

export const formatValue = (value, dataSourceKey) => {
  switch (dataSourceKey) {
    case DATA_SOURCE_AMOUNT:
      return formatAmount(value);
    case DATA_SOURCE_DATE:
      return formatDate(value);
    default:
      return value;
  }
};
