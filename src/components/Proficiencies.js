import React from 'react'
import {H2} from './components/Headings'
import List, {ListItem} from './components/List'
import Section from './components/Section'

export default function () {
    return (
        <Section>
            <H2>Proficiencies</H2>
            <List>
                <ListItem>
                    Large-scale app architecture
                    (smooth correspondence between backend and frontend)
                </ListItem>
                <ListItem>
                    Implementing full pyramid of tests (unit, integration, smoke, e2e, visual)
                    to meet highest standards
                </ListItem>
                <ListItem>
                    Extensive experience in software development and
                    scripting and project management
                </ListItem>
            </List>
        </Section>
    )
}