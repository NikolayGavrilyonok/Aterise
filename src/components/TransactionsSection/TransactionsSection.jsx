import React from 'react';
import PropTypes from 'prop-types';

const TransactionsSection = props => {
  const {children, sectionTitle, totalAmount} = props;

  return (
    <div>
      <h3>{sectionTitle}</h3>
      <p>{`Total: ${totalAmount}`}</p>
      {children && <div>{children}</div>}
    </div>
  );
};

TransactionsSection.propTypes = {
  sectionTitle: PropTypes.string,
  totalAmount: PropTypes.number
};

export default TransactionsSection;
