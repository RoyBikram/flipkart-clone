import './App.css';
import React, { Component } from 'react';
import Homepage from './Pages/HomePage';
import Header from './Components/Header/HeaderComponent';
import { SetUserAction } from './Redux/User/UserAction';
import {connect} from 'react-redux';
import {auth} from './Firebase/Firebase';
import Footer from './Components/Footer/FooterComponent';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  unSubcribeFromAuth = null;

  componentDidMount() {
    const { SetCurrentUser } = this.props;
    this.unSubcribeFromAuth = auth.onAuthStateChanged(async user => {
      SetCurrentUser(user);
    })
  }

  componentWillUnmount() {
    this.unSubcribeFromAuth()
  }
  
  render() { 
    return (
      <div className="App">
        <Header></Header>
        <Homepage></Homepage>
        <Footer></Footer>
      </div>
     );
  }
}
 
const mapDispatchToProps = dispatch => ({
  SetCurrentUser: user => dispatch(SetUserAction(user))
})
export default connect(null,mapDispatchToProps)(App);