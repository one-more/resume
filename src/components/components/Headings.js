import styled from 'styled-components'

const Heading = styled.div`
   font-family: ${({theme}) => theme.font.headingFamily};
   font-weight: ${({theme}) => theme.font.bold}; 
`;

export const H1 = Heading.withComponent('h1').extend`
    font-size: 3.4321rem;
    margin: 0;
    line-height: 1;
    text-transform: uppercase;
`;

export const H2 = Heading.withComponent('h2').extend`
    font-size: 1.7rem;
    margin: 1rem 0;
`;

export const H3 = Heading.withComponent('h3').extend`
    font-size: 1.17em;
    margin: 0;
`;

export const SubHeader = styled.div`
    font-size: 1rem;
    font-weight: 500;
    color: ${({theme}) => theme.colors.silver};
    margin-top: 10px;
    line-height: 1;
`;