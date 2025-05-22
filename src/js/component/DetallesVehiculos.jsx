import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DetallesVehiculos = () => {
    const { vehicleId } = useParams(); 
    const [vehicle, setVehicle] = useState(null);
    const image = `https://starwars-visualguide.com/assets/img/starships/${vehicleId}.jpg`;

    useEffect(() => {
        const fetchVehicle = async () => {
            try {
                const response = await fetch(`https://swapi.tech/api/starships/${vehicleId}/`);
                const data = await response.json();
                setVehicle(data.result.properties);
            } catch (error) {
                console.error("Error fetching vehicle:", error);
            }
        };

        fetchVehicle();
    }, [vehicleId]);

    if (!vehicle) {
        return (
            <div className="text-center">
                <p>Loading vehicle...</p>
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
                            alt={vehicle.name}
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                    </div>
                    <div className="col-md-8 d-flex flex-column justify-content-center">
                        <div className="card-body">
                            <h2 className="card-title text-center text-warning fw-bold">{vehicle.name}</h2>
                            <hr className="border-light" />
                            <p className="card-text"><strong>Model:</strong> <span className="text-info">{vehicle.model}</span></p>
                            <p className="card-text"><strong>Manufacturer:</strong> <span className="text-info">{vehicle.manufacturer}</span></p>
                            <p className="card-text"><strong>Passengers:</strong> <span className="text-info">{vehicle.passengers}</span></p>
                            <p className="card-text"><strong>Speed:</strong> <span className="text-info">{vehicle.max_atmosphering_speed}</span></p>
                            <p className="card-text"><strong>Class:</strong> <span className="text-info">{vehicle.starship_class}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetallesVehiculos;