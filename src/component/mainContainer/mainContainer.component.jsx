import React from 'react';
import './mainContainer.styles.scss'
const MainContainer = ({children}) => {
    return (
        <div className="MainContainer">
            {children}
        </div>
     );
}

export default MainContainer;