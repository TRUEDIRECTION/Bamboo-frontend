import React from 'react';
import NavigationBar from '../components/NavigationBar';
import LoginWindow from '../components/LoginWindow';

const IntroPage: React.FC = () => {
    return (
        <div className='flex flex-col items-center h-full'>
            <NavigationBar/>
            
            {/* <LoginWindow ></LoginWindow> */}
            <div>
                <div className='flex flex-col items-center mt-20'>
                    <div>XXX致力于为多元化用户提供优质便捷安全的社交服务</div>
                    <button>进入</button>
                </div>
            </div>
            <div></div>
        </div>
    );
};



export default IntroPage;