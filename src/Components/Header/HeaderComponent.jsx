import React, { Component } from 'react';
import cardIconImg from '../../Res/cardIcon.svg'
import headerIconImg from '../../Res/headerIcon.png'
import powerIcon from '../../Res/powerIcon.svg';
import {HeaderContainer,HeaderItemsContainer,LeftSide,Img,Search,RightSide,ItemContainer,IconImg} from './HeaderStyles.js'
import CustomButton from '../CustomButton/CustomButtonComponent';
import AuthPopup from '../AuthPopup/AuthPopupComponent.jsx';
import { connect } from 'react-redux';
import { AuthPopupSelecter } from '../../Redux/AuthPopup/AuthPopupSelecter';
import { UserSelecter } from '../../Redux/User/UserSelecter';
import {auth} from '../../Firebase/Firebase';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    getDisplayName = (currentUser) => (currentUser.displayName.split(' ')[0])
    render() {
        const { displayAuthPopup, ToggleAuthPopup,currentUser } = this.props;
        return (
            <HeaderContainer>
            <HeaderItemsContainer>
                <LeftSide>
                    <div className="MainIcon">
                        <Img src={headerIconImg} alt="Flipkart Icon" />
                    </div>
                    <Search></Search>
                </LeftSide>
                <RightSide>
                         {(currentUser)? [<ItemContainer key="1">{`Hi ${this.getDisplayName(currentUser)}`}</ItemContainer>,
                            <CustomButton key='2' styleOf={'NOBACKGROUND'} onClick={() => { auth.signOut() }}>
                                <IconImg src={powerIcon} alt=''/>
                                Logout</CustomButton>] : (<CustomButton styleOf={'HEADERLOGIN'} onClick={ToggleAuthPopup}>Login</CustomButton>)
                        }
                    <ItemContainer>
                    <IconImg src={cardIconImg} alt=''/>
                        Card</ItemContainer>
                </RightSide>
                </HeaderItemsContainer>
                {(displayAuthPopup)?<AuthPopup ToggleAuthPopup ={ToggleAuthPopup}></AuthPopup>:null}
            </HeaderContainer>
         );
    }
}

const mapStateToProps = (state) => ({
    displayAuthPopup: AuthPopupSelecter(state),
    currentUser: UserSelecter(state) 
})
const mapDispatchToProps = (Dispatch) => ({
    ToggleAuthPopup:() => {Dispatch({type:'TOGGLEAUTHPOPUP'})}
})
export default connect(mapStateToProps,mapDispatchToProps)(Header);