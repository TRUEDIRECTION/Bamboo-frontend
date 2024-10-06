import React from "react";

interface SpotSetting {
    size: number;
    left: number;
    top: number;
}

const OrangeSpot: React.FC<SpotSetting> = (props) => {

    const {size, left, top} = props;

    return (
        <div className={`absolute ${left >= 0 ? `ml-[${left}rem]` : `-ml-[${Math.abs(left)}rem]`} ${top >= 0 ? `mt-[${top}rem]` : `-mt-[${Math.abs(top)}rem]`} w-[${size}rem] h-[${size}rem] rounded-full`} style={{ background: 'radial-gradient(circle, #FF8A00, transparent 70%)' }}></div>
    );
};

export default OrangeSpot;