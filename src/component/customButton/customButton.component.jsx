import React from 'react';
import { CustomButtonContainer,Context } from './customButton.styles.js'

const CustomButton = ({type, context}) => {
    return (
        <CustomButtonContainer>
            <Context>{context}</Context>
        </CustomButtonContainer>
     );
}

export default CustomButton;