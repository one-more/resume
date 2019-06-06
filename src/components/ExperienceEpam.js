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
                // November 2016 - November 2017
            </JobDetails>
            <List textSmall >
                <ListItem>
                    Took part in creating architecture for large SPA
                </ListItem>
                <ListItem>
                    Worked on solution to integrate multiple teams into single SPA
                </ListItem>
                <ListItem>
                    Leading FrontEnd team
                </ListItem>
                <ListItem>
                    Delivering tasks between team members
                </ListItem>
                <ListItem>
                    Starting new products
                </ListItem>
                <ListItem>
                    Communication between teams
                </ListItem>
                <ListItem>
                    Creating feature architecture based on module interfaces
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
