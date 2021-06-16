import React from 'react'
import {H3} from './components/Headings'
import Section from './components/Section'
import JobDetails from './components/JobDetails'
import List, {ListItem} from './components/List'
import {Project} from "./components/Project";

export default function () {
    return (
        <Section>
            <H3>Senior Frontend Engineer</H3>
            <JobDetails>
                <b>Severex LTD</b>&nbsp;
                // November 2017 - September 2019
            </JobDetails>
            <Project>
                <JobDetails>
                    <div>
                        <i>
                            <b>Project: Big data visualization and management dashboard</b>
                        </i>
                    </div>
                    <div>
                        <i>
                            <b>Technologies used:</b>
                        </i>&nbsp;
                        Aurelia, TypeScript
                    </div>
                    <br/>
                    Ny primary focus in this project was document
                    workflow module and ACL framework implementation. I was very fortunate
                    to work in a very diverse team where every member was a valuable
                    contributor. I really enjoyed the amount of day-to-day collaboration
                    which not only allowed us to meet the deadlines but also become
                    very close therefore improving overall communication tremendously.
                </JobDetails>
                <JobDetails>
                    <div>
                        <i>
                            <b>Project: mobile application</b>
                        </i>
                    </div>
                    <div>
                        <i>
                            <b>Technologies used:</b>
                        </i>&nbsp;
                        TypeScript, NativeScript, Couch DB
                    </div>
                    <br/>
                    This was a very challenging experience in a completely
                    new area for me. Before I ever begun the implementation
                    of the required features I had to conduct an
                    extensive research in the field of JS mobile app development;
                    Choosing between three biggest technologies on the mobile development market
                    I made a comparison table with all of the pros and cons
                    and after an extensive in-depth review I chose NativeScript
                    as an optimal and efficient way to achieve the standard
                    that clients have set for Severex Ltd.
                    I selected NativeScript because of its unique feature
                    - marshalling ( access to the native platform feature
                    s through the JS api without a bridge), wide support of client side
                    frameworks
                    (React, Vue, Angular)
                    and mature cli ecosystem. To top this cake with a cherry I had
                    a very enjoyable
                    experience writing server side JS to create a fancy mobile application.
                </JobDetails>
                <JobDetails>
                    <div>
                        <i>
                            <b>Project: Realtime crypto exchanges analytics module</b>
                        </i>
                    </div>
                    <div>
                        <i>
                            <b>Technologies used:</b>
                        </i>&nbsp;
                        AWS, Terraform, kubernetes, Docker, Python
                    </div>
                    <br/>
                    I started this project as a part of the company's
                    RnD program. Initial goal was to create an in-house
                    crypto analytics dashboard with graphics visualization
                    and local copy of the order book. Later it evolved into
                    a whole new crypto department.
                </JobDetails>
                <JobDetails>
                    <b>Responsibilities:</b>
                </JobDetails>
                <List textSmall >
                    <ListItem>
                        Developing Python microservices and deploying them
                        to the AWS based Kubernetes
                    </ListItem>
                    <ListItem>
                        Maintaining old codebase and developing new features
                    </ListItem>
                    <ListItem>
                        Migrating codebase from aurelia + gulp to react/redux + webpack
                    </ListItem>
                    <ListItem>
                        Working on document processing and ACL modules
                    </ListItem>
                    <ListItem>
                        Developing an UI kit package
                    </ListItem>
                    <ListItem>
                        Participating in cross-team collaboration and integration
                    </ListItem>
                    <ListItem>
                        Mobile applications development with NativeScript
                    </ListItem>
                </List>
            </Project>
        </Section>
    )
}
