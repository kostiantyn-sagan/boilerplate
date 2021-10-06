// Core
import React, { FC } from 'react';

// Styles
import * as S from './styles';

// Types
import { OptionsTypeInitialState } from '../../pages/Feedback';

type PropTypes = {
    options: OptionsTypeInitialState;
    total: number;
    positivePercentage: number;
};

export const Statistics: FC<PropTypes> = ({ options, total, positivePercentage }) => {
    const { good, neutral, bad }  = options;

    return (
        <S.StyledStatistics>
            <S.StatisticsItem>
                <S.Text>{`Good: ${good}`}</S.Text>
            </S.StatisticsItem>
            <S.StatisticsItem>
                <S.Text>{`Neutral: ${neutral}`}</S.Text>
            </S.StatisticsItem>
            <S.StatisticsItem>
                <S.Text>{`Bad: ${bad}`}</S.Text>
            </S.StatisticsItem>
            <S.StatisticsItem>
                <S.Text>{`Total: ${total}`}</S.Text>
            </S.StatisticsItem>
            <S.StatisticsItem>
                <S.Text>{`Positive feedback: ${positivePercentage}%`}</S.Text>
            </S.StatisticsItem>
        </S.StyledStatistics>
    );
};

