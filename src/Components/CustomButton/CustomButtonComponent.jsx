import React from 'react';
import { CustomButtonContainer,Context } from './CustomButtonStyles.js'

const CustomButton = ({children,...others}) => {
    return (
        <CustomButtonContainer {...others}>
            <Context>{children}</Context>
        </CustomButtonContainer>
     );
}

export default CustomButton;