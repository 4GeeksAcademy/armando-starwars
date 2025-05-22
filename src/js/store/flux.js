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
                            const res = await fetch(`https://swapi.tech/api/people/${item.uid}`);
                            const details = await res.json();

                            const localData = await import("../../json/people.json");
                            const imageObj = localData.people.find(p => p.id === parseInt(item.uid));

                            return {
                                id: parseInt(item.uid),
                                name: item.name,
                                gender: details.result.properties.gender,
                                hair_color: details.result.properties.hair_color,
                                eye_color: details.result.properties.eye_color,
                                image: imageObj?.image || "/img/default.jpg"
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
                            const res = await fetch(`https://swapi.tech/api/planets/${item.uid}`);
                            const details = await res.json();

                            const localData = await import("../../json/planets.json");
                            const imageObj = localData.planets.find(p => p.id === parseInt(item.uid));

                            return {
                                id: parseInt(item.uid),
                                name: details.result.properties.name,
                                population: details.result.properties.population,
                                terrain: details.result.properties.terrain,
                                image: imageObj?.image || "/img/default.jpg"
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
                            const res = await fetch(`https://swapi.tech/api/starships/${item.uid}`);
                            const details = await res.json();

                            const localData = await import("../../json/vehicles.json");
                            const imageObj = localData.vehicles.find(v => v.id === parseInt(item.uid));

                            return {
                                id: parseInt(item.uid),
                                name: details.result.properties.name,
                                model: details.result.properties.model,
                                passengers: details.result.properties.passengers,
                                cargo_capacity: details.result.properties.cargo_capacity,
                                max_atmosphering_speed: details.result.properties.max_atmosphering_speed,
                                image: imageObj?.image || "/img/default.jpg"
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