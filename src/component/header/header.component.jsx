import React from 'react';
import ArrowIcon from '../../res/downArrow.svg'
import CardIcon from '../../res/cardIcon.svg'
import HeaderIcon from '../../res/headerIcon.png'
import {HeaderContainer,HeaderItemsContainer,LeftSide,Img,Search,RightSide,ItemContainer,ArrowIconImg,CardIconImg} from './header.styles.js'

const Header = () => {
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
                    <ItemContainer>Bikram
                         <ArrowIconImg src={ArrowIcon} alt=''/>
                    </ItemContainer>
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
 
export default Header;