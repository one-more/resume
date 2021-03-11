import Section from "./components/Section";
import {H3} from "./components/Headings";
import JobDetails from "./components/JobDetails";
import List, {ListItem} from "./components/List";
import React from "react";

export const ExperienceAsk = () => {
    return <Section>
        <H3>Lead Frontend Developer</H3>
        <JobDetails>
            <b>Ask Applications</b>&nbsp;
            // July 2020 - March 2021
        </JobDetails>
        <List textSmall >
            <ListItem>
                Working closely with stack holders, devops and management
            </ListItem>
            <ListItem>
                Hosting knowledge transfer sessions
            </ListItem>
            <ListItem>
                Writing technical documentation
            </ListItem>
            <ListItem>
                Setting up CI/CD pipelines
            </ListItem>
            <ListItem>
                Designing app architecture
            </ListItem>
            <ListItem>
                Performing code review, solving conflincts
            </ListItem>
            <ListItem>
                Making code refactorings
            </ListItem>
            <ListItem>
                Implementing full pyramid of tests
            </ListItem>
            <ListItem>
                Delivering new features 
            </ListItem>
        </List>
    </Section>
}