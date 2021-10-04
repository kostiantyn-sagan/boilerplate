// Tools
import { ControlledError } from '../../../../tools/utils';

// Tools
import { API_URL } from '../../../../init/constants';

// Types
import { FetchDaysContract } from './types';

export const fetchDays: FetchDaysContract = async () => {
    const response = await fetch(API_URL, {
        method:  'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.status !== 200) {
        throw new ControlledError({
            message:    'fetchDays failed',
            statusCode: response.status,
            data:       {
                test: '123',
            },
        });
    }

    const { data } = await response.json();

    return data;
};
