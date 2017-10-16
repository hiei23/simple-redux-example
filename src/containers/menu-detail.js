import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import MenuItem from "../components/menu_item";
import { selectMenuItem } from "../actions/index";
import AddMenuItem from "../containers/addMenuItem";

import Slider from "react-slick"

class MenuDetail extends Component {

    renderMenuItems(menu_items) {
        return menu_items.map((item) => {
            return (
                <MenuItem
                    key={item.name}
                    item={item}
                    onClick={() => this.props.selectMenuItem(item)}
                />
            );
        });
    }

    render() {
        if(!this.props.menu){
            return <div id="empty_selection">Select a Menu to get started.</div>
        }
        return(
            <div id="items" className="container-fluid col-sm-8">
                <h3>{this.props.menu.menu_type}</h3>
                <ul>
                    {this.renderMenuItems(this.props.menu.menu_items)}
                </ul>
                <AddMenuItem />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        menu:state.activeMenu
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectMenuItem: selectMenuItem}, dispatch)
}

export default connect( mapStateToProps, mapDispatchToProps )(MenuDetail);
