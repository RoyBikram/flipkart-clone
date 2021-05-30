import React, { Component } from 'react';
import downArrowImg from '../../Res/downArrow.svg'
import cardIconImg from '../../Res/cardIcon.svg'
import headerIconImg from '../../Res/headerIcon.png'
import {HeaderContainer,HeaderItemsContainer,LeftSide,Img,Search,RightSide,ItemContainer,ArrowIconImg,CardIconImg} from './HeaderStyles.js'
import CustomButton from '../CustomButton/CustomButtonComponent';
import AuthPopup from '../AuthPopup/AuthPopupComponent.jsx';
import { connect } from 'react-redux';
import { AuthPopupSelecter } from '../../Redux/AuthPopup/AuthPopupSelecter';
import UserSelecter from '../../Redux/User/UserSelecter';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

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
                    {(currentUser)?<ItemContainer>{currentUser.displayName}
                         <ArrowIconImg src={downArrowImg} alt=''/>
                        </ItemContainer> : <CustomButton styleOf={'HEADERLOGIN'} onClick={ToggleAuthPopup}>Login</CustomButton>}
                    <ItemContainer>More
                    <ArrowIconImg src={downArrowImg} alt=''/></ItemContainer>
                    <ItemContainer>
                    <CardIconImg src={cardIconImg} alt=''/>
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