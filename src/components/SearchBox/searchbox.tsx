import './searchbox.css'
const SearchBox = () => {
    return (
        <div id="search-box">
            <label htmlFor="search-field">Search: </label>
            <input type="search" id="search-field" list="quick-nav" />
            <datalist id="quick-nav">
                <option value="Projects" />
                <option value="MVP" />
                <option value="Restaurant Management" />
                <option value="Secure Band" />
                <option value="Skills" />
                <option value="Programming" />
                <option value="Database" />
                <option value="Tools" />
            </datalist>
        </div>
    )
}

export default SearchBox