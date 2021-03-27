import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light mb-3">
			<Link to="/">
				<img
					src="http://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG32.png"
					className="navbar-brand mb-0 h1 logoSW"
				/>
			</Link>
			<div className="btn-group dropleft">
				<button
					type="button"
					className="btn btn-secondary dropdown-toggle"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Favorites
					<span className="badge badge-light ml-1 botoncito">{store.favorites.length}</span>
				</button>
				<div className="dropdown-menu">Dropdown links</div>
			</div>
		</nav>
	);
};
