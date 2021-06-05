import React from 'react';
import { ItemSlider, GridImgV, GridImgH, FirstSection, SecondSection, FullGridImg} from './HomePageGridStyles';

const HomePageGrid = () => {
    return (
        <div>
            <FirstSection>
            <ItemSlider></ItemSlider>
            <GridImgV></GridImgV>
            </FirstSection>
            <SecondSection>
            <GridImgH></GridImgH>
            <GridImgH></GridImgH>
            <GridImgH></GridImgH>
            </SecondSection>
            <FullGridImg></FullGridImg>
        </div>
     );
}
 
export default HomePageGrid;