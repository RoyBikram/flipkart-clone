import React from 'react';
import { Overlay,MainBody,CloseButton,SideBar,SideBarTitle,SideBarPara,LoginandSignupContainer } from './AuthPopupStyles.js';
import Signup from '../Signup/SignupComponent';
import Login from '../Login/LoginComponent.jsx';

class AuthPopup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login:true
        }
    }
    GotoSignup = () => {
        this.setState({login:false})
    }
    GotoLogin = () => {
        this.setState({login:true})
    }
    render() { 
        // const { login } = this.state;
        const { ToggleAuthPopup } = this.props;
        return (
            <LoginandSignupContainer>
                <Overlay onClick={ToggleAuthPopup}>
                </Overlay>
                <MainBody>
                    <CloseButton onClick={ToggleAuthPopup} >&#9547;</CloseButton>
                    <SideBar>
                        <SideBarTitle>{(this.state.login)?"Login":"Looks like you're new here!"}</SideBarTitle>
                        <SideBarPara>{(this.state.login)?'Get access to your Orders, Wishlist and Recommendations':'Sign up with your mobile number to get started'}</SideBarPara>
                    </SideBar>
                    {
                        (this.state.login)?<Login GotoSignup={this.GotoSignup}></Login>:<Signup GotoLogin={this.GotoLogin}></Signup>
                    }
                </MainBody>
            </LoginandSignupContainer>
                
            
        )
    }
}

export default AuthPopup;