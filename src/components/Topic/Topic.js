import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { id, name, logo, total } = topic;
    return (
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <img
                src={logo}
                className="object-contain border w-full h-64"
                alt=""
            />
            <div className="p-5 border border-t-0 leading-10">
                <h3 className='text-xl font-semibold'>
                    {name}
                </h3>
                <p>
                    Total Quiz: {total}
                </p>
                <Link to={`/topic/${id}`} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                    Start Practice
                </Link>
            </div>
        </div>
    );
};

export default Topic;