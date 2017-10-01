import React from 'react'
import {H3} from './components/Headings'
import Section from './components/Section'
import JobDetails from './components/JobDetails'
import List, {ListItem} from './components/List'

export default function () {
    return (
        <Section>
            <H3>Senior Frontend Developer</H3>
            <JobDetails>
                <b>EPAM Systems</b>&nbsp;
                // November 2016 - present
            </JobDetails>
            <List textSmall >
                <ListItem>
                    Heading team of frontend developers. Delivering tasks.
                    Conducting code review. Maintaining code quality.
                    Taking responsibility of releasing features.
                </ListItem>
            </List>
        </Section>
    )
}
