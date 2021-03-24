const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			characters: [],
			planets: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },

			getCharacters: () => {
				const STAR_WARS_API_PEOPLE = "https://www.swapi.tech/api//people/";

				fetch(STAR_WARS_API_PEOPLE, {})
					.then(res => {
						return res.json();
					})
					.then(data => {
						console.log(`Lista de personajes ${data}`);
						console.table(data);
					})
					.catch(err => {
						console.error(`Errors: ${err}`);
					});
			},

			//esta es un ejemplo del boilerplate
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
