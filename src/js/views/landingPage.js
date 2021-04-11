import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export const LandingPage = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="generalContainer d-flex">
			<div className="container d-flex">
				<div className="row d-flex align-items-center justify-content-center loginContainer">
					{/* left row */}
					<div className="col-2" />
					<div className="col-4 loginForm">
						<h1 className="h1Welcome">Welcome!</h1>
						<h2>Create account</h2>
						<span>
							<small>
								Already have an account? Sign in{" "}
								<Link to="/accountCreation/">
									<a>here</a>
								</Link>
							</small>
						</span>
						<input type="text" placeholder="your@email.com" />
						<input type="password" placeholder="Password" />
					</div>
					<div className="col-4 loginRightBox">
						<img
							className="imgLoginBox"
							src="https://www.laboratorioti.com/wp-content/uploads/2015/04/darth-vader-1280x720.jpg"
						/>
					</div>
					{/* right row */}
					<div className="col-2" />
				</div>
			</div>
		</div>
	);
};
