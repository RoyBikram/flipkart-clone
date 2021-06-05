import React from 'react';
import {CategoryItemContainer,CategoryImg, CategoryTitle} from './CategoryItemStyles';
const CategoryItem = ({Title,ImgSrc}) => {
    return (
        <CategoryItemContainer>
            <CategoryImg src = {ImgSrc} alt= ''/>
            <CategoryTitle>{Title}</CategoryTitle>
        </CategoryItemContainer>
     );
}
 
export default CategoryItem;