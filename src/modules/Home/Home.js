// @flow
import * as React from 'react';
import { NavBar} from '../../components/NavBar';
export class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            auth:false,
        }
    }

    
    handleAuth = (event) => {
        const { auth } = this.state;
        this.setState({
            auth:!auth,
        });
  };

    render() {
        const { auth } = this.state;
    return (
      <div>
        <NavBar auth={auth} handleAuth={this.handleAuth}></NavBar>
      </div>
    );
  };
};