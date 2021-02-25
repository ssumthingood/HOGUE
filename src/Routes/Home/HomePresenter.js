import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import Helmet from "react-helmet";

const Grid = styled.div`
    display:grid;
    margin:0 auto;
    grid-template-columns:33.3% 33.3% 33.3%;
    grid-template-rows: 675px 675px 675px 675px 675px 675px 675px;
    grid-gap:0.5px;
    font-size:30px;
`;

const Intro = styled.div`
    position:absolute;
    width:100%;
    top:575px;
    color:blue;
    z-index:10;
`;

const GoDetail1 = styled(Link)`
    grid-column-start: 1;
    grid-column-end: 4; 
    display:block;
    height:675px;
    align-items:center;
    overflow:hidden;
    position:relative;
    &:hover{
        border : 15px solid red;
        transition: border 0.25s ease;
        ${Intro}{
            top:560px;
        }
    }
`;

const GoDetail2 = styled(Link)`
    display:block;
    height:675px;
    position:relative;
    &:hover{
        border : 15px solid red;
        transition: border 0.25s ease;
        ${Intro}{
            top:560px;
        }
    }
`;

const BgVid = styled.video`
    position:relative;
    margin:0 auto;
    width:100%;
    background-size:cover;
    background-position:center center;
    z-index:-1;
    opacity:0.6;
`;

const HomePresenter =()=>(
    <>
    <Helmet>
        <title>HOGUE</title> 
    </Helmet>
    <Grid>
    <GoDetail1 to="/detail">
        <BgVid muted autoPlay loop>
            <source src = "자취기념1.mp4" type="video/mp4"/>
        </BgVid>
        {/*hover시 border가 변하는 것에 내용과 배경 사이즈가 영향을 받지 않으려면 border가
        변하는 component를 감싸는 comoponent를 하나 더 만든 후 그 부분에 배경을 설정한다.*/}
        <Intro>그의 다이나믹한 자취생활의 시작</Intro>
    </GoDetail1>
    <GoDetail2 to="/detail"><Intro>2</Intro></GoDetail2>
    <GoDetail2 to="/detail"><Intro>3</Intro></GoDetail2>
    <GoDetail2 to="/detail"><Intro>4</Intro></GoDetail2>
    <GoDetail1 to="/detail"><Intro>5</Intro></GoDetail1>
    <GoDetail2 to="/detail"><Intro>6</Intro></GoDetail2>
    <GoDetail2 to="/detail"><Intro>7</Intro></GoDetail2>
    <GoDetail2 to="/detail"><Intro>8</Intro></GoDetail2>
    <GoDetail1 to="/detail"><Intro>9</Intro></GoDetail1>
    <GoDetail2 to="/detail"><Intro>10</Intro></GoDetail2>
    <GoDetail2 to="/detail"><Intro>11</Intro></GoDetail2>
    <GoDetail2 to="/detail"><Intro>12</Intro></GoDetail2>
    <GoDetail2 to="/detail"><Intro>13</Intro></GoDetail2>
    <GoDetail2 to="/detail"><Intro>14</Intro></GoDetail2>
    <GoDetail2 to="/detail"><Intro>15</Intro></GoDetail2>
    </Grid>
    </>
);

HomePresenter.propTypes={
    
}

export default HomePresenter;