import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import planetData from "../../json/planets.json";
import defaultImg from "../../img/default.jpg";

const DetallesPlanetas = () => {
    const { planetId } = useParams(); 
    const [planet, setPlanet] = useState(null);
    const adjustedId = parseInt(planetId);
    
    const image = planetData.planets.find(p => p.id === adjustedId)?.image || defaultImg;

    useEffect(() => {
        const fetchPlanet = async () => {
            try {
                const response = await fetch(`https://swapi.tech/api/planets/${planetId}`);
                const data = await response.json();
                setPlanet(data.result.properties);
            } catch (error) {
                console.error("Error fetching planet:", error);
            }
        };

        fetchPlanet();
    }, [planetId]);

    if (!planet) {
        return (
            <div className="text-center">
                <p>Loading planet...</p>
                <img src="https://i.gifer.com/4V0b.gif" alt="Loading..." width="50" />
            </div>
        );
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card shadow-lg p-4 bg-dark text-light" style={{ maxWidth: "720px", width: "100%" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img 
                            src={image}
                            className="img-fluid rounded-start" 
                            alt={planet.name}
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                    </div>
                    <div className="col-md-8 d-flex flex-column justify-content-center">
                        <div className="card-body">
                            <h2 className="card-title text-center text-warning fw-bold">{planet.name}</h2>
                            <hr className="border-light" />
                            <p className="card-text"><strong>Rotation:</strong> <span className="text-info">{planet.rotation_period}</span></p>
                            <p className="card-text"><strong>Orbital Period:</strong> <span className="text-info">{planet.orbital_period}</span></p>
                            <p className="card-text"><strong>Diameter:</strong> <span className="text-info">{planet.diameter}</span></p>
                            <p className="card-text"><strong>Climate:</strong> <span className="text-info">{planet.climate}</span></p>
                            <p className="card-text"><strong>Gravity:</strong> <span className="text-info">{planet.gravity}</span></p>
                            <p className="card-text"><strong>Terrain:</strong> <span className="text-info">{planet.terrain}</span></p>
                            <p className="card-text"><strong>Population:</strong> <span className="text-info">{planet.population}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetallesPlanetas;