import React from 'react'
import Section from './components/Section'
import {H2} from './components/Headings'
import Link from './components/Link'

export default function () {
    return (
        <Section>
            <H2>
                Open Source Work
            </H2>
            <p>
                I like to be a part of open-source community - to help to improve existing
                packages or create own, such as &nbsp;
                <Link target="blank" href="https://github.com/one-more/react-cron-builder" >
                    cron expression builder
                </Link>, &nbsp;
                <Link  target="blank" href="https://github.com/one-more/falx">
                    single state management (flux implementation)
                </Link>
                , &nbsp;
                <Link target="blank" href="https://github.com/one-more/react-livr-validation" >
                    react validation
                </Link>
                &nbsp; and &nbsp;
                <Link target="blank" href="https://github.com/one-more/falx" >
                    application state management
                </Link>
                .
            </p>
        </Section>
    )
}