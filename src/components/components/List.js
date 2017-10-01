import styled from 'styled-components'

export default styled.ul`
    padding-left: .75em;
    margin: 0;
    list-style-type: none;
    font-size: ${({textSmall}) => textSmall ? '.8077rem;' : '1rem'}
`;

export const ListItem = styled.li`
    position: relative;
    
    :before {
      content: "\\2022"; /* bullet */
      color: ${({theme}) => theme.colors.silver};
      display: block;
      position: absolute;
      top: 0;
      left: -0.75em;
      width: 0.75em;
    }
`;