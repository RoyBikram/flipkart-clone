import React ,{Component} from 'react';
import ItemSlider from '../Components/ItemSlider/ItemSliderComponent';
import MainContainer from '../Components/MainContainer/MainContainerComponent';
import Slider from '../Components/Slider/SliderComponent';

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
                    <ItemSlider></ItemSlider>
                    <ItemSlider></ItemSlider>
                    <ItemSlider></ItemSlider>
                </MainContainer>
            </div>
        );
    }
}
 
export default Homepage;