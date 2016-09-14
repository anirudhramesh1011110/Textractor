import React from "react"
import Router from "react-router";
import {Link} from "react-router";

class SearchBox extends React.Component {

  constructor() {
    super();
      this.state = {
        param: null
      }
  };

  _onChange(e) {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
  };

  _search(e) {
    e.preventDefault();
    const payload = {};
    //Transform state to match Hapi payload.
    for(var state in this.state){
      payload[state] = this.state[state];
    }
    $.post('/search', payload, (data, status, xhr) => {
      console.log(status);
      this.props.result(data);
    }, 'json');
  }


  render() {
    return (

      <div className="card card-searchBox">
        <h1>Search Entities from History</h1>
        <input type="text" id="param" className="form-control" name="param" placeholder="Enter Search Param" onChange={this._onChange.bind(this)} />
        <button className="btn btn-lg btn-primary btn-block btn-search" type="submit" onClick={this._search.bind(this)}>Search</button>
      </div>
    );

  }

}
export default SearchBox;
