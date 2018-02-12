import React, {Component} from 'react';

class SearchBar extends Component{
render(){
    return(
        <form onSubmit={this.props.submit}>
            <div className="input-field row">
                <input type="text" placeholder ="Type here..." className="col s8" onChange={this.props.change}/>
                <button className="btn btn-primary col s3">Search</button>
            </div>
        </form>
    );
}
}
export default SearchBar;