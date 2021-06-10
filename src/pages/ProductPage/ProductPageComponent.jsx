import React from 'react';
import product from '../../Data/product';
import CateObj from '../../Data/category';
import MainContainer from '../../Components/MainContainer/MainContainerComponent';
import { Header, ProductItemContainer } from './ProductPageStyles';
import ProductOverview from '../../Components/ProductOverview/ProductOverviewComponent';
const ProductPage = ({ productData = null, history }) => {
    const getProduct = () => {
        return CateObj[history.location.pathname.slice(14,).replaceAll('_',' ')].products
    }
    if(!productData) {
        productData = getProduct()
    }
    return (
        <MainContainer>
            <Header>
                Products For You
            </Header>
            <ProductItemContainer>
                { 
                productData.map((each,index)=>(<ProductOverview key={index} Product={product[each]}></ProductOverview>))
                }
            </ProductItemContainer>
        </MainContainer>
     );
}
 
export default ProductPage;