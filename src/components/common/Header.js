import React,{Component} from 'react';
import { NavLink } from 'react-router-dom';
import LoadingDots from './LoadingDots';
import {connect} from 'react-redux';
class  Header extends Component {
  navbarLinks() {
   if (this.props.authenticated) {
     return [
     <nav>
     <NavLink to="/home" exact activeClassName="activHeader">Home</NavLink>
     {" | "}
     <NavLink to="/courses" activeClassName="activHeader">Courses</NavLink>
      {" | "}
     <NavLink to="/about" activeClassName="activHeader">About</NavLink>
        {" | "}
    <NavLink to="/signOut" activeClassName="activHeader">Sign Out</NavLink>
     </nav>
   ]
   }
 }

  render(){
  return (
    <div>
      {this.navbarLinks()}
    </div>
  );
}
}


function mapStateToProps(state) {
  return {
    authenticated: state.login.authenticated
  };
}

export default connect(mapStateToProps)(Header);
