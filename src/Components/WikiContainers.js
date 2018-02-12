import React, {Component} from 'react';
import SearchBar from './SearchBar';
export default class WikiContainers extends Component{

    constructor(props){
        super(props);
        this.state = {
            titles:[],
            descriptions:[],
            links:[],
            inputVal:""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(e){
        e.preventDefault();
        this.setState({
            inputVal:e.target.value
        });

    }
    handleSubmit(e){
        e.preventDefault();
        const searchStr = this.state.inputVal;

        const url = `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=${searchStr}`;
        if(this.state.inputVal !==""){
        fetch(url)
        .then(res=>{
            return res.json();
        })
        .then(data =>{
            console.log(data);
            this.setState({
                titles:data[1],
                descriptions:data[2],
                links:data[3]
            });
        });
    }else{
        alert("Type Something");
    }
        

        
    }

   
    render(){
       
        return(
            <div>
                <SearchBar submit = {this.handleSubmit} change={this.handleChange}/>
               {this.state.titles.map((item, i)=>
            <div className="row">
                <div className="col s12">
                    <div className="card blue-grey darken-4">
                        <div className="card-content white-text">
                            <span className="card-title">{this.state.titles[i]}</span>
                            <div className="card-action">
                            <p>{this.state.descriptions[i]}</p>
                            </div>
                        </div>
                        <div>
                            <a href={this.state.links[i]} target="_blank" className="btn col s12">View in Wikipedia</a>
                        </div>
                    </div>
                </div>
            </div>
               )}
            </div>
        );
    }
}