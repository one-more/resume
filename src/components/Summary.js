import React from 'react'
import styled from 'styled-components'

export default function () {
    return (
        <Summary>
            <p>
                Software Engineer with years of professional expertise in building robust,
                large scalable commercial applications; solving architectural issues;
                working with cutting-edge technologies. Assumed leadership role
                at EPAM systems as well as Severex LTD.
            </p>
        </Summary>
    )
}

const Summary = styled.div`
    margin: 1rem 0;
    font-size: 1.3rem;
    font-weight: ${({theme}) => theme.font.bold};
`;