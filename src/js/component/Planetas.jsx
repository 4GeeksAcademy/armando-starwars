import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import planetData from "../../json/planets.json"
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../styles/home.css";

const Planetas = ({ name, population, terrain, id, image }) => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const planetImage = planetData.planets.find(p => p.id === id)?.image || "https://via.placeholder.com/300";

    const handlerDetail = () => {
        navigate(`/planet/${id}`);
    };

    return (
        <div className="text-center mt-5">
            <div className="card" style={{ width: "18rem" }}>
                <img src={planetImage} className="card-img-top" alt={name} style={{ height: "25rem" }} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Population: {population}</p>
                    <p className="card-text">Terrain: {terrain}</p>
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-primary" onClick={() => handlerDetail(id+1)} >Mas info!</button>
                        <button
                            className="btn btn-outline-warning"
                            onClick={() => actions.addFavorite({
                                name: name,
                                url: `/planet/${id + 1}`,
                                type: "Planet"
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

export default Planetas;