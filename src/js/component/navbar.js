import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Star Wars</span>
			</Link>
			<div className="btn-group dropleft">
				<button
					type="button"
					className="btn btn-secondary dropdown-toggle"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Favorites
					<span className="badge badge-light ml-1">{store.favorites.length}</span>
				</button>
				<div className="dropdown-menu">Dropdown links</div>
			</div>
		</nav>
	);
};
