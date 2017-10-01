import React from 'react'
import styled from 'styled-components'

export default function () {
    return (
        <Summary>
            I am a frontend developer interested in building robust, large scalable
            applications; solving architectural issues; working with cutting-edge technologies;
            and constantly learning.
        </Summary>
    )
}

const Summary = styled.div`
    margin: 1rem 0;
    font-size: 1.3rem;
    font-weight: ${({theme}) => theme.font.bold};
`;