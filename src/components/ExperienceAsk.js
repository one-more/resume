import Section from "./components/Section";
import {H3} from "./components/Headings";
import JobDetails from "./components/JobDetails";
import List, {ListItem} from "./components/List";
import React from "react";
import {Project} from "./components/Project";

export const ExperienceAsk = () => {
    return <Section>
        <H3>Lead Frontend Developer</H3>
        <JobDetails>
            <b>Ask Applications</b>&nbsp;
            // July 2020 - January 2021
        </JobDetails>
        <Project>
            <JobDetails>
                <div>
                    <i>
                        <b>Project: WYSIWYG Page Editor</b>
                    </i>
                </div>
                <div>
                    <i>
                        <b>Technologies used:</b>
                    </i>&nbsp;
                    Nodejs, Express, Docker, TypeScript, React, Redux,
                    Puppeteer/jest-snapshot
                </div>
                <br/>
                I joined this project to speed up product development and
                MVP delivery to internal company users (designers) as well as
                designing project completion stages and turning it into the new
                company revenue stream. I started with quality
                ensuring pipelines processes and redesigning most critical architectural
                parts to improve overall application stability and performance.
                It resulted in faster feature delivery and smooth team extending processes
                which made our stakeholders very happy.
            </JobDetails>
            <JobDetails>
                <b>Responsibilities:</b>
            </JobDetails>
            <List textSmall >
                <ListItem>
                    Working closely with stakeholders, devops and management
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
                    Writing micro-services in nodejs
                </ListItem>
                <ListItem>
                    Performing code review, solving conflicts
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
        </Project>
    </Section>
}