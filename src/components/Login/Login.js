import React from "react";
import TextInput from "../common/TextInput";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as loginActions from "../../actions/loginActions";

class Login extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.onLogin = this.onLogin.bind(this);
	}

	onLogin(values) {
		this.props.actions.onLogin(values, this.props.history);
	}

	errorMessage() {
		if (this.props.errorMessage) {
			return <div className="info-red">{this.props.errorMessage}</div>;
		}
	}

	render() {
		const { handleSubmit, submitting, pristine } = this.props;
		return (
			<div className="simple-page-wrap">
				<div className="simple-page-content mb-4">
					<div className="simple-page-form animated flipInY">
						<h6 className="form-title mb-4 text-center">
							Sign In With Your Account
						</h6>
						<form>
							<div className="form-group">
								<Field
									name="email"
									component={TextInput}
									className="form-control"
									label="Email"
								/>
							</div>
							<div className="form-group">
								<Field
									name="password"
									component={TextInput}
									className="form-control"
									label="Password"
								/>
							</div>
							<button
								type="submit"
								className="btn btn-primary"
								disabled={pristine || submitting}
								onClick={handleSubmit(this.onLogin)}>
								Sign In
							</button>
						</form>
					</div>

					<div className="text-center">
						<p>
							<a href="password-forget.html" className="text-white">
								FORGOT YOUR PASSWORD ?
							</a>
						</p>
					</div>
					{this.errorMessage()}
				</div>
			</div>
		);
	}
}

Login = reduxForm({
	form: "LoginForm"
})(Login);

function mapStateToProps(state, ownProps) {
	return { errorMessage: state.login.error };
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(loginActions, dispatch)
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login);
