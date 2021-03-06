import React, {Component} from "react"
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom"
import Home from "../Routes/Home"
import Header from "../Components/Header"
import MiniHeader from "../Components/MiniHeader"
import Wrapper from "../Components/Wrapper";
import Footer from "../Components/Footer";
import Top from "../Components/Top";
import Detail from "../Routes/Detail";
import Category from "../Routes/Category";
import styled from "styled-components";
import ReactDOM from 'react-dom';
import { findAllByTestId, render } from "@testing-library/react"

/* eslint no-restricted-globals: ["off"] */

class Routers extends Component{
    
// componentDidMount(){
//     window.addEventListener("scroll", this.onScroll);
// }

// shouldComponentUpdate(nextProps, nextState){
//     const top = ReactDOM.findDOMNode(this).getBoundingClientRect().top;
//     if(top<-100){
//         console.log(top+"/MiniHeader");
//         return false;
//     }else{
//         console.log(top+"/Header");
//         return true;
//     }
// }

// onScroll=(e)=>{
//     const scrollTop = ('scroll', e.srcElement.scrollingElement.scrollTop);
//     this.setState({scrollTop});
//      e.preventDefault();
// }

render(){
   return( 
   <Router>
        <>
        <Header/>
        <MiniHeader/>
        <Wrapper>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/detail" exact component={Detail}/>
            <Route path={`/category/fashion`} exact component={Category}/>
            <Route path={`/category/beauty`} exact component={Category}/>
            <Route path={`/category/living`} exact component={Category}/>
            <Route path={`/category/people`} exact component={Category}/>
            <Redirect from ="*" to="/"/>
        </Switch>
        </Wrapper>
        <Top/>
        <Footer/>
        </>
    </Router>
    );
}
}

export default Routers;
