import react, { useState } from 'react';

const SearchBar = ({ handleSubmit }) => {
	const [searchText, setSearchText] = useState('');

	const handleTextChange = (e) => {
		setSearchText(e.target.value);
	}

	const onSubmit = (e) => {
		e.preventDefault();
		handleSubmit(searchText);
	}

	return (
		<div className="serach-bar ui segment">
			<form onSubmit={onSubmit} className="ui form">
				<div className="field">
					<label>SerachBar is here!</label>
					<input 
						value={searchText} 
						type="text"
						onChange={handleTextChange}
					></input>
				</div>
			</form>
		</div>
	);
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