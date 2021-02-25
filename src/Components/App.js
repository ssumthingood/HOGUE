import React, {Component} from 'react';
import GlobalStyles from '../Components/GlobalStyles';
import Routers from "../Components/Router";

class App extends Component{
  render(){
    return(
      <>
      <Routers/>
      <GlobalStyles/>
      </>
    );
  }
}

export default App;
