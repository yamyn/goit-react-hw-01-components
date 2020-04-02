import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

function ProfileStat({ avatar, name, isOnline }) {
    return (
        <>
            <span
                className={styles.status}
                style={{
                    backgroundColor: `${isOnline ? '#008000' : '#ff0000'}`,
                }}
            ></span>
            <img
                className={styles.avatar}
                src={avatar}
                alt={`avatar of ${name}`}
                width="48"
            />
            <p className={styles.name}>{name}</p>
        </>
    );
}

ProfileStat.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool,
};

export default ProfileStat;
