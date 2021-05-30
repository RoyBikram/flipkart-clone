import React from 'react';
import CustomButton from '../CustomButton/CustomButtonComponent';
import CustomInput from '../CustomInput/CustomInputComponent';
import {SignupContainer, StyledForm,StyledSpan,GotoLoginPage} from './SignupStyles';
class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            conformPassword:''
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({[name]:value})
    }

    render() { 
        return (
            <SignupContainer>
                <StyledForm>
                    <CustomInput
                        name='displayName'
                        type='text'
                        onChange = {this.handleChange}
                        value={this.state.displayName}
                        label='Enter Full Name'
                        required
                    />
                    <CustomInput
                        name='email'
                        type='email'
                        onChange = {this.handleChange}
                        value={this.state.email}
                        label='Enter Email'
                        required
                    />
                    <CustomInput
                        name='password'
                        type='password'
                        onChange = {this.handleChange}
                        value={this.state.password}
                        label='Set Password'
                        required
                    />
                    <CustomInput
                        name='conformPassword'
                        type='password'
                        onChange = {this.handleChange}
                        value={this.state.conformPassword}
                        label='Conform Password'
                        required
                    />
                    <CustomButton type='submit' styleOf={'ORANGEBUTTON'} >Signup</CustomButton>
                    <StyledSpan>OR</StyledSpan>
                    <CustomButton type='button' styleOf={'AUTHWITHGOOGLE'}>Signup with Google</CustomButton>
                </StyledForm>
                <GotoLoginPage onClick={this.props.GotoLogin}>Existing User? Log in</GotoLoginPage>
            </SignupContainer>
         );
    }
}
 
export default Signup;