import React from 'react'
import {H1, SubHeader} from './components/Headings'
import Address from './Address'

export default function () {
    return (
        <header>
            <H1>Dmitrii Nikolaev</H1>
            <SubHeader>Senior Frontend Developer</SubHeader>
            <Address />
        </header>
    )
}