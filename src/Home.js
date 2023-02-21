import React from 'react';
import NavBar from './components/NavBar';
import './styles/HomeStyle.css';
import Stay from './components/Stay';

const Home = () => {
    return (
        <div>
            <NavBar/>
            <div className='header'>
                <h1>Stays in Finland</h1>
                <p>12+ stays</p>
            </div>
            <Stay/>
        </div>
    );
};

export default Home;