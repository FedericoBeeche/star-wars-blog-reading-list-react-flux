const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			characters: [],
			planets: []
		},
		actions: {
			getCharacters: async () => {
				const STAR_WARS_API_PEOPLE = "https://swapi.dev/api/people/";
				fetch(STAR_WARS_API_PEOPLE)
					.then(res => res.json())
					.then(data => {
						setStore({ characters: data.results });
						console.table(data);
					})
					.catch(err => console.error(err));
			},

			getPlanets: async () => {
				const STAR_WARS_API_PLANETS = "https://swapi.dev/api/planets/";
				fetch(STAR_WARS_API_PLANETS)
					.then(res => res.json())
					.then(data => {
						setStore({ planets: data.results });
						console.table(data);
					})
					.catch(err => console.error(err));
			},

			addCharacterFavorite: id => {
				const store = getStore();

				let obj = store.favorites.find(obj => obj.name == store.characters[id].name);

				if (obj == undefined) {
					store.favorites.push(store.characters[id]);
					setStore(store);
				}
			},

			addPlanetsFavorite: id => {
				const store = getStore();

				let obj = store.favorites.find(objPlanet => objPlanet.name == store.planets[id].name);

				if (obj == undefined) {
					store.favorites.push(store.planets[id]);
					setStore(store);
				}
			},

			deleteFavorites: id => {
				const store = getStore();

				store.favorites.splice(id, 1);
				setStore(store);
			}

			// Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },

			// //esta es un ejemplo del boilerplate
			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
			// 	setStore({ demo: demo });
			//}
		}
	};
};

export default getState;
