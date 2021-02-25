import React from "react";
import CategoryPresenter from "./CategoryPresenter";

export default class extends React.Component{
    constructor(props){
        super(props);
        const{location:{pathname}} = props;
        this.state={
            content:pathname
        }
    }

   render(){
    const {content} = this.state;
    console.log(content);
    return (<CategoryPresenter content = {content}/>)
    }
}