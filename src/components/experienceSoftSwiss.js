import Section from "./components/Section";
import {H3} from "./components/Headings";
import JobDetails from "./components/JobDetails";
import List, {ListItem} from "./components/List";
import React from "react";

export const ExperienceSoftSwiss = () => {
    return <Section>
        <H3>Senior Frontend Developer</H3>
        <JobDetails>
            <b>SoftSwiss</b>&nbsp;
            // March 2020 - June 2020
        </JobDetails>
        <List textSmall >
            <ListItem>
                Designing Frontend application from scratch
            </ListItem>
            <ListItem>
                Implementing micro-frontends design
            </ListItem>
            <ListItem>
                Implementing feature-first code organization
            </ListItem>
            <ListItem>
                Choosing application tech stack (React + Redux + TypeScript)
            </ListItem>
            <ListItem>
                Implementing full pyramid of tests (Unit, Integration, Mutation, Visual, e2e)
            </ListItem>
            <ListItem>
                Configuring CI (gitlab) + CD (nginx docker image)
            </ListItem>
            <ListItem>
                Developing features
            </ListItem>
            <ListItem>
                Writing tech documentation
            </ListItem>
        </List>
    </Section>
}