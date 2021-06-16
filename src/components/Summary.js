import React from 'react'
import styled from 'styled-components'

export default function () {
    return (
        <Summary>
            <p>
                Highly skilled and motivated Software Engineer effective in
                guiding product cycle from conception to completion,
                management and complete guidance of installation processes for
                on-schedule product launches. Consult and cooperate with broad
                clientele and deploy additional system resources to deliver and enhance
                configuration for optimal customer satisfaction.
            </p>
        </Summary>
    )
}

const Summary = styled.div`
    margin: 1rem 0;
    font-size: 1.3rem;
    font-weight: ${({theme}) => theme.font.bold};
`;