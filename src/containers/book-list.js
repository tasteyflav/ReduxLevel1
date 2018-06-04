import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
	renderList(){
		return this.props.books.map((book) => {
			return (
				<li 
					key = {book.title} 
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
	// Whatever gets returned will show up as props
	// inside of Booklist
	return {
		books: state.books
	};
}

//Anything returned from this function will end up as props 
// on the BookList Container
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectBook: selectBook }, dispatch)
}

//Promote BookLIst from a component to a container
//It needs to know about this new dispath method, selectBook. Make it 
// available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);