import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="jumbotron jumbotron-fluid">
			<div className="container">
				<h1 className="display-4">Star Wars Blog!</h1>
				<p className="lead">
					Select one of the following buttons to read more about Star Wars characters and planets.
				</p>
				<Link to="/characters">
					<a className="btn btn-warning btn-lg" href="#" role="button">
						Characters
					</a>
				</Link>
				<Link to="/planets">
					<a className="btn btn-warning btn-lg ml-2" href="#" role="button">
						Planets
					</a>
				</Link>
			</div>
		</div>
	);
};
