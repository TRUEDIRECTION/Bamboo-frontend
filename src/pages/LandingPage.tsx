import React from 'react';
import Post from '../components/Post';
import Card from '../components/LandingPage/Card';
import NavigationBar from '../components/NavigationBar';
import OrangeSpot from '../components/LandingPage/OrangeSpot';

const LandingPage: React.FC = () => {
    return (
        <div className='flex flex-col items-center h-full'>
            <NavigationBar></NavigationBar>
            <OrangeSpot size={48} left={-96} top={-16}></OrangeSpot>
            {/* <OrangeSpot size={48} left={-96} top={-16}></OrangeSpot> */}
            {/* <OrangeSpot size={48} left={96} top={16}></OrangeSpot> */}

            <div className='flex flex-col items-center py-40'>
                <div className='text-center pb-8'>
                    <h1 className="text-4xl font-bold py-2">Offical Slogan</h1>
                    <h2 className="text-2xl text-[rgb(150,150,150)]">Secondary Introduction</h2>
                </div>
                <button className="px-4 py-2 bg-primary-color text-center text-white font-bold rounded-full shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">Join Waitlist</button>
            </div>


            <div className="flex flex-col justify-around py-20">
                <div className='-ml-[16rem]' style={{ transform: 'rotate(-11deg)' }}>
                <Post></Post>
                </div>
                <div style={{ transform: 'rotate(4deg)' }}>
                <Post></Post>
                </div>
                <div style={{ transform: 'rotate(-2deg)' }}>
                <Post></Post>
                </div>
            </div>


            <div className="py-20 text-center">
                <h2 className="text-3xl font-bold">Why XXX is a good choice for you</h2>
                <p className="mt-4 text-[rgb(150,150,150)]">Simple, Safe & Reliable</p>
                <div className="flex justify-center space-x-10 mt-10">
                    
                    <Card title="Defeat1" content="User base is too complicated. Hard to find new friends."></Card>
                    
                    <Card title="Defeat2" content="User base is too complicated. Hard to find new friends."></Card>

                    <Card title="Defeat3" content="User base is too complicated. Hard to find new friends."></Card>
                </div>
            </div>

            <div className='py-16'>
                <h2 className="text-3xl font-bold">Where to Start ?</h2>

                <div className='flex'>
                    <div ></div>
                </div>
                <div>
                    
                </div>
                <div>

                </div>
            </div>

            <div className='w-full pt-16 pb-24 bg-[rgb(246,249,252)] flex flex-col items-center'>
                <div className="text-center pb-12">
                    <h1 className="text-4xl font-bold pb-2">Ready to find your match ?</h1>
                    <h2 className="text-2xl text-[rgb(150,150,150)]">Comming Soon ...</h2>
                </div>
                <button className="px-4 py-2 bg-white text-center text-primary-color font-bold rounded-full shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">Join Waitlist</button>
            </div>

        </div>
    );
};

export default LandingPage;