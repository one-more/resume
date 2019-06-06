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
                    Large SPA b2b platform
                </ListItem>
                <ListItem>
                    HTML markup of the pages
                </ListItem>
                <ListItem>
                    BackboneJS Views, Controllers, Models
                </ListItem>
                <ListItem>
                    client side communication with REST API
                </ListItem>
                <ListItem>
                    forms validation/save
                </ListItem>
                <ListItem>
                    server side cache (redis)
                </ListItem>
                <ListItem>
                    server side views (PHP Smarty)
                </ListItem>
                <ListItem>
                    server side validation/save data logic (PHP)
                </ListItem>
                <ListItem>
                    server side reports on-demand composing
                </ListItem>
            </List>
        </Section>
    )
}
