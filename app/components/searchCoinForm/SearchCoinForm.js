import '../../style/globals.css';
import './searchCoinForm.css'

const SearchCoinForm = () => {
    return (
        <form className="search__coin_form">
             <input
                 className="search__input"
                 type="text"
                 placeholder="Search coin..."
             />
        </form>
    )
}

export default SearchCoinForm;