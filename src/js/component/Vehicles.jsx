import React from "react";
import vehicleData from "../../img/vehicle.json";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../styles/home.css";

const Vehicles = ({ name, passengers, cargo_capacity, max_atmosphering_speed, id, model }) => {

    const vehicleImage = vehicleData?.vehicles?.find(vehicle => vehicle.id === id)?.image || "https://via.placeholder.com/300";

    return (
        <div className="text-center mt-5">
            <div className="card" style={{ width: "18rem" }}>
            <img src={vehicleImage} className="card-img-top" alt={name} style={{ height: "25rem" }} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Passengers: {passengers}</p>
                    <p className="card-text">Cargo Capacity: {cargo_capacity}</p>
                    <p className="card-text">Max speed: {max_atmosphering_speed}</p>
                    <p className="card-text">Model: {model}</p>
                    <div className="d-flex justify-content-between">
                        <a href="#" className="btn btn-primary">Más información</a>
                        <button
                            className="btn btn-outline-warning"
                            onClick={() => {
                                actions.addFavorite(name);
                            }}
                        >
                            <i className="fa-regular fa-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vehicles;