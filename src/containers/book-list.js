import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';


class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key ={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // first argument is a state, Whatever is returned form here (object) will show up as a props
  // inside of a book list
  return {
    books: state.books
  };
}
// Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed to all of our reducers
  // thats what bindActionCreators is doing here with dispatch. Dispatch receives all actions like a funnel and spits them to all reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

// Promote BookList from a component to a container - it needs to know about this new dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList); // connect takes a function i.e. (mapStateToProps) and a component i.e. (BookList) and produces a container
                                                                      // connect is a function called from react-redux library to forge a connection between component and redux to produce a container, imported on the top.
