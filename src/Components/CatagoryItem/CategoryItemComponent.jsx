import React from 'react';
import { Link } from 'react-router-dom';
import {CategoryItemContainer,CategoryImg, CategoryTitle} from './CategoryItemStyles';
const CategoryItem = ({ Title, ImgSrc }) => {
    const getUrl = (Title) => (`categorypage/${Title.replaceAll(' ', '_')}`)
    return (
        <Link to={getUrl(Title)}>
        <CategoryItemContainer>
            <CategoryImg src = {ImgSrc} alt= ''/>
            <CategoryTitle>{Title}</CategoryTitle>
        </CategoryItemContainer>
        </Link>
     );
}
 
export default CategoryItem;