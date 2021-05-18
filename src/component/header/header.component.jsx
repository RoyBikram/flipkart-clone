import React from 'react';
import './header.styles.scss';
import DownArrow from './res/downArrow.svg'
import CardIcon from './res/cardIcon.svg'
import HeaderIcon from './res/headerIcon.png'

const Header = () => {
    return (
        <div className="Header">
            <div className="HeaderItemsContainer">
                <div className="LeftSide">
                    <div className="MainIcon">
                        <img src={HeaderIcon} alt="Flipkart Icon" />
                    </div>
                    <div className="Search"></div>
                </div>
                <div className="RightSide">
                    <div className="Name">Bikram
                         <img className="DownArrow" src={DownArrow} alt=''/>
                    </div>
                    <div className="More">More
                    <img className="DownArrow" src={DownArrow} alt=''/></div>
                    <div className="Card">
                    <img className="CardIcon" src={CardIcon} alt=''/>
                        Card</div>
                </div>
            </div>
        </div>
     );
}
 
export default Header;