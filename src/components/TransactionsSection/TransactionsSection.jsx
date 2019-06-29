import React from 'react';
import PropTypes from 'prop-types';

const TransactionsSection = props => {
  const {children, sectionTitle, totalAmount} = props;

  return (
    <div>
      <h3>{sectionTitle}</h3>
      {totalAmount && <p>{`Total: ${totalAmount}`}</p>}
      {children && <div>{children}</div>}
    </div>
  );
};

TransactionsSection.propTypes = {
  sectionTitle: PropTypes.string,
  totalAmount: PropTypes.string
};

export default TransactionsSection;
