import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {CONFIG_TRANSACTIONS_TABLE_HEADERS} from '../constants/constants';
import {getTotalTransactionsAmount, mapTransactions} from '../utils/utils';
import TransactionsSection from '../components/TransactionsSection/TransactionsSection';
import TransactionTable from '../components/TransactionTable/TransactionTable';

const App = props => {
  const [data, mapData] = useState([]);

  useEffect(() => mapData(mapTransactions(props.data)));

  return (
    <div>
      {
        data.map((item, index) => (
          <TransactionsSection
            key={index}
            sectionTitle={item.sectionTitle}
            totalAmount={getTotalTransactionsAmount(item.data)}
          >
            <TransactionTable
              data={item.data}
              headers={CONFIG_TRANSACTIONS_TABLE_HEADERS}
            />
          </TransactionsSection>
        ))
      }
    </div>
  );
};

App.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    amount: PropTypes.number,
    category: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string
  }))
};

export default App;
