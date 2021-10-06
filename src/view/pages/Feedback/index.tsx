// Core
import React, { useState } from 'react';

// Material Ui
import { Box } from '@mui/material';

// Components
import { FeedbackOptions, Statistics } from '../../components';

// Elements
import { Section, Notification } from '../../elements';

// Types & initialState
import * as T from './types';

const Feedback = () => {
    const [ options, setOptionsState ] = useState<T.OptionsTypeInitialState>(
        T.optionsTypeInitialState,
    );

    const onLeaveFeedback: T.onLeaveFeedbackContract = (option) => setOptionsState((prevState) => ({
        ...prevState,
        [ option ]: prevState[ option ] + 1,
    }));

    const countTotalFeedback: T.countTotalFeedbackContract = (...feedbacks) => {
        return feedbacks.reduce((total, feedback) => total + feedback, 0);
    };

    const countPositiveFeedbackPercentage: T.countPositiveFeedbackPercentageContract
    = (positveFeedback, total) => total === 0 ? 100 : Math.round((positveFeedback * 100) / total);

    return (
        <Box
            pt = '60px'
            sx = {{ textAlign: 'center' }}>
            <Section title = 'Please leave feedback'>
                <FeedbackOptions
                    options = { Object.keys(options) as T.Options }
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
        </Box>
    );
};

export default Feedback;
