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
                    Participation in archectural tasks
                </ListItem>
                <ListItem>
                    Delivering tasks between team members
                </ListItem>
                <ListItem>
                    Conducting code review and maintaining code quality
                </ListItem>
                <ListItem>
                    Starting new stream
                </ListItem>
                <ListItem>
                    Communication between teams
                </ListItem>
                <ListItem>
                    Participation in creating large-scale SPA architecure
                </ListItem>
                <ListItem>
                    Developing application code base "from scratch"
                </ListItem>
                <ListItem>
                    Conducting code review and maintaining code quality
                </ListItem>
            </List>
        </Section>
    )
}
