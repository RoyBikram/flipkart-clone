import styled from 'styled-components';

export const ProductOverviewContainer = styled.div`
height: 265px;
width: 190px;
display: flex;
flex-direction: column;
transition: 500ms;
justify-content: center;
align-items: center;
box-sizing: border-box;
position: relative;
&:hover{
    box-shadow: 0px 0px 7px 1px #676767;
}
`
export const ProductImg = styled.div`
width: 90%;
height: 65%;
background-image: url(${(ImgUrl)=>(ImgUrl.ImgUrl)});
background-size: contain;
background-repeat: no-repeat;
background-position: center;
margin:10px 0px;

`
export const DetailsContainer = styled.div`
width: 90%;
height: 35%;
`
export const Title = styled.div`
font-size: 14px;
`
export const ButtomSec = styled.div`
position: absolute;
bottom: 0px;
margin-bottom: 5px;
`
export const ReviewContainer = styled.div`
display: flex;
flex-direction: row;
background-color: #388e3c;
width: 35px;
height: 20px;
justify-content: center;
align-items: center;
border-radius: 3px;
margin-top: 5px;
`
export const Review = styled.div`
padding: 4px;
font-size: 12px;
font-weight: 500;
color: #fff;
`
export const ReviewImg = styled.div`
height: 12px;
width: 12px;
background-image: url(${(ImgUrl)=>(ImgUrl.ImgUrl)});
`
export const PriceContainer = styled.div`
display: flex;
height: 20px;
width: 100%;
`
export const DiscountPrice = styled.div`

margin-right: 8px;
font-size: 16px;
font-weight: 500;
`
export const RetailPrice = styled.div`

margin-right: 8px;
color: #878787;
text-decoration: line-through;
`
export const DiscountPercentage = styled.div`

font-size: 13px;
color: #388e3c;
font-weight: 500;
`