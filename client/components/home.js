import React from "react"
import Router from "react-router";
import {Link} from "react-router";

import ExtractBox from './extractBox';
import SearchBox from './searchBox';



class Home extends React.Component {

	constructor() {
		super();
			this.state = {
				result: null
			}
	};

	_getResult(data) {
		this.setState({result: data});
	};

	render() {

		console.log(this.state);

		if(this.state.result){
			//Display results of Extraction.
			if(this.state.result.entities){
				var entities = this.state.result.entities;
				$('#res').append("<h3>Extraction Result: </h3>");
				for(var e in entities) {
					var s = "<p><b>" + e + ": " + "</b></p>";
					$('#res').append(s);
					$('#res').append("<p>" + entities[e] + "</br>" + "</p>");
					$('#res').append('</br>');
				}
			//Diplay results of search.
			}else{
				if(this.state.result[0] === undefined){
					$('#res').append("Search returned no results");
					$('#res').append("<p></p>");
				}else{
					$('#res').append("<p>Search Returned (Limit 2000 Chars): </p>");
					$('#res').append(this.state.result[0] + "...");
					$('#res').append("<p></p>");
				}

			}
		}

		return(

			<div className="container">
				<div className="row">
					<div className="col-sm-6">
						<ExtractBox result={this._getResult.bind(this)} />
					</div>
					<div className="col-sm-6">
						<SearchBox result={this._getResult.bind(this)} />
					</div>
				</div>
				 <div className="card extractResults">
				 		<h2> RESULTS</h2>
						<div id="res"></div>
				 </div>
			</div>


		);
	}
}

export default Home;
