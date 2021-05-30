import React from 'react';
import { Container } from './MainContainerStyles.js';

const MainContainer = ({children}) => {
    return (
        <Container>
            {children}
        </Container>
     );
}

export default MainContainer;