import React from 'react';

interface CardProps {
    title: string;
    content: string;
}

const Card: React.FC<CardProps> = ({title,content}) => {
    return (
        <div className="bg-white p-6 rounded-[25px] w-64 shadow-[0_4px_8px_2px_rgba(0,0,0,0.15)]">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-4">{content}</p>
        </div>
    );
};



export default Card;