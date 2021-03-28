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
			<div className="dropdown ml-auto dropleft">
				<button
					className="btn btn-warning dropdown-toggle"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown">
					Favorites
					<span className="badge badge-dark ml-1">{store.favorites.length}</span>
				</button>
				<div className="dropdown-menu text-center" aria-labelledby="dropdownMenuButton">
					{/* despues de esto voy a agregarle que linkee a la pagina del favorite */}
					{store.favorites.length > 0 ? (
						store.favorites.map((item, index) => {
							return (
								<a
									className="dropdown-item"
									key={index}
									onClick={() => {
										actions.deleteFavorites(index);
									}}
									href="#">
									{item.name}
									<i className="far fa-trash-alt ml-1" />
								</a>
							);
						})
					) : (
						<p className="text-center">Empty</p>
					)}
				</div>
			</div>
		</nav>
	);
};
