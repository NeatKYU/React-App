import React from 'react';
import { connect } from 'react-redux';

class SongList extends React.Component {
	renderList() {
		return this.props.songs.map(song => {
			return (
				<div className="item" key={song.title}>
					<div className="right floated content">
						<button className="ui button primary">
							Select
						</button>
					</div>
					<div className="content">{song.title}</div>
				</div>
			)
		})
	}
	render(){
		return <div className="ui divided list">{this.renderList()}</div>
	};
};

const mapStateToProps = state => {
	return { 
		songs: state.songs,
	}
}

// ()()는 함수안의 함수를 실행시키는것
export default connect(mapStateToProps)(SongList);