// Core
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

// Tools
import { useSelector } from '../../tools/hooks';

// Redux
import { useTogglersRedux } from '../client/togglers';

// Api
import * as API from './api';

// Actions
import { daysActions } from './slice';

// Hooks
export const useDays = () => {
    const dispatch = useDispatch();
    const {
        togglersRedux: { isDaysFetching },
        setTogglerAction,
    } = useTogglersRedux();
    const days = useSelector(({ days, filter }) => {
        console.log(days);
        console.log(filter);

        const { isCloudy, isSunny, minTemp, maxTemp, isFiltered } = filter;

        if (isCloudy && days.length !== 0 && isFiltered) {
            return days.filter(({ type }) => type === 'cloudy');
        }

        if (isSunny && days.length !== 0 && isFiltered) {
            return days.filter(({ type }) => type === 'sunny');
        }

        if (minTemp !== 0 || maxTemp !== 0) {
            return days.filter(({ temperature }) => temperature >= minTemp && temperature <= maxTemp);
        }

        return days;
    });

    const fetchDaysAsync = async () => {
        setTogglerAction({
            type:  'isDaysFetching',
            value: true,
        });

        const result = await API.fetchDays();

        if (result !== null) {
            dispatch(daysActions.setDays(result));
        }

        setTogglerAction({
            type:  'isDaysFetching',
            value: false,
        });
    };

    useEffect(() => {
        fetchDaysAsync();
    }, []);

    return {
        days,
        isDaysFetching,
    };
};
