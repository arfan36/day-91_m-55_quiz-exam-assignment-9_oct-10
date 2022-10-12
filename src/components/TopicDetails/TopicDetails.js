import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const TopicDetails = () => {
    const topicDataLoader = useLoaderData().data;
    const question = topicDataLoader['questions'];
    return (
        <div>
            <h3 className='text-3xl font-semibold text-center'>
                Quiz of {topicDataLoader.name}
            </h3>

            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-8 lg:grid-cols-1 sm:max-w-sm sm:mx-auto lg:max-w-md">


                    {
                        question.map(quiz => <Quiz
                            key={quiz.id}
                            quiz={quiz}
                        ></Quiz>)
                    }

                </div>
            </div>


        </div>
    );
};

export default TopicDetails;