import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Planets } from "./views/planets";
import { Characters } from "./views/characters";
import { SingleCharacters } from "./views/singleCharacters";
import { SinglePlanets } from "./views/singlePlanets";
import { LandingPage } from "./views/landingPage";
import { SignIn } from "./views/signIn";
import injectContext from "./store/appContext";
import { Link } from "react-router-dom";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/landingPage/">
							<LandingPage />
						</Route>
						<Route exact path="/signIn/">
							<SignIn />
						</Route>
						<Route exact path="/planets/">
							<Planets />
						</Route>
						<Route exact path="/characters/">
							<Characters />
						</Route>
						<Route exact path="/singleCharacters/:id">
							<SingleCharacters />
						</Route>
						<Route exact path="/singlePlanets/:id">
							<SinglePlanets />
						</Route>
						<Route>
							<h1 className="ml-2">Woops! Page not found</h1>
							<Link to="/home">
								<span className="btn btn-warning btn-lg ml-2" href="#" role="button">
									Go back home
								</span>
							</Link>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
