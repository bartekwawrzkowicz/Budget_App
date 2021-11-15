import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
    ${normalize}

    ul {
        list-style: none;
        margin: 0;
        padding: 0; 
    }
`

export default GlobalStyles;