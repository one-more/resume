import React from 'react'
import {H3} from './components/Headings'
import Section from './components/Section'
import JobDetails from './components/JobDetails'
import List, {ListItem} from './components/List'

export default function () {
    return (
        <Section>
            <H3>FullStack Developer</H3>
            <JobDetails>
                <b>RB Taxi</b>&nbsp;
                // Aug, 2012 - Jan, 2013
            </JobDetails>
            <List textSmall >
                <ListItem>
                    Worked with Large SPA b2b platform
                </ListItem>
                <ListItem>
                    Created BackboneJS Views, Controllers, Models
                    for the purpose of creating new web pages
                </ListItem>
                <ListItem>
                    Client side communication with REST API
                </ListItem>
                <ListItem>
                    Forms validation/save
                </ListItem>
                <ListItem>
                    Server side cache (redis)
                </ListItem>
                <ListItem>
                    Server side views (PHP Smarty)
                </ListItem>
                <ListItem>
                    Server side validation/save data logic (PHP)
                </ListItem>
                <ListItem>
                    Server side reports on-demand composing
                </ListItem>
            </List>
        </Section>
    )
}
