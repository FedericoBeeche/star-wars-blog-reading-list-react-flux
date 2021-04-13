import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export const LandingPage = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleClick = () => {
		const options = {
			method: "POST",
			body: JSON.stringify({
				email: email,
				password: password
			})
		};

		fetch("https://3000-peach-crayfish-r59zxn0c.ws-us03.gitpod.io/login", options)
			.then(response => {
				if (response.status === 200) return response.json();
				else alert("There was an error");
			})
			.then()
			.catch(error => {
				console.log("Error: ", error);
			});
	};

	return (
		<div className="container">
			<div className="loginContainer">
				<div className="loginForm">
					<h1>Create account</h1>
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
