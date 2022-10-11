import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();
    return (
        <div className='text-center'>
            <h1>Oh no! An Error Found!</h1>
            <br />
            {
                error && (
                    <div>
                        <p className='text-red-500'>
                            {error.statusText || error.message}
                        </p>
                        <p className='text-red-500 text-5xl'>
                            {error.status}
                        </p>
                    </div>
                )
            }
        </div>
    );
};

export default Error;