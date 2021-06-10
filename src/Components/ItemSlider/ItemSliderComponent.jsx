import React from 'react';
import { Link } from 'react-router-dom';
import {ItemSliderContainer,ItemSliderHeader, HeaderTitle,HeaderButton} from './ItemSliderStyles';
import MainSlider from './MainSlider'
import CategoryItem from '../../Components/CatagoryItem/CategoryItemComponent';
import ProductOverview from '../../Components/ProductOverview/ProductOverviewComponent';
import Product from '../../Data/product';
const ItemSlider = ({ CategoryData = null, ProductData = null ,handleClick}) => {
    let InerElement = null
    if (CategoryData) {
        InerElement = Object.keys(CategoryData).slice(0,13).map((each,index) => (<CategoryItem Place='HomePage' key={index} ImgSrc={CategoryData[each].image} Title={each}></CategoryItem>))
    } else if(ProductData){
        InerElement = ProductData.map((each,index) => (<ProductOverview  key={index} Product={Product[each]}></ProductOverview>))
    }
    return (
        <ItemSliderContainer>
            <ItemSliderHeader>
                <HeaderTitle>Discounts for You</HeaderTitle>
                <Link to={`/${handleClick}`}><HeaderButton>VIEW ALL</HeaderButton></Link>
            </ItemSliderHeader>
            <MainSlider>{InerElement}</MainSlider>
        </ItemSliderContainer>
     );
}
 
export default ItemSlider;