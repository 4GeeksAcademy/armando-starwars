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
                    const response = await fetch("https://swapi.dev/api/people");
                    const data = await response.json();
                    setStore({ characters: data.results });
                } catch (error) {
                    console.log(error);
                }
            },
            getPlanets: async () => {
                try {
                    const response = await fetch("https://swapi.dev/api/planets");
                    const data = await response.json();
                    setStore({ planets: data.results });
                } catch (error) {
                    console.log(error);
                }
            },
            getVehicles: async () => {
                try {
                    const response = await fetch("https://swapi.dev/api/starships");
                    const data = await response.json();
                    setStore({ vehicles: data.results });
                } catch (error) {
                    console.log(error);
                }
            },
            addFavorite: (favoriteItem) => {
                const store = getStore();
                store.favorites.push(favoriteItem);
                setStore({ favorites: store.favorites });
            },
            removeFavorite: (deletedFavorite) => {
                const store = getStore();
                const updatedFavorites = store.favorites.filter(
                    (item) => item !== deletedFavorite
                );
                setStore({ favorites: updatedFavorites });
            }
        }
    };
};

export default getState;