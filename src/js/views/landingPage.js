import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export const LandingPage = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="d-flex mx-auto loginContainer">
				<div className="loginForm">
					<h1>Create account</h1>
					<h2>Username</h2>
					<input className="inputLogin" type="text" placeholder="your@email.com" />
					<h2>Password</h2>
					<input className="inputLogin" type="password" placeholder="Password" />
					<br />
					<span className="btn btn-warning btn-lg ml-2 mt-3 btnCreate" href="#" role="button">
						Create
					</span>
					<h3>
						<small>
							Already have an account? Sign in{" "}
							<Link to="/signIn/">
								<a>here</a>
							</Link>
						</small>
					</h3>
				</div>
			</div>
		</div>
	);
};
