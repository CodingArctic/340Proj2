import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function AccordionExpandIcon({ degreeGroup }) {
    return (
        <div className='accordionList'>
            {degreeGroup.map((d) =>
                <Accordion key={d.degreeName}>
                    <AccordionSummary
                        expandIcon={<ArrowDownwardIcon />}
                        aria-controls="panel-content"
                        id="panel-header"
                    >
                        {/*if there's no title, use title for advanced certificates*/}
                        {d.title ? (<h2>{d.title + " (" + d.degreeName.toUpperCase() + ")"}</h2>) : <h2>Advanced Certificates</h2>} 
                    </AccordionSummary>
                    <AccordionDetails>
                        {d.description ? (<><h3>Short Description:</h3><div>{d.description}</div></> ) : null}
                        {d.concentrations ? (
                            <><h3>Concentrations:</h3>
                                <ul>
                                    {d.concentrations.map((c) => <li key={c}>{c}</li>)}
                                </ul>
                            </>)
                            : null}
                        {d.availableCertificates ? (
                            <><h3>Certificates:</h3>
                                <ul>
                                    {d.availableCertificates.map((c) => <li key={c}>{c}</li>)}
                                </ul>
                            </>)
                            : null}

                    </AccordionDetails>
                </Accordion>
            )}
        </div>
    );
}
