import react from 'react';

class SearchBar extends react.Component {

	state = { term: '' };

/*
	onInputChange(e){
		console.log(e.target.value);
	}
 */
	onFormSubmit = e => {
		e.preventDefault();
		
		console.log(this.state.term)
	}

	render() {
		return (
			<div className="ui segment">
				<form 
					className="ui form" 
					onSubmit={this.onFormSubmit}
				>
					<div className="field">
						<label>Image Search</label>
						<input 
							type="text" 
							value={this.state.term}
							onChange={(e) => this.setState({ term: e.target.value })}
						/>
					</div>
				</form>
			</div>
		)
	}
};

export default SearchBar;