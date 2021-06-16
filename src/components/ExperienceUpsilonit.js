import Section from "./components/Section";
import {H3} from "./components/Headings";
import JobDetails from "./components/JobDetails";
import List, {ListItem} from "./components/List";
import React from "react";
import {Project} from "./components/Project";

export const ExperienceUpsilonit = () => {
    return <Section>
        <H3>Head of the frontend department</H3>
        <JobDetails>
            <b>Upsilon IT</b>&nbsp;
            // January 2021 - Now
        </JobDetails>
        <Project>
            <JobDetails>
                <div>
                    <i>
                        <b>Project: LiveArt NFT</b>
                    </i>
                </div>
                <div>
                    <i>
                        <b>Technologies used:</b>
                    </i>&nbsp;
                    Nodejs, AWS, Solidity, TypeScript, Python, PostgreSQL,
                    Docker, Cypress, Nextjs, React, Redux
                </div>
                <br/>
                Being successful in this role included being confident managing teams
                while, at the same time, setting goals, budgets and timelines for
                various projects. I was expected to be in charge of all integrations
                with external partners as well as overseeing all software
                development plans from ideation to execution. It was mandatory to make
                sure to use innovative technologies that maximize productivity
                and reinforce and optimize existing codebase.
            </JobDetails>
            <JobDetails>
                <b>Responsibilities:</b>
            </JobDetails>
            <List textSmall >
                <ListItem>
                    Monitor frontend and backend teams and their projects
                </ListItem>
                <ListItem>
                    Oversee reliability and performance of all internal systems
                    to suggest and implement improvements
                </ListItem>
                <ListItem>
                    Security regulations compliance enforcement and implementation
                </ListItem>
                <ListItem>
                    Setting goals, requirements and timelines to manage software development
                    projects efficiently
                </ListItem>
                <ListItem>
                    Design strategies and architecture for future development projects
                    based on the company's goals and financial capabilities
                </ListItem>
                <ListItem>
                    Hire engineers and coordinate their training
                </ListItem>
                <ListItem>
                    Coordinate with stakeholders for new integrations ideas and tools
                </ListItem>
            </List>
        </Project>
    </Section>
}