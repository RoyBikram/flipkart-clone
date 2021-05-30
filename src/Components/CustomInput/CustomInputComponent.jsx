import React from 'react';
import {Input, Label,CustomInputContainer} from './CustomInputStyles';

const CustomInput = ({ label,value, ...props }) => {
    return (
        <CustomInputContainer>
            <Input {...props}/>
            <Label className={(value.length>0)?'Shrink':''} >{label}</Label>
        </CustomInputContainer>
     );
}
 
export default CustomInput;