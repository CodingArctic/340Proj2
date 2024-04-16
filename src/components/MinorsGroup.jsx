import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function AccordionExpandIcon({ data }) {
    return (
        <div className='accordionList'>
            {data.map((d) =>
                <Accordion key={d.name}>
                    <AccordionSummary
                        expandIcon={<ArrowDownwardIcon />}
                        aria-controls="panel-content"
                        id="panel-header"
                    >
                        <h2>{d.title + " (" + d.name + ")"}</h2>
                    </AccordionSummary>
                    <AccordionDetails>

                        <h3>Description:</h3><div>{d.description}</div>
                        <h3>Courses:</h3>
                        <ul>
                            {d.courses.map((c) => <li key={c}>{c}</li>)}
                        </ul>
                        {/* conditional rendering - only some minors have notes so we check first */}
                        {d.note ? (<><h3>Note:</h3><div>{d.note}</div></>) : null}

                    </AccordionDetails>
                </Accordion>
            )}
        </div>
    );
}
