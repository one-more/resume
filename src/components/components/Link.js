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

export default styled.a.attrs({
    hoverDecoration: ({type}) => mapTypeToDecoration(type)
})`
    color: ${({theme}) => theme.colors.thunderbird};
    text-decoration: none;
    
    :hover {
        text-decoration: ${({hoverDecoration}) => hoverDecoration};
    }
`