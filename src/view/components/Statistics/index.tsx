// Core
import React, { FC } from 'react';

// Material UI
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import RecommendIcon from '@mui/icons-material/Recommend';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import FmdBadIcon from '@mui/icons-material/FmdBad';
import StorageIcon from '@mui/icons-material/Storage';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

// Types
import { OptionsTypeInitialState } from '../../pages/Feedback/types';

type PropTypes = {
    options: OptionsTypeInitialState;
    total: number;
    positivePercentage: number;
};

export const Statistics: FC<PropTypes> = ({
    options,
    total,
    positivePercentage,
}) => {
    const { good, neutral, bad } = options;

    return (
        <Box sx = {{ width: '100%', maxWidth: 360 }}>
            <List>
                <ListItem
                    disablePadding
                    divider
                    sx = {{ marginBottom: '16px' }}>
                    <ListItemIcon>
                        <RecommendIcon
                            color = 'success'
                            fontSize = 'large'
                        />
                    </ListItemIcon>
                    <ListItemText primary = { `Good: ${good}` } />
                </ListItem>
                <ListItem
                    disablePadding
                    divider
                    sx = {{ marginBottom: '16px' }}>
                    <ListItemIcon>
                        <SentimentNeutralIcon
                            color = 'secondary'
                            fontSize = 'large'
                        />
                    </ListItemIcon>
                    <ListItemText primary = { `Neutral: ${neutral}` } />
                </ListItem>
                <ListItem
                    disablePadding
                    divider
                    sx = {{ marginBottom: '16px' }}>
                    <ListItemIcon>
                        <FmdBadIcon
                            color = 'error'
                            fontSize = 'large'
                        />
                    </ListItemIcon>
                    <ListItemText primary = { `Bad: ${bad}` } />
                </ListItem>
                <ListItem
                    disablePadding
                    divider
                    sx = {{ marginBottom: '16px' }}>
                    <ListItemIcon>
                        <StorageIcon fontSize = 'large' />
                    </ListItemIcon>
                    <ListItemText primary = { `Total: ${total}` } />
                </ListItem>
                <ListItem
                    disablePadding
                    divider>
                    <ListItemIcon>
                        <TrendingUpIcon fontSize = 'large' />
                    </ListItemIcon>
                    <ListItemText primary = { `Positive feedback: ${positivePercentage}%` } />
                </ListItem>
            </List>
        </Box>
    );
};
