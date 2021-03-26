import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleCharacters = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const character = store.characters[params.id];

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col">
						<img className="card-img-top" src="https://picsum.photos/200/300" />
					</div>
					<div className="col">
						<h1>{character.name}</h1>
						<p>
							Lucas ipsum dolor sit amet qui-gonn solo fett r2-d2 kit yavin aayla skywalker skywalker
							dagobah. Tatooine mandalore wampa bespin. Darth yoda organa skywalker antilles skywalker.
							Darth grievous skywalker hutt. Wedge kashyyyk organa zabrak organa obi-wan ackbar. Organa
							mothma sith mara aayla jango. Antilles jawa luke dagobah jabba palpatine wicket. Darth hutt
							ackbar watto antilles. Mace grievous aayla lando mace amidala dagobah antilles. Han antilles
							skywalker skywalker c-3po hutt dooku moff. Cade skywalker luuke skywalker mothma antilles
							windu ponda bothan.
						</p>
					</div>
				</div>
			</div>
			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</>
	);
};
