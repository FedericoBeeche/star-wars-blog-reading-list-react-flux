import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export const LandingPage = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const history = useHistory();

	// const token = localStorage.getItem("accessToken"); not needed any more since the token is now saved into the store.

	const handleClick = () => {
		actions.login(email, password);
	};

	if (store.token && store.token != "" && store.token != undefined) history.push("/");

	return (
		<div className="container">
			<div className="loginContainer">
				<div className="loginForm">
					{store.token && store.token != "" && store.token != undefined ? (
						"You are logged in with this token: " + store.token
					) : (
						<div>
							<h1>Sign in</h1>
							<h2>Username</h2>
							<input
								className="inputLogin"
								type="text"
								value={email}
								placeholder="your@email.com"
								onChange={e => setEmail(e.target.value)}
							/>
							<h2>Password</h2>
							<input
								className="inputLogin"
								type="password"
								value={password}
								placeholder="Password"
								onChange={e => setPassword(e.target.value)}
							/>
							<br />
							<span
								className="btn btn-warning btn-lg ml-2 mt-3 btnCreate"
								href="#"
								role="button"
								onClick={handleClick}>
								Create
							</span>
							<h3>
								<small>
									Need an account? Click{" "}
									<Link to="/signIn/">
										<a>here</a>
									</Link>
									to create account.
								</small>
							</h3>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
