const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            characters: [],
            planets: [],
            vehicles: [],
            favorites: []
        },
        actions: {
            getCharacters: async () => {
                try {
                    const response = await fetch("https://swapi.tech/api/people");
                    const data = await response.json();

                    const charactersWithId = data.results.map(item => ({
                        name: item.name,
                        uid: item.uid,
                        id: parseInt(item.uid)
                    }));

                    setStore({ characters: charactersWithId });
                } catch (error) {
                    console.log(error);
                }
            },
            getPlanets: async () => {
                try {
                    const response = await fetch("https://swapi.tech/api/planets");
                    const data = await response.json();

                    const planetsWithId = data.results.map(item => ({
                        name: item.name,
                        uid: item.uid,
                        id: parseInt(item.uid)
                    }));

                    setStore({ planets: planetsWithId });
                } catch (error) {
                    console.log(error);
                }
            },
            getVehicles: async () => {
                try {
                    const response = await fetch("https://swapi.tech/api/starships");
                    const data = await response.json();

                    const vehiclesWithId = data.results.map(item => ({
                        name: item.name,
                        uid: item.uid,
                        id: parseInt(item.uid)
                    }));

                    setStore({ vehicles: vehiclesWithId });
                } catch (error) {
                    console.log(error);
                }
            },
            addFavorite: (item) => {
                const store = getStore();

                const isAlreadyFavorite = store.favorites.some(fav => fav.name === item.name);

                if (!isAlreadyFavorite) {
                    setStore({ favorites: [...store.favorites, item] });
                }
            },
            removeFavorite: (favName) => {
                const store = getStore();
                const updatedFavorites = store.favorites.filter(fav => fav.name !== favName);
                setStore({ favorites: updatedFavorites });
            }
        }
    };
};

export default getState;