import React, { Component } from "react";

export default class MenuItem extends Component {
    render(){
        const source = require(`../assets/images/${this.props.item.image_src}`);
        return (
            <li onClick={this.props.onClick}>
                <img src={source} alt="Menu Item" height="100" width="100"/>
                <br/>
                <label>{this.props.item.name}</label>
                <br/>
                <label>{`$${this.props.item.price}`}</label>
            </li>
        );
    }
}



