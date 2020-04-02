import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

import Transaction from './Transaction';

function TransactionHistory({ items }) {
    return (
        <table className={styles.transactionHistory}>
            <thead>
                <tr className={`${styles.row} ${styles.headrow}`}>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(({ type, id, amount, currency = 'USD' }, i) => (
                    <tr
                        key={id}
                        className={styles.row}
                        style={{
                            backgroundColor: `${
                                i % 2 === 1 ? '#fff' : '#ecf2f3'
                            } `,
                        }}
                    >
                        <Transaction
                            type={type}
                            amount={amount}
                            currency={currency}
                        />
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string,
        }),
    ).isRequired,
};

export default TransactionHistory;
