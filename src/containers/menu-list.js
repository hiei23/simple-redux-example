import React, { Component } from "react"
import { connect } from "react-redux"
import { selectMenu } from "../actions/index";
import { bindActionCreators } from "redux"

class MenuList extends Component{

    renderList(){
        return this.props.menus.map((menu)=>{
            const source = require(`../assets/images/${menu.icon}`)
            return(
                <li
                    key={menu.menu_type}
                    onClick={() => this.props.selectMenu(menu)}
                    className="list-group-item">
                    <span className="menu_icon"><img src={source} alt="" height="30" width="30"/></span>
                    { menu.menu_type }
                </li>
            )
        });
    }
    render(){
        return(
            <ul id="menu-list" className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    /*
     whaever is returned will show up as props
     */
    return{
        menus:state.menus
    }
}
/*
 * Anything return from this function will end up as props on the booklist container
 * */
function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectMenu: selectMenu}, dispatch)
}

/*
 * Promotes a Booklist from a component to a container.
 *
 * Make it available as props
 */
export default connect(mapStateToProps, matchDispatchToProps)(MenuList);
