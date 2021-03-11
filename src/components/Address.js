import React from 'react'
import styled from 'styled-components'
import {doubleBorder} from '../data/constants'
import Link, {types} from './components/Link'

export default function () {
    return (
        <Address>
            <Link type={types.mailto} href="mailto:dmni3865@gmail.com">
                dmni3865@gmail.com
            </Link>
            <Dot>&bull;</Dot>
            <Phone>
                <span>
                    +375 (25) 774-35-29
                </span>
                <Dot>&bull;</Dot>
            </Phone>
            <span>
                Minsk, Belarus
            </span>
            <LastDot>&bull;</LastDot>
        </Address>
    )
}

const Phone = styled.span``;

const Dot = styled.span`
    margin: 0 1rem;
    color: ${({theme}) => theme.colors.silver};
`;

const LastDot = styled(Dot)`
    display: none;
`;

const Address = styled.div`
    margin-top: 1rem;
    border-top: ${doubleBorder};
    border-bottom: ${doubleBorder};
    padding: .5rem 0;
    
     @media (max-width: 700px) {
        ${Phone} {
            display: block;
        }
        
        ${Dot}, ${LastDot} {
            float: left;
        }
        
        ${LastDot} {
            display: inline;
        }
    }
`;

