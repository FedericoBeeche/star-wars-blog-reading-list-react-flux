import React, { useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="card" style={{ width: 18 + "rem" }}>
				<img src="..." className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">Card Text</p>
					<a href="#" className="btn btn-primary">
						Learn more!
					</a>
				</div>
			</div>
			;
		</>
	);
};
