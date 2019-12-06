import React from 'react'
import {H3} from './components/Headings'
import Section from './components/Section'
import JobDetails from './components/JobDetails'
import List, {ListItem} from './components/List'

export default function () {
    return (
        <Section>
            <H3>Senior Frontend Engineer</H3>
            <JobDetails>
                <b>Severex LTD</b>&nbsp;
                // November 2017 - September 2019
            </JobDetails>
            <List textSmall >
                <ListItem>
                    Developed Python Ajax web server to provide visualization tool for trading system.
                </ListItem>
                <ListItem>
                    Maintaining old codebase and developing new features
                </ListItem>
                <ListItem>
                    Migrating codebase from aurelia + gulp to react/redux + webpack
                </ListItem>
                <ListItem>
                    Working on document processing module
                </ListItem>
                <ListItem>
                    Developing UI kit
                </ListItem>
                <ListItem>
                    Participating in cross-team collaboration and integration
                </ListItem>
                <ListItem>
                    Mobile applications development with NativeScript
                </ListItem>
            </List>
        </Section>
    )
}
