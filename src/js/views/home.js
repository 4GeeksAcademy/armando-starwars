import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import Personas from "../component/Personas.jsx";
import Planetas from "../component/Planetas.jsx";
import Vehiculos from "../component/Vehiculos.jsx";
import "../../styles/home.css";

const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getCharacters();
		actions.getPlanets();
		actions.getVehicles();
	}, []);

	return (
		<div>
			<h2 className="section-title">Personajes</h2>
			<div className="card-section">
				{store.characters.map((character, index) => (
					<div className="card mx-2" style={{ width: "18rem", display: "inline-block" }} key={index}>
						<Personas
							id={character.id}
							name={character.name}
							gender={character.gender}
							hair_color={character.hair_color}
							eye_color={character.eye_color}
							image={character.image}
						/>
					</div>
				))}
			</div>

			<h2 className="section-title">Planetas</h2>
			<div className="card-section">
				{store.planets.map((planet, index) => (
					<div className="card mx-2" style={{ width: "18rem", display: "inline-block" }} key={index}>
						<Planetas
							name={planet.name}
							population={planet.population}
							terrain={planet.terrain}
							id={planet.id}
							image={planet.image}
						/>
					</div>
				))}
			</div>

			<h2 className="section-title">Vehiculos</h2>
			<div className="card-section">
				{store.vehicles.map((vehicle, index) => (
					<div className="card mx-2" style={{ width: "18rem", display: "inline-block" }} key={index}>
						<Vehiculos
							name={vehicle.name}
							passengers={vehicle.passengers}
							cargo_capacity={vehicle.cargo_capacity}
							id={vehicle.id}
							max_atmosphering_speed={vehicle.max_atmosphering_speed}
							model={vehicle.model}
							image={vehicle.image}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Home;