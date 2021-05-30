import React from 'react';
import CustomButton from '../CustomButton/CustomButtonComponent';
import CustomInput from '../CustomInput/CustomInputComponent';
import { SignupContainer, StyledForm, StyledSpan, GotoLoginPage } from './SignupStyles';
import { auth, LoginWithGoogle } from '../../Firebase/Firebase.js';
import {connect} from 'react-redux';
class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword:''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert('The password is not match.')
            return
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            user.updateProfile({
                displayName:displayName
            })
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
            this.props.ToggleAuthPopup()
        } catch (error) {
            switch (error.code) {
                case "auth/email-already-in-use":
                    alert('You might have already an account on this email.')
                    break;
            
                default:
                    alert('Some network problem, Try little later.')
                    break;
            }
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({[name]:value})
    }

    handleLoginWithGoogle = async () => {
        try {
            const {user} = await LoginWithGoogle();
            console.log(user);
            this.props.ToggleAuthPopup()
        } catch (error) {
            console.log('Some network problem, Try little later.');
        }
        
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <SignupContainer>
                <StyledForm onSubmit={this.handleSubmit}>
                    <CustomInput
                        name='displayName'
                        type='text'
                        onChange = {this.handleChange}
                        value={displayName}
                        label='Enter Full Name'
                        required
                    />
                    <CustomInput
                        name='email'
                        type='email'
                        onChange = {this.handleChange}
                        value={email}
                        label='Enter Email'
                        required
                    />
                    <CustomInput
                        name='password'
                        type='password'
                        onChange = {this.handleChange}
                        value={password}
                        label='Set Password'
                        required
                    />
                    <CustomInput
                        name='confirmPassword'
                        type='password'
                        onChange = {this.handleChange}
                        value={confirmPassword}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type='submit' styleOf={'ORANGEBUTTON'} >Signup</CustomButton>
                    <StyledSpan>OR</StyledSpan>
                    <CustomButton type='button' onClick={this.handleLoginWithGoogle} styleOf={'AUTHWITHGOOGLE'}>Signup with Google</CustomButton>
                </StyledForm>
                <GotoLoginPage onClick={this.props.GotoLogin}>Existing User? Log in</GotoLoginPage>
            </SignupContainer>
         );
    }
}

const mapDispatchToProps = (Dispatch) => ({
    ToggleAuthPopup:() => {Dispatch({type:'TOGGLEAUTHPOPUP'})}
})
export default connect(null,mapDispatchToProps)(Signup);