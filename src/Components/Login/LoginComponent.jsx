import React from 'react';
import CustomInput from '../CustomInput/CustomInputComponent';
import {LoginContainer,StyledForm,Terms,StyledSpan,GotoSignupPage} from './LoginStyles';
import CustomButton from '../CustomButton/CustomButtonComponent';
import {auth,LoginWithGoogle} from '../../Firebase/Firebase';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email:'',password:'' }
    }
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({[name]:value})
    }
    handleSubmit = async (event) => {
        event.preventDefault()
        const { email, password } = this.state;
        try {
            const {user} = await auth.signInWithEmailAndPassword(email,password)
        } catch (error) {
            switch (error.code) {
                case "auth/wrong-password":
                    alert('You should use Login With Google.')
                    break;
                case "auth/user-not-found":
                    alert('You have not any account.')
                    break;
                default:
                    alert('Some network problem, Try little later.')
                    break;
            }
        }
    }
    handleLoginWithGoogle = async () => {
        try {
            const { user } = await LoginWithGoogle();
            console.log(user);
        } catch (error) {
            console.log('Your internet connection is not consistent, Please try little bit later.');
        }
        
    }

    render() { 
        return (
            <LoginContainer>
                <StyledForm onSubmit={this.handleSubmit}>
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
                        label='Enter Password'
                        required
                    />
                    <Terms>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Terms>
                    <CustomButton type='submit' styleOf={'ORANGEBUTTON'} >Login</CustomButton>
                    <StyledSpan>OR</StyledSpan>
                    <CustomButton type='button' onClick={this.handleLoginWithGoogle} styleOf={'AUTHWITHGOOGLE'}>Login with Google</CustomButton>
                </StyledForm>
                <GotoSignupPage onClick={this.props.GotoSignup} styleof={'GOTOSIGNUPPAGE'}>New to Flipkart? Create an account</GotoSignupPage>
            </LoginContainer>
         );
    }
}
 
export default Login;