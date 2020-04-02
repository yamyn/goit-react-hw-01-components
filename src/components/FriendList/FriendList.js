import React from 'react';
import PropTypes from 'prop-types';
import styles from './/FriendList.module.css';

import FriendListItem from './FriendListItem';

function FriendList({ friends }) {
    return (
        <ul className={styles.friendList}>
            {friends.map(({ id, name, avatar, isOnline }, i) => (
                <li key={id} className={styles.item}>
                    <FriendListItem
                        name={name}
                        avatar={avatar}
                        isOnline={isOnline}
                    />
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
            isOnline: PropTypes.bool,
        }),
    ).isRequired,
};

export default FriendList;
