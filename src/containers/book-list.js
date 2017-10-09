import React, { Component } from "react"
import { connect } from "react-redux"
import { selectBook } from "../actions/index";
import { bindActionCreators } from "redux"

class BookList extends Component{

    renderList(){
        return this.props.books.map((book)=>{
            return(
                <li
                    key={book.title}
                    onClick={()=>this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
            )
        });
    }
    render(){
        return(
            <ul className="list-group col-sm-4">
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
        books:state.books
    }
}
/*
 * Anything return from this function will end up as props on the booklist container
 * */
function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectBook: selectBook}, dispatch)
}

/*
 * Promotes a Booklist from a component to a container.
 *
 * Make it available as props
 */
export default connect(mapStateToProps, matchDispatchToProps)(BookList);