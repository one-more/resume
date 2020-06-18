import React from 'react'
import Section from './components/Section'
import {H2} from './components/Headings'
import ExperienceEpam from './ExperienceEpam'
import ExperienceYell from './ExperienceYell'
import ExperienceTrustGroup from './ExperienceTrustGroup'
import ExperienceRBT from './ExperienceRBT'
import ExperienceSeverex from './ExperienceSeverex'
import {ExperienceInTouch} from "./ExperienceIntouch"
import {ExperienceSoftSwiss} from "./experienceSoftSwiss";

export default function () {
    return (
        <Section>
            <H2>
                Professional Experience
            </H2>
            <ExperienceSoftSwiss />
            <ExperienceInTouch />
            <ExperienceSeverex />
            <ExperienceEpam />
            <ExperienceYell />
            <ExperienceTrustGroup />
            <ExperienceRBT />
        </Section>
    )
}