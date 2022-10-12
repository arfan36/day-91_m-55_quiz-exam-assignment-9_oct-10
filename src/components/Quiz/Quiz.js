import React from 'react';

const Quiz = ({ quiz, index }) => {
    const { options, id, question, correctAnswer } = quiz;
    return (
        <div className='border mx-16 mb-10'>
            <h2>Quiz {index + 1}: {question}</h2>
            <div>


                
            </div>
        </div>
    );
};

export default Quiz;