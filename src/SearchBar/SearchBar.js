import React from 'react';
import './style.css';

function Form(props) {
    const { handleSearchInput } = props;

    const handleInput = (e) => {
        handleSearchInput(e.target.value);
    }


    return (
        <div className="searchBarContainer">
            <form className="formContainer">
                <input
                    type="text"
                    placeholder="Search movies here..."
                    onChange={handleInput}
                />
            </form>
        </div>
    );
}

export default Form;