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
import {ExperienceAsk} from "./ExperienceAsk"
import {ExperienceUpsilonit} from "./ExperienceUpsilonit";

export default function () {
    return (
        <Section>
            <H2>
                Professional Experience
            </H2>
            <ExperienceUpsilonit />
            <ExperienceAsk /> 
            <ExperienceSoftSwiss />
            <ExperienceSeverex />
            <ExperienceEpam />
            <ExperienceYell />
            <ExperienceTrustGroup />
            <ExperienceRBT />
        </Section>
    )
}