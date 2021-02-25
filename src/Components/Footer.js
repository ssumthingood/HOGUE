import React from "react";
import styled from "styled-components"

const Footer = styled.div`
    width:100%;
    height:300px;
    text-align:center;
`;
const FooterWrapper=styled.div`
    max-width:1300px;
    height:100%;
    margin:0 auto;
    background-color:black;
`;

const Logo = styled.div`
    max-width:1160px;
    height:150px;
    font-size:80px;
    padding-top:70px;
    margin:0 auto;
    color:white;
`;

const Txt1 = styled.div`
    max-width:1160px;
    height:16px;
    margin:0 auto;
    margin-top:20px;
    margin-bottom:10px;
    font-size:12px;
    color:lightgray;
`;

const Txt2 = styled.div`
    margin:0 auto;
    max-width:1160px;
    height:19px;
    font-size:1em;
    color:lightgray;
`;

export default ()=>(
    <Footer>
    <FooterWrapper>
    <Logo>HOGUE</Logo>
    <Txt1>WWW.HOGUE.COM@MERSHIRAKANO</Txt1>
    <Txt2>정기구독 | 회사소개 | 광고 및 제휴 | 개인정보 처리방침</Txt2>
    </FooterWrapper>
    </Footer>
)