import React from 'react';

const Quiz = ({ quiz }) => {
    console.log("🚀 ~ quiz", quiz)
    const { options, id, question, correctAnswer } = quiz;
    return (
        <div className='border'>
            <h2>this is quiz</h2>
        </div>
    );
};

export default Quiz;