import React from 'react';
import Navbar from './Navbar';
import Cards from '../cards/Cards';
import Link from 'next/link';

const HomePage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex w-full justify-center'>
                <Link
                href={"/addTopic"}
                className='btn btn-success btn-sm mt-5'>
                    Add
                </Link>
            </div>
            <div className='m-7 w-screen h-screen'>
                <Cards></Cards>
            </div>
        </div>
    );
};

export default HomePage;