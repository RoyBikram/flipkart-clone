import React ,{Component} from 'react';
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
                </MainContainer>
            </div>
        );
    }
}
 
export default Homepage;