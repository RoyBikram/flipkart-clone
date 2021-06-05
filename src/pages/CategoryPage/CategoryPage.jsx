import React from 'react';
import CateObj from '../../Data/category';
import CategoryItem from '../../Components/CatagoryItem/CategoryItemComponent';
import MainContainer from '../../Components/MainContainer/MainContainerComponent';
import { Header, CategoryItemContainer } from './CategoryPageStyles';
const CatagoryPage = () => {
    return (
        <MainContainer>
            <Header>
                Products For You
            </Header>
            <CategoryItemContainer>
                {
                    Object.keys(CateObj).map((each,index) => {
                        return <CategoryItem key={index} ImgSrc={CateObj[each].image} Title={each}></CategoryItem>
                    })
                }
               
            </CategoryItemContainer>
        </MainContainer>
     );
}
 
export default CatagoryPage;