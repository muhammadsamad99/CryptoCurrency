import React, {Component} from "react";

class Search extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        const searchResults = this.props.searchResults.map((currency)=> (
            <li key={currency.id} className="currency-list-item" data-id={currency.id} onClick={this.props.handleSelect}>
                <a href="#" className="currency">
                    <span>{currency.name}</span>
                    <span className="currency_symbol">{currency.currency_symbol}</span>
                </a>
            </li>
        ))
        return ( 
            <div>
                <h1>CryptoCurrency Portfolio Calculator</h1>
                <form>
                    <div className="form-group">
                        <label>Search for CrptoCurrency</label>
                        <input  autoComplete="true" 
                                type="text" name="name" 
                                placeholder="Ex: Bitcoin Litcoin Ethereum" 
                                value={this.props.name} className="field"
                                onChange={this.props.handleChange} />
                    </div>
                </form>
                <div className="currency-list">{searchResults}</div>
            </div>
         );
    }
}
 
export default Search;