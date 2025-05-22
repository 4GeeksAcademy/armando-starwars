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

                    const detailedCharacters = await Promise.all(
                        data.results.map(async (item) => {
                            const res = await fetch(item.url);
                            const details = await res.json();

                            const id = item.uid;
                            const image = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;

                            return {
                                id: id,
                                ...details.result.properties,
                                image
                            };
                        })
                    );

                    setStore({ characters: detailedCharacters });
                } catch (error) {
                    console.log(error);
                }
            },
            getPlanets: async () => {
                try {
                    const response = await fetch("https://swapi.tech/api/planets");
                    const data = await response.json();

                    const detailedPlanets = await Promise.all(
                        data.results.map(async (item) => {
                            const res = await fetch(item.url);
                            const details = await res.json();

                            const id = item.uid;
                            const image = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;

                            return {
                                id,
                                ...details.result.properties,
                                image
                            };
                        })
                    );

                    setStore({ planets: detailedPlanets });
                } catch (error) {
                    console.log(error);
                }
            },
            getVehicles: async () => {
                try {
                    const response = await fetch("https://swapi.tech/api/starships");
                    const data = await response.json();

                    const detailedVehicles = await Promise.all(
                        data.results.map(async (item) => {
                            const res = await fetch(item.url);
                            const details = await res.json();

                            const id = item.uid;
                            const image = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;

                            return {
                                id,
                                ...details.result.properties,
                                image
                            };
                        })
                    );

                    setStore({ vehicles: detailedVehicles });
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