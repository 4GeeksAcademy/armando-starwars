import React, { useActionState, useContext } from "react";
import peopleData from "../../img/people.json";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../styles/home.css";
import { Context } from "../store/appContext";

const Personas = ({ name, gender, hair_color, eye_color, id }) => {
    const { store, actions } = useContext(Context)

    const peopleImage = peopleData.people.find(person => person.id === id)?.image || "https://via.placeholder.com/300";

    return (
        <div className="text-center mt-5">
            <div className="card" style={{ width: "18rem" }}>
            <img src={peopleImage} className="card-img-top" alt={name} style={{ height: "25rem" }} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Gender: {gender}</p>
                    <p className="card-text">Hair Color: {hair_color}</p>
                    <p className="card-text">Eye Color: {eye_color}</p>
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

export default Personas;