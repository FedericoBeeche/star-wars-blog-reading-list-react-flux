const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			characters: [],
			planets: [],
			access_token: null
		},
		actions: {
			setLocalStorage: (characters, planets, favorites) => {
				setStore(JSON.parse(characters));
				setStore(JSON.parse(planets));
				setStore(JSON.parse(favorites));
			},

			syncTokenFromLocalStorage: () => {
				const token = localStorage.getItem("access_token");
				if (token && token != "" && token != undefined) setStore({ access_token: token });
			},

			login: async (email, password) => {
				const options = {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						email: email,
						password: password
					})
				};

				try {
					const response = await fetch(
						"https://3000-peach-crayfish-r59zxn0c.ws-us03.gitpod.io/login",
						options
					);
					if (response.status !== 200) {
						alert("There was an error");
						return false;
					}
					const data = await response.json();
					localStorage.setItem("accessToken", data.access_token);
					setStore({ access_token: data.access_token });
					return true;
				} catch (error) {
					console.error("There has been an error trying to log in.");
				}
			},

			getCharacters: async () => {
				const STAR_WARS_API_PEOPLE = "https://swapi.dev/api/people/";
				fetch(STAR_WARS_API_PEOPLE)
					.then(res => res.json())
					.then(data => {
						setStore({ characters: data.results });
						localStorage.setItem("characters", JSON.stringify({ characters: data.results }));
						console.table(data);
					})
					.catch(err => console.error(err));
			},

			getPlanets: async () => {
				const STAR_WARS_API_PLANETS = "https://swapi.dev/api/planets";
				fetch(STAR_WARS_API_PLANETS)
					.then(res => res.json())
					.then(data => {
						setStore({ planets: data.results });
						localStorage.setItem("planets", JSON.stringify({ planets: data.results }));
						console.table(data);
					})
					.catch(err => console.error(err));
			},

			addCharacterFavorite: id => {
				const store = getStore();

				let data = store.favorites.find(data => data.name == store.characters[id].name);

				if (data == undefined) {
					store.favorites.push(store.characters[id]);
					setStore(store);
					localStorage.setItem("favorites", JSON.stringify(store.favorites));
				}
			},

			addPlanetsFavorite: id => {
				const store = getStore();

				let data = store.favorites.find(dataPlanet => dataPlanet.name == store.planets[id].name);

				if (data == undefined) {
					store.favorites.push(store.planets[id]);
					setStore(store);
					localStorage.setItem("favorites", JSON.stringify(store.favorites));
				}
			},

			deleteFavorites: id => {
				const store = getStore();

				store.favorites.splice(id, 1);
				setStore(store);
				localStorage.setItem("favorites", JSON.stringify(store.favorites));
			}
		}
	};
};

export default getState;
