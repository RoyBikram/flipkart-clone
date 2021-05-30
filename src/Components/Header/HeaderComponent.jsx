import React, { Component } from 'react';
import downArrowImg from '../../Res/downArrow.svg'
import cardIconImg from '../../Res/cardIcon.svg'
import headerIconImg from '../../Res/headerIcon.png'
import {HeaderContainer,HeaderItemsContainer,LeftSide,Img,Search,RightSide,ItemContainer,ArrowIconImg,CardIconImg} from './HeaderStyles.js'
import CustomButton from '../CustomButton/CustomButtonComponent';
import AuthPopup from '../AuthPopup/AuthPopupComponent.jsx';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null,
            displayAuthPopup: false
        }
    }

    ToggleAuthPopup = () => {
        this.setState(
            (currentState) => ({
                ...currentState,
                displayAuthPopup:!currentState.displayAuthPopup
            })
        )
    }
    render() {
        const { currentUser,displayAuthPopup } = this.state;
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
                    {(currentUser)?<ItemContainer>Bikram
                         <ArrowIconImg src={downArrowImg} alt=''/>
                        </ItemContainer> : <CustomButton styleOf={'HEADERLOGIN'} onClick={this.ToggleAuthPopup}>Login</CustomButton>}
                    <ItemContainer>More
                    <ArrowIconImg src={downArrowImg} alt=''/></ItemContainer>
                    <ItemContainer>
                    <CardIconImg src={cardIconImg} alt=''/>
                        Card</ItemContainer>
                </RightSide>
                </HeaderItemsContainer>
                {(displayAuthPopup)?<AuthPopup ToggleAuthPopup ={this.ToggleAuthPopup}></AuthPopup>:null}
            </HeaderContainer>
         );
    }
}

export default Header;