import react, {useState} from 'react';

class SearchBar extends react.Component {

	state = { searchText: '' };

	handleTextChange = (e) => {
		this.setState({
			searchText: e.target.value,
		})
	}

	// 이거하면 검색창에서 엔터 눌러도 새고로침 안됨
	handleSubmit = (e) => {
		e.preventDefault();

		// TODO: make sure we call
		// callback from parent component
		this.props.handleSubmit(this.state.searchText)
	}
	
	render() {
		return (
			<div className="serach-bar ui segment">
				<form onSubmit={this.handleSubmit} className="ui form">
					<div className="field">
						<label>SerachBar is here!</label>
						<input 
							value={this.state.searchText} 
							type="text"
							onChange={this.handleTextChange}
						></input>
					</div>
				</form>
			</div>
		);
	}
}
/* 
const SearchBar = () => {
	const [text, setText] = useState('');

	const handleTextChange = (e) => {
		setText(e.target.value)
	}

	return (
		<div className="ui segment">
				<form className="ui form">
					<div className="field">
						<label>SerachBar is here!</label>
						<input 
							type="text"
							value={text}
							onChange={handleTextChange}
						></input>
					</div>
				</form>
			</div>
	);
}
 */
export default SearchBar;