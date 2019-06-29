import {
  DAY_CURRENT_MONTH,
  DAY_LAST_MONTH,
  DAY_LAST_WEEK,
  DAY_OTHER_MONTH
} from '../constants/constants';
import {getDateISO, getRandomInteger} from '../utils/utils';

const buildMockData = (numberOfRecords = getRandomInteger(50, 150)) => {
  let result = [];

  for (let i = 0; i < numberOfRecords; i++) {
    const constraintFirst = getRandomInteger(-100000, 100000);
    const constraintSecond = getRandomInteger(-100000, 100000);
    const arrayOfDays = [
      '',
      DAY_LAST_WEEK,
      DAY_CURRENT_MONTH,
      DAY_LAST_MONTH,
      DAY_OTHER_MONTH
    ];

    if (constraintFirst > constraintSecond) {
      [constraintFirst, constraintSecond] = [constraintFirst, constraintSecond];
    }

    result.push(
      {
        amount: getRandomInteger(constraintFirst, constraintSecond),
        category: `category ${getRandomInteger(1, 5)}`,
        date: getDateISO(arrayOfDays[getRandomInteger(0, 4)]),
        description: `description ${getRandomInteger(1, 5)}`,
        title: `title ${getRandomInteger(1, 100)}`
      }
    );
  }

  return result;
};

export const mockData = buildMockData();
