import React, {Component} from "react"
import styled from "styled-components";

const TopButton = styled.div`
    position:fixed;
    width:50px;
    height:50px;
    bottom:0px;
    right:50px;
    border-radius:5px;
    background-color:lightgray;
    text-align:center;
    line-height:50px;
`;

function toTop(){
    window.scrollTo(0,0);
}

class Top extends Component{
    render(){
        return(
            <TopButton onClick = {toTop}>Top</TopButton>
        );
    }
}

export default Top;