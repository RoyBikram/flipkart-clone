import React ,{Component} from 'react';
import Header from '../component/header/header.component';
import MainContainer from '../component/mainContainer/mainContainer.component';
import Slider from '../component/slider/slider.component';
import './homepage.styles.scss';

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="Homepage">
                <Header></Header>
                <MainContainer>
                    <Slider></Slider>
                </MainContainer>
            </div>
        );
    }
}
 
export default Homepage;