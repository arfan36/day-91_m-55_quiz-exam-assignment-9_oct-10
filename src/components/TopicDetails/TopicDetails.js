import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './TopicDetails.css';

const TopicDetails = () => {
    const topicDataLoader = useLoaderData().data;
    const questions = topicDataLoader['questions'];
    return (
        <div>
            <h3 className='text-3xl font-semibold text-center'>
                Quiz of {topicDataLoader.name}
            </h3>

            <div className="topic-container">
                <div className="quiz-container text-center">
                    {
                        questions.map((quiz, index) => <Quiz
                            key={quiz.id}
                            quiz={quiz}
                            index={index}
                        ></Quiz>)
                    }
                </div>
                <div>
                    Total Quiz: {questions.length}
                </div>
            </div>
        </div>
    );
};

export default TopicDetails;