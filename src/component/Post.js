import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from '../actions/createTabelAction';

class Post extends Component {
  	componentWillMount(){
		this.props.fetchBooks();
	}
	render() {
		const { post } = this.props;
		return( 
			<div className="post">
				<h1>One list</h1>
				<table>
					<thead>
					    <tr>
							<th width="25%">id</th>
							<th width="25%">Name</th>
							<th width="25%">Title</th>
					    </tr>
				    </thead>
					<tbody>
				    <tr>
						<td>{post.id}</td>
						<td>{post.title}</td>
						<td >{post.body}</td>
					</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

const mapStateToProps = state => {
  return {
    post: state
  };
};


export default connect(mapStateToProps, { fetchBooks })(Post);