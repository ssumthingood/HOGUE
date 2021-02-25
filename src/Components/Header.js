import React,{Component} from "react"
import styled from "styled-components"
import {Link, withRouter} from "react-router-dom"
//witRouter를 사용해야 라우트 컴포넌트가 아닌 곳에서 match/location/history 사용가능
import PropTypes from 'prop-types';

const HeaderMain = styled.header`
    max-width:100%;
    height:206px;
    box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25), 0 18px 36px -18px rgba(0, 0, 0, 0.3),
    0 -12px 36px -8px rgba(0, 0, 0, 0.025);
    background-color:white;
`;

const HeadWrapper = styled.div`
    max-width:1300px;
    text-align:center;
    margin: 0 auto;
`;

const List = styled.ul`
    width:50%;
    display:flex;
    align-items:center;
    margin:0 auto;
`;

const Item = styled.li`
    width:150px;
    height:46px;
    text-align:center;
    color:${props => props.current ? "red":"black"};
    &:hover{
        color:red;
    }
`;

const Slink = styled(Link)`

`;

const First = styled.div`
    height:45px;
    line-height:45px;
    color:gray;
`;

const Second = styled.div`
    height:115px;
    color:red;
    font-size:110px;
    line-height:90px;
`;

const GoHome = styled(Link)`
`;

const Third = styled.div`
    height:46px;
    line-height:46px;
`;
class Header extends React.Component{
    constructor(props){
        super(props);
        const{location:{pathname}} = props;
        this.state={
            pathname:pathname,
            scrollTop:0
        }
    }

    componentDidMount=()=>{
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll=(e)=>{
        const scrollTop=('scroll', e.srcElement.scrollingElement.scrollTop);
        this.setState({scrollTop});
        if(scrollTop>100){
            console.log("MiniHeader");
        }else{
            console.log("Header");
        }
    }

    render(){
    return(
        <HeaderMain>
        <HeadWrapper>
        <First>first</First>
        <Second><a href="/">HOGUE</a></Second>
        <Third>
            <List>
                <Item current={this.state.pathname==="/category/fashion"}><a id='0' href="/category/fashion">FASHION</a></Item>
                {/* 답은 this.state 에 있었다. */}
                <Item current={this.state.pathname==="/category/beauty"}><a id='1' href="/category/beauty">BEAUTY</a></Item>
                <Item current={this.state.pathname==="/category/living"}><a id='2' href="/category/living">LIVING</a></Item>
                <Item current={this.state.pathname==="/category/people"}><a id='3' href="/category/people">PEOPLE</a></Item>
               {/* SLink사용해서 새로고침없이 category의 내용이 바뀌는 걸 나타내는 방법은 없을까?(컴포넌트만 리렌더링하는 방법은?)  */}
            </List>
        </Third>
        </HeadWrapper>
        </HeaderMain>   
    )
    }
}

export default withRouter(Header);
// export default withRouter(({location:{pathname}})=>(
//     <HeaderMain>
//     <HeadWrapper>
//     <First>first</First>
//     <Second><GoHome to="/">HOGUE</GoHome></Second>
//     <Third>
//         <List>
//             <Item><Slink id='0' to={`/category/`}>FASHION</Slink></Item>
//             <Item><Slink id='1' to={`/category/`}>BEAUTY</Slink></Item>
//             <Item><Slink id='2' to={`/category/`}>LIVING</Slink></Item>
//             <Item><Slink id='3' to={`/category/`}>PEOPLE</Slink></Item>
//         </List>
//     </Third>
//     </HeadWrapper>
//     </HeaderMain>
// ));