import React from 'react'
import styled from 'styled-components'
import {doubleBorder} from '../data/constants'
import Link from './components/Link'

export default function () {
    return (
        <Footer>
            <FooterItem>
                <Link href="https://github.com/one-more" target="_blank" >
                    Github
                </Link>
            </FooterItem>
            <FooterItem>
                <Link href="https://www.linkedin.com/in/dmitry-nikolaev-37206871/" target="_blank" >
                    LinkedIn
                </Link>
            </FooterItem>
        </Footer>
    )
}

const Footer = styled.footer`
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: ${doubleBorder};
`;

const FooterItem = styled.div`
    display: inline-block;
    margin-right: 1rem;
    font-size: .8077rem;
`;