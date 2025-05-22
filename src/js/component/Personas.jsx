import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../styles/home.css";
import { Context } from "../store/appContext";

const Personas = ({ name, gender, hair_color, eye_color, id, image }) => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const handlerDetail = () => {
        console.log("ID recibido:", id);
        navigate(`/character/${id}`);
    };

    return (
        <div className="text-center mt-5">
            <div className="card" style={{ width: "18rem" }}>
                <img src={image} className="card-img-top" alt={name} style={{ height: "25rem" }} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Gender: {gender}</p>
                    <p className="card-text">Hair Color: {hair_color}</p>
                    <p className="card-text">Eye Color: {eye_color}</p>
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-primary" onClick={handlerDetail}>Learn more!</button>
                        <button
                            className="btn btn-outline-warning"
                            onClick={() => actions.addFavorite({
                                name: name,
                                url: `/character/${id}`,
                                type: "Character"
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

export default Personas;