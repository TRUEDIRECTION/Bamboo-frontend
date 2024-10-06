import React, { useState } from 'react';
import Icon from '@mdi/react';
import { mdiAlert, mdiDotsHorizontal, mdiEmailOutline, mdiHome, mdiMail, mdiMailbox, mdiMore, mdiShare, mdiStar, mdiUnfoldMoreHorizontal } from '@mdi/js';

const Post: React.FC = () => {

    const [isAbbreviated, setIsAbbreviated] = useState(true);

    return (
        <div className='w-96 bg-white rounded-[25px] border p-6 shadow-[0_4px_10px_1px_rgba(0,0,0,0.15)]'>
            <div className='flex flex-row items-center'>
                <div className='items-center mr-2 grow-0'>
                    <div className="h-10 w-10 bg-primary-color rounded-full"></div>
                </div>
                <div className='flex flex-col grow-0'> 
                    <span className='text-2xl font-bold'>UserName</span>
                    <span className='text-black/[.4]'>timestamp</span>
                </div>
                <div className='grow'>

                </div>
                <Icon className='grow-0' path={mdiDotsHorizontal} size="40px" color="black"></Icon>
            </div>
            
            <div className='mx-2'>
                <div>
                
                </div>
            </div>

            <div className='flex flex-row items-center justify-between'>
                <div className='flex flex-row bg-primary-color rounded-full p-2 items-center'>
                    <Icon path={mdiStar} size="24px"></Icon>
                    <span>Follow</span>
                </div>
                <div className='flex flex-row items-center'>
                    <Icon path={mdiEmailOutline} size="24px"></Icon>
                    <span>contact</span>
                </div>
                <div className='flex flex-row items-center'>
                    <Icon path={mdiShare} size="24px"></Icon>
                    <span>share</span>
                </div>
                <div className='flex flex-row items-center'>
                    <Icon path={mdiAlert} size="24px"></Icon>
                    <span>Follow</span>
                </div>
            </div>

        </div>
    );
};


export default Post;