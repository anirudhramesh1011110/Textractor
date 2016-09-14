import React from "react"
import Router from "react-router";
import {Link} from "react-router";

class ExtractBox extends React.Component {

  constructor() {
		super();
      this.state = {
        text: "",
        url: "",
        lang: "en",
        error: null
      }
	};

  _onChange(e) {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
  };

  _extract(e) {
    e.preventDefault();

    if(this.state.url.length > 0 && this.state.text.length > 0){
      this.setState({error: "Choose either Text or URL but not both!"});
    }else{
      this.setState({error: null});
      const payload = {};
      //Transform state to match Hapi payload.
      for(var state in this.state){
        payload[state] = this.state[state];
      }
      $.post('/extract', payload, (data, status, xhr) => {
        console.log(status);
        console.log(this.props);
        this.props.result(data);
        
      }, 'json');
    }


  };

  render() {
    //console.log(this.state);
    return(
      <div className="card card-extractBox">
          <h1>Extract Entities from Text or Website</h1>
           <p id="profile-name" className="profile-name-card" ></p>
           <form className="form-signin" method="POST" href="/extract" >
               <input type="text" id="text" className="form-control" name="text" placeholder="Text" onChange={this._onChange.bind(this)} />
               <input type="text" id="url" className="form-control" name="url" placeholder="URL" onChange={this._onChange.bind(this)} />

               <select className="languageChoice" name="lang" value={this.state.lang} onChange={this._onChange.bind(this)}>
                  <option value="en">English</option>
                  <option value="de">German</option>
                  <option value="fr">French</option>
                  <option value="it">Italian</option>
                  <option value="es">Spanish</option>
                  <option value="pt">Portuguese</option>
              </select>

              <button className="btn btn-lg btn-primary btn-block btn-extract" type="submit" onClick={this._extract.bind(this)}>Extract</button>
              <p className="error"><b>{this.state.error}</b></p>
           </form>
           <br />
       </div>
    );
  };
}

export default ExtractBox;
