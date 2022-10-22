import React, { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';
import Header from '../Header/Header';

const About = () => {
    const {user} = useContext(AuthContext)
    // const {user} = useContext(AuthContext)
    return (
        <div>
            <Header></Header>
            <h3>About User {user?.email}</h3>
        </div>
    );
};

export default About;