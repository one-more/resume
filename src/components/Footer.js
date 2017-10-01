import React from 'react'
import styled from 'styled-components'
import {doubleBorder} from '../data/constants'
import Link from './components/Link'

export default function () {
    return (
        <Footer>
            <FooterItem>
                <Link href="https://github.com/one-more" target="blank" >
                    Github
                </Link>
            </FooterItem>
            <FooterItem>
                <Link href="https://www.linkedin.com/in/%D0%B4%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9-%D0%BD%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B5%D0%B2-37206871/" target="blank" >
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