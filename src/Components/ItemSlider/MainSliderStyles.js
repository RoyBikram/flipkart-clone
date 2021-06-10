import styled, { css } from 'styled-components';
import CategoryItem from '../../Components/CatagoryItem/CategoryItemComponent';

export const MainSliderContainer = styled.div`
height: 275px;
width: 100%;
overflow: hidden;
position: relative;
`
export const MainSliderIner = styled.div`
height: 100%;
position: absolute;
display: flex;
align-items: center;
padding: 0px 5px;
${({position})=>(position?'left:0':'right:0')};
`
export const StyledCategoryItem = styled(CategoryItem)`
box-shadow: 0px 0px 7px 1px #c6101000 !important;
`

const Button = css`
position: absolute;
z-index: 2;
background-color: hsla(0,0%,100%,.98) ;
height: 104px;
width: 38px;
transform: translate(0%,75%);
border-radius: 0px 5px 5px 0px;
box-shadow: 0 0 3px 1px rgba(34, 34, 34, 0.521);
font-size: 30px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
`
export const RightButton = styled.div`
${Button}
right: 0;
border-radius: 5px 0px 0px 5px;
`
export const LeftButton = styled.div`
${Button}
left: 0;
`