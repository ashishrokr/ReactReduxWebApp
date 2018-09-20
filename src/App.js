import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/common/Header";
import HomePage from "./components/home/HomePage";
import CoursePage from "./components/course/CoursePage";
import ManageCoursePage from "./components/course/ManageCoursePage";
import AboutPage from "./components/about/AboutPage";
import NotFound from "./components/NotFound";
import Login from "./components/Login/Login";
import requireAuth from "../src/components/requireAuth";
import signOut from "../src/components/signOut";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="container-fluid">
					<Header />
					<Switch>
						<Route exact path="/" component={Login} />
						<Route path="/home" component={requireAuth(HomePage)} />
						<Route path="/signOut" component={signOut} />
						<Route path="/courses" component={requireAuth(CoursePage)} />
						<Route path="/course" component={requireAuth(ManageCoursePage)} />
						<Route
							path="/courses/:id"
							component={requireAuth(ManageCoursePage)}
						/>
						<Route path="/about" component={AboutPage} />
						<Route component={NotFound} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
