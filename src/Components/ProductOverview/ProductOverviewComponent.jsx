import React from 'react';
import {ProductOverviewContainer,ProductImg,DetailsContainer,Title,ReviewContainer,ReviewImg,Review,DiscountPercentage,DiscountPrice,RetailPrice,PriceContainer,ButtomSec} from './ProductOverviewStyles';

const ProductOverview = ({ Product }) => {
    console.log(Product);
    return (
        <ProductOverviewContainer>
            <ProductImg ImgUrl={Product.image[0]}>
            </ProductImg>
            <DetailsContainer>
                <Title>{(Product.product_name.length<=35)?Product.product_name:`${Product.product_name.slice(0,40)}....`}</Title>
                <ButtomSec>
                <ReviewContainer>
                    <Review>{Product.product_rating}</Review>
                    <ReviewImg ImgUrl={'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg=='}></ReviewImg>
                </ReviewContainer>
                <PriceContainer>
                    <DiscountPrice>{`₹${Product.discounted_price}`}</DiscountPrice>
                    <RetailPrice>{`₹${Product.retail_price}`}</RetailPrice>
                    <DiscountPercentage>{`${Math.round((100*(Product.retail_price-Product.discounted_price))/Product.retail_price)}%off`}</DiscountPercentage>
                </PriceContainer>
                </ButtomSec>
            </DetailsContainer>
        </ProductOverviewContainer>
     );
}
 
export default ProductOverview;