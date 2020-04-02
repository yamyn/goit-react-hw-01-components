import React from 'react';
import PropTypes from 'prop-types';
import { label, quantity } from './Profile.module.css';

function ProfileStat({ stats, statKey }) {
    return (
        <>
            <span className={label}>{statKey}</span>
            <span className={quantity}>{stats[statKey]}</span>
        </>
    );
}

ProfileStat.propTypes = {
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired,
    statKey: PropTypes.string.isRequired,
};

export default ProfileStat;
