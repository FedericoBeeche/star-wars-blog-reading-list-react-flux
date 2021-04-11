import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export const AccountCreation = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h1>FINALLY MADE IT HERE</h1>
		</div>
	);
};
