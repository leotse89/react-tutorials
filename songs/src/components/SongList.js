import React from 'react';
import {connect} from 'react-redux';
import {selectedSong} from '../actions';

class SongList extends React.Component{

	renderList(){
		return this.props.songs.map((song)=>{
			return (
				<div className="item" key={song.title}>
					<div className="content">
						<div className="header"><strong>{song.title}</strong></div>
						Length: {song.duration}
						<button 
							className="ui button primary"
							onClick={() => this.props.selectedSong(song)}
						>
							Select
						</button>
					</div>
					<hr/>
				</div>
			);
		});
	}

	render(){
		//this.props === {songs: state.songs}
		//console.log(this.props);
		return (
			<div className="relaxed divided list">{this.renderList()}</div>
		);
	}
}

const mapStateToProps = state => {
	console.log(state);

	return {songs: state.songs};
}

export default connect(mapStateToProps, {
	selectedSong
})(SongList);