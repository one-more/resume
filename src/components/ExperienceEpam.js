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
                    Slow and inefficient system performance was fixed through
                    implementation of various metrics which improved overall performance by 60%.
                </ListItem>
                <ListItem>
                    Introduced and championed use of improved development cycles and testing.
                </ListItem>
                <ListItem>
                    Improved quality and reduced development costs by writing high-efficiency solutions as well
                    as rewriting and optimizing code written with usage of obsolete and non optimal technologies.
                </ListItem>
                <ListItem>
                    Created architecture for large SPA
                </ListItem>
                <ListItem>
                    Integrated multiple teams into single SPA
                </ListItem>
                <ListItem>
                    Leading FrontEnd team
                </ListItem>
                <ListItem>
                    Assigning tasks to team members
                </ListItem>
                <ListItem>
                    Leading role in releasing market ready new products
                </ListItem>
                <ListItem>
                    Communication and mentoring on different levels throughout all stages of development
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
                <ListItem>
                    Conducted interview processes with applicants of different level
                </ListItem>
            </List>
        </Section>
    )
}
