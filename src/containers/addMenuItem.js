import React, { Component } from "react"
import { connect } from "react-redux"
import MenuItem from "../components/menu_item";

class AddMenuItem extends Component {

    render() {
        if(!this.props.item){
            return <div id="empty_preview_selection">Select an Item to get started.</div>
        }

        return(
            <div id="preview" className="container-fluid col-sm-8">
                <ul >
                    <MenuItem
                        key={this.props.item.name}
                        item={this.props.item}
                        onClick={""}
                    />
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        item: state.activeMenuItem
    }
}

export default connect( mapStateToProps )(AddMenuItem);
