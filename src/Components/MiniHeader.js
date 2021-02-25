import React from "react"
import styled from "styled-components"
import {Link, withRouter} from "react-router-dom"

const MiniHeader = styled.header`
    height:50px;
    text-align:center;
    max-width:100%;
    box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25), 0 18px 36px -18px rgba(0, 0, 0, 0.3),
    0 -12px 36px -8px rgba(0, 0, 0, 0.025);
    background-color:white;
    font-size:25px;
    line-height:50px;
    top:0px;
    display:none;
`;

export default withRouter(({location:{pathname}})=>(
    <MiniHeader>
        MiniHeader
    </MiniHeader>
));