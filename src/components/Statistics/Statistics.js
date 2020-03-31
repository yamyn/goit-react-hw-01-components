import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const statsBGColors = ['#4fc4f6', '#a33bf1', '#e64c65', '#21b7c5', '#00ff00'];

function Statistics({ title, stats }) {
    const ItemStyle = {
        flex: `${stats.length <= 5 ? 100 / stats.length : 100 / 5}%`,
    };
    return (
        <div className={styles.statistics}>
            {title && <h2 className={styles.title}>{title}</h2>}
            <ul className={styles.statList}>
                {stats.map((stat, i) => (
                    <li
                        className={styles.item}
                        key={stat.id}
                        style={{
                            ...ItemStyle,
                            backgroundColor: `${
                                statsBGColors[i]
                                    ? statsBGColors[i]
                                    : statsBGColors[i - statsBGColors.length]
                            }`,
                        }}
                    >
                        <span className={styles.label}>{stat.label}</span>
                        <span className={styles.percentage}>
                            {stat.percentage}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }),
    ).isRequired,
};

export default Statistics;
