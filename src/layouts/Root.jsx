import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Loading from '../components/spinner/Loading';

const Root = () => {
    const { loading } = useAuth();
    if (loading) {
        return <Loading />
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-screen pt-20'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;