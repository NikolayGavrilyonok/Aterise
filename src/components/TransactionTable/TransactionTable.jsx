import React from 'react';
import PropTypes from 'prop-types';
import {STYLES} from '../../constants/constants';
import {formatValue} from '../../utils/format';

const TransactionTable = props => {
  const {data, headers} = props;

  const renderCells = cellData => headers.map((item, index) => {
    const {dataSourceKey} = item;
    const value = formatValue(cellData[dataSourceKey], dataSourceKey);

    return <td style={STYLES} key={index}>{value}</td>;
  });

  if (!data.length) return <span>{'No transactions'}</span>;

  return (
    <table style={STYLES}>
      <thead>
        <tr>
          {headers.map(({headerTitle}, i) => <th key={i}>{headerTitle}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((item, i) => <tr key={i}>{renderCells(item)}</tr>)}
      </tbody>
    </table>
  );
};

TransactionTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    amount: PropTypes.number,
    category: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string
  })),
  headers: PropTypes.arrayOf(PropTypes.shape({
    dataSourceKey: PropTypes.string,
    headerTitle: PropTypes.string
  }))
};

export default TransactionTable;
