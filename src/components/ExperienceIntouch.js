import React from 'react'
import Section from "./components/Section";
import {H3} from "./components/Headings";
import JobDetails from "./components/JobDetails";
import List, {ListItem} from "./components/List";

export const ExperienceInTouch = () => {
    return <Section>
        <H3>Senior Frontend Developer</H3>
        <JobDetails>
            <b>InTouchHealth</b>&nbsp;
            // September 2019 - February 2020
        </JobDetails>
        <List textSmall >
            <ListItem>
                Working in TeleHealth domain
            </ListItem>
            <ListItem>
                Improving performance of the application
            </ListItem>
            <ListItem>
                Designing architectural approaches to solve performance problems and to add new functionality
            </ListItem>
            <ListItem>
                Improving code coverage and setting up new code quality tools like backstop.js
            </ListItem>
            <ListItem>
                Participating in pair programming sessions and sharing knowledge with team members
            </ListItem>
            <ListItem>
                Participating in code review process and code quality improvement discussions
            </ListItem>
            <ListItem>
                Working with cutting edge technologies (React, TypeScript, Redux, Effector)
            </ListItem>
            <ListItem>
                Completing RnD activities
            </ListItem>
        </List>
    </Section>
}