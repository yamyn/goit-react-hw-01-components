import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function StatItem({ label, percentage }) {
    return (
        <>
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}</span>
        </>
    );
}

StatItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};

export default StatItem;
