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
                <b>Trust Group LTD</b>&nbsp;
                // Feb, 2013 - Mar, 2015
            </JobDetails>
            <List textSmall >
                <ListItem>
                    Server side errors logging and collection system with web interface(SPA);
                    sms notification and issue tracking control integration. (collected errors from about 40 servers).
                </ListItem>
                <ListItem>
                    Server side payment system integration
                </ListItem>
                <ListItem>
                    Payment systems api integration with web interface(SPA)
                </ListItem>
                <ListItem>
                    Web interface integrated with yandex images to search, crop and add meta data to images(SPA)
                </ListItem>
                <ListItem>
                    Vanilla JS chart rendering library on canvas
                </ListItem>
                <ListItem>
                    Vanilla JS forms validation/save logic
                </ListItem>
                <ListItem>
                    HTML markup
                </ListItem>
                <ListItem>
                    Server side CRUD data logic (PHP + MySql). REST Api endpoints. MVC logic
                </ListItem>
                <ListItem>
                    Cron scheduled scripts
                </ListItem>
                <ListItem>
                    Client side REST API communication
                </ListItem>
            </List>
        </Section>
    )
}
