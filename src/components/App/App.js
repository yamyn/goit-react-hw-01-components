import React from 'react';
import Profile from '../Profile/Profile';
import styles from './App.module.css';
import { name, tag, location, avatar, stats } from '../../user.json';

export default function App() {
    return (
        <>
            <div className={styles.container}>
                <h1>goit-react-hw-01-components</h1>
                <Profile
                    name={name}
                    tag={tag}
                    location={location}
                    avatar={avatar}
                    stats={stats}
                />
            </div>
        </>
    );
}
