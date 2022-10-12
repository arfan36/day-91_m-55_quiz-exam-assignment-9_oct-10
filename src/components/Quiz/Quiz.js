import React, { useState } from 'react';
import { Radio } from "@material-tailwind/react";
import { EyeIcon } from '@heroicons/react/24/solid';

const Quiz = ({ quiz, index }) => {
    const [answer, setAnswer] = useState();
    const [open, setOpen] = useState(false);
    const { options, question, correctAnswer } = quiz;
    return (
        <div className='border mx-5 mb-10'>
            <div className='flex justify-between'>
                <div className=''>
                    <h2>Quiz {index + 1}: {question}</h2>
                    {
                        open && <p className='text-orange-600 font-semibold text-2xl'>{correctAnswer}</p>
                    }
                </div>
                <div onClick={() => setOpen(!open)} className='w-8'>
                    <EyeIcon></EyeIcon>
                </div>
            </div>

            <hr />
            <div className="flex flex-col gap-7 items-center mt-4">
                <Radio id={options[0]} name="type" label={options[0]} onChange={e => setAnswer(e.target.id)} />
                <Radio id={options[1]} name="type" label={options[1]} onChange={e => setAnswer(e.target.id)} />
                <Radio id={options[2]} name="type" label={options[2]} onChange={e => setAnswer(e.target.id)} />
                <Radio id={options[3]} name="type" label={options[3]} onChange={e => setAnswer(e.target.id)} />
            </div>
            <hr />
            <h2 className='text-orange-600 font-semibold text-2xl'>
                {
                    correctAnswer === answer ? 'correct' : undefined
                }
            </h2>
        </div>
    );
};

export default Quiz;