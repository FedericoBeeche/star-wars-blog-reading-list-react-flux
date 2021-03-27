import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Planets = props => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<div className="container">
				<div className="card-columns m-5">
					{store.planets.map((item, index) => {
						return (
							<div className="card" style={{ width: 18 + "rem" }} key={index}>
								<img
									src="https://sm.ign.com/t/ign_za/gallery/e/every-plan/every-planet-and-location-in-star-wars-battlefront-2s-multip_uxzr.1080.jpg"
									className="card-img-top"
								/>
								<div className="card-body">
									<h3 className="card-title">{item.name}</h3>
									<p className="card-text">
										<span className="d-block">Population: {item.population}</span>
										<span className="d-block">Terrain type: {item.terrain}</span>
										<span className="d-block">Climate: {item.climate}</span>
									</p>
									<Link to={"/singlePlanets/" + index}>
										<span className="btn btn-primary btn-lg" href="#" role="button">
											Learn more!
										</span>
									</Link>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<Link to="/">
				<span className="btn btn-primary btn-lg ml-2" href="#" role="button">
					Back home
				</span>
			</Link>
		</>
	);
};
