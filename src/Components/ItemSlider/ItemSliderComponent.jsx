import React from 'react';
import {ItemSliderContainer,ItemSliderHeader, HeaderTitle,HeaderButton,MainSlider,} from './ItemSliderStyles';

const ItemSlider = () => {
    return (
        <ItemSliderContainer>
            <ItemSliderHeader>
                <HeaderTitle>Discounts for You</HeaderTitle>
                <HeaderButton>VIEW ALL</HeaderButton>
            </ItemSliderHeader>
            <MainSlider></MainSlider>
        </ItemSliderContainer>
     );
}
 
export default ItemSlider;