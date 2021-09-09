// Core
import React, { FC, useState } from 'react';

// Styles
import { StyledAccordion, AccordionTitle, AccotdionItem, AccordionQuestion, AccordionAnswer } from './styles';

type PropTypes = {
    source: any;
    title?: string;
}

export const Accordion:FC<PropTypes> = ({ source, title = 'Accordion' }) => {
    const [{ selected, selectedIdx }, setState ] = useState({
        selected:    false,
        selectedIdx: null,
    });

    const toggle = (idx: any) => {
        setState(({ selected }) => ({
            selected:    !selected,
            selectedIdx: idx,
        }));
    };

    return (
        <StyledAccordion>
            <AccordionTitle>{title}</AccordionTitle>
            {source.map(({ question, answer }:any, idx:any) => (
                <AccotdionItem
                    key = { idx }
                    selected = { selected && selectedIdx === idx }>
                    <AccordionQuestion
                        selected = { selected && selectedIdx === idx }
                        onClick = { () => toggle(idx) }>
                        <span>{`${idx + 1}. ${question}`}</span>
                    </AccordionQuestion>
                    <AccordionAnswer selected = { selected && selectedIdx === idx }>{answer}</AccordionAnswer>
                </AccotdionItem>
            ))}
        </StyledAccordion>
    );
};
