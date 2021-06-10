import './App.css';
import product from './Data/product';
import React, { Component } from 'react';
import Homepage from './Pages/HomePage';
import CategoryPage from './Pages/CategoryPage/CategoryPage';
import ProductPage from './Pages/ProductPage/ProductPageComponent';
import Header from './Components/Header/HeaderComponent';
import { SetUserAction } from './Redux/User/UserAction';
import { connect } from 'react-redux';
import {Route,Switch} from 'react-router-dom';
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
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/categorypage' component={CategoryPage}/>
          <Route exact path='/productpage' render={() => (<ProductPage productData={Object.keys(product).slice(0,30)}></ProductPage>)}/>
          <Route exact path='/categorypage/:pageid' component={ProductPage}/>
        </Switch>
        <Footer></Footer>
      </div>
     );
  }
}
 
const mapDispatchToProps = dispatch => ({
  SetCurrentUser: user => dispatch(SetUserAction(user))
})
export default connect(null,mapDispatchToProps)(App);