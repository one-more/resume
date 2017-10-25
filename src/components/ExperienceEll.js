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
                html markup
                Angular controllers
                image grid plugin (pure js)
                analytics tools integration
                bar chart with range slider
                yandex maps integration
                css animations
                client/server side forms validation/save logic
                client side REST api integration
                gulp tasks
                node.js rendering, db integration, socket server
            </List>
        </Section>
    )
}
