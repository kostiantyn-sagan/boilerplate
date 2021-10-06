// Core
import React, { useState } from 'react';
import Button from '@mui/material/Button';

// Components
import { FeedbackOptions, Statistics } from '../../components';

// Elements
import { Section, Notification } from '../../elements';
// import FeedbackOptions from './components/FeedbackOptions';
// import Statistics from './components/Statistics';
// import Notification from './components/Notification';

// Types

export type Option = 'good' | 'neutral' | 'bad';

export type Options = Array<Option>;

export type onLeaveFeedbackContract = (option: Option) => void;

export type countTotalFeedbackContract = (
    good: number,
    neutral: number,
    bad: number
) => number;

export type countPositiveFeedbackPercentageContract = (
    positveFeedback: number,
    total: number
) => number;

export type OptionsTypeInitialState = {
    good: number;
    neutral: number;
    bad: number;
};

export const optionsTypeInitialState: OptionsTypeInitialState = {
    good:    0,
    neutral: 0,
    bad:     0,
};

const Feedback = () => {
    const [ options, setOptionsState ] = useState<OptionsTypeInitialState>(
        optionsTypeInitialState,
    );

    const onLeaveFeedback: onLeaveFeedbackContract = (option) => void setOptionsState((prevState) => ({
        ...prevState,
        [ option ]: prevState[ option ] as number + 1,
    }));

    const countTotalFeedback: countTotalFeedbackContract = (...feedbacks) => {
        return feedbacks.reduce((total, feedback) => total + feedback, 0);
    };

    const countPositiveFeedbackPercentage: countPositiveFeedbackPercentageContract
    = (positveFeedback, total) => {
        return total === 0 ? 100 : Math.round((positveFeedback * 100) / total);
    };

    return (
        <>
            <Button variant = 'text'>Text</Button>
            <Button variant = 'contained'>Contained</Button>
            <Section title = 'Please leave feedback'>
                <FeedbackOptions
                    options = { Object.keys(options) as Options }
                    onLeaveFeedback = { onLeaveFeedback }
                />
            </Section>
            <Section title = 'Statistics'>
                {options.good || options.neutral || options.bad ? (
                    <Statistics
                        options = { options }
                        positivePercentage = { countPositiveFeedbackPercentage(
                            options.good,
                            countTotalFeedback(options.good, options.neutral, options.bad),
                        ) }
                        total = { countTotalFeedback(
                            options.good,
                            options.neutral,
                            options.bad,
                        ) }
                    />
                ) : (
                    <Notification>No feedback given</Notification>
                )}
            </Section>
        </>
    );
};

export default Feedback;
