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
                    Html markup
                </ListItem>
                <ListItem>
                    Angular controllers
                </ListItem>
                <ListItem>
                    Vanilla JS image grid plugin
                </ListItem>
                <ListItem>
                    Analytics tools integration
                </ListItem>
                <ListItem>
                    Vanilla JS Bar chart with range slider
                </ListItem>
                <ListItem>
                    Yandex maps integration
                </ListItem>
                <ListItem>
                    Css animations. Css preprocessors (Stylus)
                </ListItem>
                <ListItem>
                    Client/server side forms validation/save logic
                </ListItem>
                <ListItem>
                    Client side REST api integration
                </ListItem>
                <ListItem>
                    Gulp tasks
                </ListItem>
                <ListItem>
                    Node.js rendering, db integration, socket server
                </ListItem>
            </List>
        </Section>
    )
}
