import React from 'react';
import { Container } from './mainContainer.styles.js';

const MainContainer = ({children}) => {
    return (
        <Container>
            {children}
        </Container>
     );
}

export default MainContainer;