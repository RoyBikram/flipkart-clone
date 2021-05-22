import React,{Component} from 'react';
import ArrowIcon from '../../res/downArrow.svg'
import CardIcon from '../../res/cardIcon.svg'
import HeaderIcon from '../../res/headerIcon.png'
import {HeaderContainer,HeaderItemsContainer,LeftSide,Img,Search,RightSide,ItemContainer,ArrowIconImg,CardIconImg} from './header.styles.js'
import CustomButton from '../customButton/customButton.component';
// import { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { currentUser:null }
    }
    render() {
        const { currentUser } = this.state;
        return (
            <HeaderContainer>
            <HeaderItemsContainer>
                <LeftSide>
                    <div className="MainIcon">
                        <Img src={HeaderIcon} alt="Flipkart Icon" />
                    </div>
                    <Search></Search>
                </LeftSide>
                <RightSide>
                    {(currentUser)?<ItemContainer>Bikram
                         <ArrowIconImg src={ArrowIcon} alt=''/>
                    </ItemContainer>:<CustomButton type={'login'} context={'Login'}></CustomButton>}
                    <ItemContainer>More
                    <ArrowIconImg src={ArrowIcon} alt=''/></ItemContainer>
                    <ItemContainer>
                    <CardIconImg src={CardIcon} alt=''/>
                        Card</ItemContainer>
                </RightSide>
            </HeaderItemsContainer>
        </HeaderContainer>
         );
    }
}
 
export default Header;


// class Header () {
//     return (
        
//      );
// }
 
// export default Header;