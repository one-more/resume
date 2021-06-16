import React from 'react'
import {H1, SubHeader} from './components/Headings'
import Address from './Address'

export default function () {
    return (
        <header>
            <H1>Dmitriy Nikolaev</H1>
            <SubHeader>
                Highly skilled and passionate Software Engineer
            </SubHeader>
            <Address />
        </header>
    )
}