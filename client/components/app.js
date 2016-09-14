import React from "react";
import {Link} from "react-router";

class App extends React.Component{

  render() {

    return(
      <div className="app">
        <div className="container-fluid">
          {React.Children.map(this.props.children, function(child) {
            return React.cloneElement(child);
          }.bind(this))}
        </div>
      </div>

    );

  }

};

App.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default App;
