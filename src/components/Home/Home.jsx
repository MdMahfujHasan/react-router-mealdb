/* eslint-disable */
import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const Home = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Header></Header>
            {navigation.state === "loading" && <Spinner></Spinner>}
            <Outlet></Outlet>
        </div>
    );
};

export default Home;