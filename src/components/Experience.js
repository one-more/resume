import React from 'react'
import Section from './components/Section'
import {H2} from './components/Headings'
import ExperienceEpam from './ExperienceEpam'
import ExperienceYell from './ExperienceYell'
import ExperienceTrustGroup from './ExperienceTrustGroup'
import ExperienceRBT from './ExperienceRBT'
import ExperienceSeverex from './ExperienceSeverex'

export default function () {
    return (
        <Section>
            <H2>
                Professional Experience
            </H2>
            <ExperienceSeverex />
            <ExperienceEpam />
            <ExperienceYell />
            <ExperienceTrustGroup />
            <ExperienceRBT />
        </Section>
    )
}