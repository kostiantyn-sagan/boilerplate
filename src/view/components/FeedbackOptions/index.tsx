// Core
import React, { FC } from 'react';
import { Button, Box } from '@mui/material';

// Types
import { Options, onLeaveFeedbackContract } from '../../pages/Feedback/types';

type PropTypes = {
    options: Options;
    onLeaveFeedback: onLeaveFeedbackContract;
};

const selectOptionColor = (option: string) => {
    if (option === 'good') {
        return 'success';
    }

    if (option === 'neutral') {
        return 'secondary';
    }

    return 'error';
};

export const FeedbackOptions: FC<PropTypes> = ({
    options,
    onLeaveFeedback,
}) => (
    <Box>
        {options.map((option) => (
            <Button
                color = { selectOptionColor(option) }
                key = { option }
                size = 'large'
                sx = {{ marginRight: '16px' }}
                variant = 'contained'
                onClick = { () => onLeaveFeedback(option) }>
                {option}
            </Button>
        ))}
    </Box>
);
