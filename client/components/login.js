import React from "react";
import Router from "react-router";
import {Link} from "react-router";

class Login extends React.Component{

  constructor() {
		super();
      this.state = {
        email: null,
        password: null,
        errorMsg: null
      }
	};

  _onChange(e) {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
  };

  _login(e) {
    e.preventDefault();
    const payload = {};

    for(var state in this.state){
      payload[state] = this.state[state];
    }


    $.ajax({
      url: '/login',
      dataType: 'json',
      type: 'POST',
      data: payload,
      success: function(data) {
        console.log("Success", data);
      }.bind(this),
      error: function(xhr, status, err) {
        console.log('error', err, status, xhr);
			}.bind(this)

    });
  };

  render() {
    //console.log(this.state);
    return (
      <div className="container" >
            <h1> Please Sign In </h1>
            <div className="card card-container" >
                 <img id="profile-img" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"  />
                 <p id="profile-name" className="profile-name-card" ></p>
                 <form className="form-signin" method="POST" href="/login" >
                     <input type="email" id="email" className="form-control" name="email" placeholder="Email address" onChange={this._onChange.bind(this)} required />
                     <input type="password" id="password" className="form-control" name="password" placeholder="Password" onChange={this._onChange.bind(this)} required />
                     <div id="remember" className="checkbox">
                         <label>
                             <input type="checkbox" value="remember-me" /> Remember me
                         </label>
                     </div>
                      <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit" onClick={this._login.bind(this)}>Sign In</button>
                 </form>
                 <br />
             </div>
         </div>
    );
  }
};

export default Login;
