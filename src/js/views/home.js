import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import Personas from "../component/Personas.jsx";
import Planets from "../component/Planets.jsx";
import Vehicles from "../component/Vehicles.jsx";

const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getCharacters();
		actions.getPlanets();
		actions.getVehicles();
	}, []);

	return (
		<div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
			<h2>Personajes</h2>
			<div className="my-5" style={{ display: "inline-block" }}>
				{store.characters.map((character, index) => (
					<div className="card mx-2" style={{ width: "18rem", display: "inline-block" }} key={index}>
						<Personas
							name={character.name}
							gender={character.gender}
							hair_color={character.hair_color}
							eye_color={character.eye_color}
						/>
					</div>
				))}
			</div>

			<h2>Planets</h2>
			<div className="my-5" style={{ display: "inline-block" }}>
				{store.planets.map((planet, index) => (
					<div className="card mx-2" style={{ width: "18rem", display: "inline-block" }} key={index}>
						<Planets
							name={planet.name}
							population={planet.population}
							terrain={planet.terrain}
							id={planet.id}
						/>
					</div>
				))}
			</div>

			<h2>Vehicles</h2>
			<div className="my-5" style={{ display: "inline-block" }}>
				{store.vehicles.map((vehicle, index) => (
					<div className="card mx-2" style={{ width: "18rem", display: "inline-block" }} key={index}>
						<Vehicles
							name={vehicle.name}
							passengers={vehicle.passengers}
							cargo_capacity={vehicle.cargo_capacity}
							id={vehicle.id}
							max_atmosphering_speed={vehicle.max_atmosphering_speed}
							model={vehicle.model}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Home;