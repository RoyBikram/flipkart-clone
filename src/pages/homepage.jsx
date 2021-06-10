import React ,{Component} from 'react';
import ItemSlider from '../Components/ItemSlider/ItemSliderComponent';
import MainContainer from '../Components/MainContainer/MainContainerComponent';
import Slider from '../Components/Slider/SliderComponent';
import CateObj from '../Data/category';
import Product from '../Data/product';


class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="Homepage">
                <MainContainer>
                    <Slider></Slider>
                    <ItemSlider handleClick={'categorypage'} CategoryData={CateObj}></ItemSlider>
                    <ItemSlider handleClick={'productpage'} ProductData={ Object.keys(Product).slice(1,13)}></ItemSlider>
                </MainContainer>
            </div>
        );
    }
}
 
export default Homepage;