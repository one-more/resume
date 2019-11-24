import React from "react"
import styled from 'styled-components'

export const types = {
    mailto: 'mailto'
};

function mapTypeToDecoration(type) {
    switch(type) {
        case types.mailto:
            return 'none';
        default:
            return 'underline'
    }
}

export default styled(
    ({children, href, className, ...props}) => (
        <a
            {...props}
            className={className}
            href={href}
        >{children}</a>
    )
).attrs({
    hoverDecoration: ({type}) => mapTypeToDecoration(type)
})`
    color: ${({theme}) => theme.colors.thunderbird};
    text-decoration: none;
    
    :hover {
        text-decoration: ${({hoverDecoration}) => hoverDecoration};
    }
`