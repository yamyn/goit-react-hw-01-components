import React from 'react';
import PropTypes from 'prop-types';

function Transaction({ type, amount, currency }) {
    return (
        <>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </>
    );
}

Transaction.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
};

export default Transaction;
