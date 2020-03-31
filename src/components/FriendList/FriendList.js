import React from 'react';
import PropTypes from 'prop-types';
import styles from './/FriendList.module.css';

function FriendList({ friends }) {
    return (
        <ul className={styles.friendList}>
            {friends.map(({ id, name, avatar, isOnline }, i) => (
                <li key={id} className={styles.item}>
                    <span
                        className={styles.status}
                        style={{
                            backgroundColor: `${
                                isOnline ? '#008000' : '#ff0000'
                            }`,
                        }}
                    ></span>
                    <img
                        className={styles.avatar}
                        src={avatar}
                        alt={`avatar of ${name}`}
                        width="48"
                    />
                    <p className={styles.name}>{name}</p>
                </li>
            ))}
        </ul>
    );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        }),
    ).isRequired,
};

export default FriendList;
