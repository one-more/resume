import React from 'react'
import styled from 'styled-components'
import {doubleBorder} from '../data/constants'
import Link, {types} from './components/Link'

export default function () {
    return (
        <Address>
            <Link type={types.mailto} href="mailto:dmitrii.dot.nikolaev@yandex.ru">
                dmitrii.dot.nikolaev@yandex.ru
            </Link>
            <Dot>&bull;</Dot>
            <span>
                (375) 25-774-35-29
            </span>
            <Dot>&bull;</Dot>
            <span>
                Minsk, Belarus
            </span>
        </Address>
    )
}

const Address = styled.div`
    margin-top: 1rem;
    border-top: ${doubleBorder};
    border-bottom: ${doubleBorder};
    padding: .5rem 0;
`;

const Dot = styled.span`
    margin: 0 1rem;
    color: ${({theme}) => theme.colors.silver};
`;

