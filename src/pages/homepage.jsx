import React ,{Component} from 'react';
import Header from '../component/header/header.component';
import './homepage.styles.scss';
// import { Component } from 'react';

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="Homepage">
                <Header></Header>
            </div>
        );
    }
}
 
export default Homepage;