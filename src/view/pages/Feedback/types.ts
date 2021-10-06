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
