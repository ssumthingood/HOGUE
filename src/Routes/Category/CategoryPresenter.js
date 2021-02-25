import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const Title = styled.span`
    font-size:25px;
`;

const Contents = styled.div`
    height:2000px;
    border:5px solid black;
`;

const CategoryPresenter=({content})=>(
    <>
    <Contents>
    <Title>{content}</Title>
    </Contents>
    </>
);

CategoryPresenter.propTypes={
    content:PropTypes.string
}

export default CategoryPresenter;