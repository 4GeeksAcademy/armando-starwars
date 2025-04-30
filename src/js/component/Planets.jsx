import React from "react";
import planetData from "../../img/planet.json";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../styles/home.css";

const Planets = ({ name, population, terrain, id }) => {

    const planetImage = planetData?.planets?.find(planet => planet.id === id)?.image || "https://via.placeholder.com/300";

    return (
        <div className="text-center mt-5">
            <div className="card" style={{ width: "18rem" }}>
            <img src={planetImage} className="card-img-top" alt={name} style={{ height: "25rem" }} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Population: {population}</p>
                    <p className="card-text">Terrain: {terrain}</p>
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

export default Planets;