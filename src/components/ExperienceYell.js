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
                <b>ELL.RU</b>&nbsp;
                // Apr, 2015 - Feb, 2016
            </JobDetails>
            <List textSmall >
                <ListItem>
                    Developing large-scale project for commercial use using Angular/Stylus/Node.js
                </ListItem>
                <ListItem>
                    Created Vanilla JS image grid plugin, Vanilla JS Bar chart with range from scratch optimized
                    it and implemented it into project
                </ListItem>
                <ListItem>
                    Analytics tools integration
                </ListItem>
                <ListItem>
                    Maps integration
                </ListItem>
                <ListItem>
                    Creating responsive css animations
                </ListItem>
                <ListItem>
                    Client/server side forms validation/save logic
                </ListItem>
                <ListItem>
                    Client side REST api integration
                </ListItem>
                <ListItem>
                    Creating/maintaining  Gulp tasks
                </ListItem>
                <ListItem>
                    Node.js rendering,
                    DB integration,
                    implementing secure socket connection between client and server
                </ListItem>
            </List>
        </Section>
    )
}
