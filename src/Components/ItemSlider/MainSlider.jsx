import React, {Component} from 'react';
import { MainSliderContainer, MainSliderIner, RightButton, LeftButton} from './MainSliderStyles';

class MainSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            floatLeft:true
         }
    }

    handleButtonClick = () => {
        this.setState((currentState) => ({floatLeft:!currentState.floatLeft}))
    }
    render() {
        return (
            <MainSliderContainer>
                {
                    (this.state.floatLeft)?<RightButton onClick={this.handleButtonClick}>&#10095;</RightButton>:<LeftButton onClick={this.handleButtonClick}>&#10094;</LeftButton>
                }
            <MainSliderIner position={this.state.floatLeft}>
            {this.props.children}
            </MainSliderIner>
        </MainSliderContainer>
         );
    }
}
 
export default MainSlider;