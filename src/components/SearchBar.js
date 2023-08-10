import './SearchBar.css';
import { useState } from "react";

function SearchCar({ onSubmit }){

    const [term, setTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
    };

    const handleInputBox = (e) => {
        setTerm(e.target.value);
    };

    return(
        <div className='search-bar'>
            <label>Searching Images Website</label>
            <form onSubmit= {handleFormSubmit}>
                <input onChange={handleInputBox} placeholder='search here..'/>
            </form>
        </div>
    );
}

export default SearchCar;
