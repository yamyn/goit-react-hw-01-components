import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

function Profile({ name, avatar, tag, location, stats }) {
    const statsKeys = Object.keys(stats);

    return (
        <div className={styles.profile}>
            <div className={styles.description}>
                <img
                    src={avatar}
                    alt={`avatar of ${name}`}
                    className={styles.avatar}
                    width="100"
                    height="100"
                />
                <p className={styles.name}>{name}</p>
                <p className={styles.tagName}>@{tag}</p>
                <p className={styles.location}>{location}</p>
            </div>

            <ul className={styles.stats}>
                {statsKeys.map(key => (
                    <li key={stats[key]} className={styles.statsItem}>
                        <span className={styles.label}>{key}</span>
                        <span className={styles.quantity}>{stats[key]}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

Profile.propTypes = {
    tag: PropTypes.string,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired,
};

export default Profile;
