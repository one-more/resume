import React from 'react'
import {H2} from './components/Headings'
import List, {ListItem} from './components/List'
import Link from './components/Link'
import Section from './components/Section'

export default function () {
    return (
        <Section>
            <H2>Proficiencies</H2>
            <List>
                <ListItem>
                    Large-scale frontend architecture
                </ListItem>
                <ListItem>
                    React, Redux, and ES2015/ES2016
                </ListItem>
                <ListItem>
                    Frontend build processes
                </ListItem>
                <ListItem>
                    Strong knowledge of core JS
                </ListItem>
                <ListItem>
                    CSS pre/post processors
                    (though I prefer &nbsp;
                        <Link target="blank" href='http://styled-components.com'>
                            styled components
                        </Link>
                    )
                </ListItem>
                <ListItem>
                    JS Unit testing (Jest, Mocha + sinon + chai)
                </ListItem>
                <ListItem>
                    Principles and practises in responsive and adaptive web design
                </ListItem>
                <ListItem>
                    Rigorous attention to code quality and interface's design
                </ListItem>
                <ListItem>
                    Relentless, self-motivated learning
                </ListItem>
            </List>
        </Section>
    )
}