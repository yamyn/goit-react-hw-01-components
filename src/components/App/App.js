import React from 'react';
import styles from './App.module.css';

import user from '../../data/user.json';
import statistic from '../../data/statistical-data.json';
import friends from '../../data/friends.json';

import Profile from '../Profile/Profile';
import Statistic from '../Statistics/Statistics';
import FriendList from '../FriendList/FriendList';

export default function App() {
    return (
        <>
            <div className={styles.container}>
                <h1>goit-react-hw-01-components</h1>
                <section>
                    <Profile
                        name={user.name}
                        tag={user.tag}
                        location={user.location}
                        avatar={user.avatar}
                        stats={user.stats}
                    />
                </section>
                <section>
                    <Statistic title="UPLOAD STATS" stats={statistic} />
                </section>
                <section>
                    <FriendList friends={friends} />
                </section>
            </div>
        </>
    );
}
