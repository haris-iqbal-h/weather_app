import React from 'react'
import {
    BsEye,
    BsWater,
    BsThermometer,
    BsWind,
} from 'react-icons/bs';

import { TbTemperatureCelsius } from 'react-icons/tb';

const Card = ({date,data,icon}) => {
    return (
        <>
            <div>
            {/* card top */}
            <div className='flex items-center gap-x-5'>
              {/* icon */}
                <div className='text-[87px]'>{icon}</div>
                <div>
                {/* country name */}
                <div className='text-2xl font-semibold'>
                    {data.name}, {data.sys.country}
                </div>
                {/* date */}
                <div>
                    {date.getUTCDate()}/{date.getUTCMonth() + 1}/
                    {date.getUTCFullYear()}
                </div>
            </div>
            </div>
            {/* card body */}
                <div className='my-20'>
                <div className='flex justify-center items-center'>
                    {/* temp */}
                    <div className='text-[144px] leading-none font-light'>
                    {parseInt(data.main.temp)}
                    </div>
                    {/* celsius icon */}
                    <div className='text-4xl'>
                    <TbTemperatureCelsius />
                    </div>
                </div>
                {/* weather description */}
                <div className='capitalize text-center'>
                    {data.weather[0].description}
                </div>
                </div>
                {/* card bottom */}
                <div className='max-w-[378px] mx-auto flex flex-col gap-y-6'>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-x-2'>
                    {/* icon */}
                    <div className='text-[20px]'>
                        <BsEye />
                    </div>
                    <div>
                        Visibility{' '}
                        <span className='ml-2'>{data.visibility / 1000} km</span>
                    </div>
                    </div>
                    <div className='flex items-center gap-x-2'>
                    {/* icon */}
                    <div className='text-[20px]'>
                        <BsThermometer />
                    </div>
                    <div className='flex'>
                        Feels like
                        <div className='flex ml-2'>
                        {parseInt(data.main.feels_like)}
                        <TbTemperatureCelsius />
                        </div>
                    </div>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-x-2'>
                    {/* icon */}
                    <div className='text-[20px]'>
                        <BsWater />
                    </div>
                    <div>
                        Humidity
                        <span className='ml-2'>{data.main.humidity} %</span>
                    </div>
                    </div>
                    <div className='flex items-center gap-x-2'>
                    {/* icon */}
                    <div className='text-[20px]'>
                        <BsWind />
                    </div>
                    <div>
                        Wind <span className='ml-2'>{data.wind.speed} m/s</span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Card