import Section from "./components/Section";
import {H3} from "./components/Headings";
import JobDetails from "./components/JobDetails";
import List, {ListItem} from "./components/List";
import React from "react";
import {Project} from "./components/Project";

export const ExperienceSoftSwiss = () => {
    return <Section>
        <H3>Senior Frontend Developer</H3>
        <JobDetails>
            <b>SoftSwiss</b>&nbsp;
            // September 2019 - June 2020
        </JobDetails>
        <Project>
            <JobDetails>
                <div>
                    <i>
                        <b>Project: Payment gateway</b>
                    </i>
                </div>
                <div>
                    <i>
                        <b>Technologies used:</b>
                    </i>&nbsp;
                    Docker, TypeScript, React, Redux,
                    Puppeteer/jest-snapshot, Terraform
                </div>
                <br/>
                What was really challenging and enjoyable at the same time about
                this project was the fact that I started
                it from scratch by writing documentation
                and project requirements to allow efficient project management throughout
                all the stages of its lifecycle;
                creating app architecture and
                choosing technologies to meet all the standards that were set forth by
                the clients.
                I worked closely with backend to
                set up workflows, API specification and delivery unified
                docker based microservices.
            </JobDetails>
            <JobDetails>
                <b>Responsibilities:</b>
            </JobDetails>
            <List textSmall >
                <ListItem>
                    Successfully delivering MVP way before the deadline
                </ListItem>
                <ListItem>
                    Designing application from scratch
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
                    Delivering features
                </ListItem>
                <ListItem>
                    Writing tech documentation
                </ListItem>
            </List>
        </Project>
    </Section>
}