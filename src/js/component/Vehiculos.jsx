import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../styles/home.css";

const Vehiculos = ({ name, passengers, cargo_capacity, max_atmosphering_speed, id, model, image }) => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const handlerDetail = () => {
        navigate(`/vehicle/${id}`);
    };

    return (
        <div className="text-center mt-5">
            <div className="card" style={{ width: "18rem" }}>
                <img src={image} className="card-img-top" alt={name} style={{ height: "25rem" }} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Passengers: {passengers}</p>
                    <p className="card-text">Cargo Capacity: {cargo_capacity}</p>
                    <p className="card-text">Max speed: {max_atmosphering_speed}</p>
                    <p className="card-text">Model: {model}</p>
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-primary" onClick={handlerDetail}>Learn more!</button>
                        <button
                            className="btn btn-outline-warning"
                            onClick={() => actions.addFavorite({
                                name: name,
                                url: `/vehicle/${id}`,
                                type: "Vehicle"
                            })}
                        >
                            <i className="fa-regular fa-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vehiculos;