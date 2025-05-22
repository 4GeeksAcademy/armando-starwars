import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import peopleData from "../../json/people.json";

const DetallesPersonas = () => {
    const { characterId } = useParams();
    const [character, setCharacter] = useState(null);
    const adjustedId = parseInt(characterId) - 1;

    const image = `https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`;


    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const response = await fetch(`https://swapi.tech/api/people/${characterId}/`);
                const data = await response.json();
                setCharacter(data.result.properties);
            } catch (error) {
  
            }
        };

        fetchCharacter();
    }, [characterId]);

    if (!character) {
        return (
            <div className="text-center">
                <p>Loading character...</p>
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
                                alt={character.name}
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                        </div>
                        <div className="col-md-8 d-flex flex-column justify-content-center">
                            <div className="card-body">
                                <h2 className="card-title text-center text-warning fw-bold">{character.name}</h2>
                                <hr className="border-light" />
                                <p className="card-text"><strong>Gender:</strong> <span className="text-info">{character.gender}</span></p>
                                <p className="card-text"><strong>Hair Color:</strong> <span className="text-info">{character.hair_color}</span></p>
                                <p className="card-text"><strong>Skin Color:</strong> <span className="text-info">{character.skin_color}</span></p>
                                <p className="card-text"><strong>Eye Color:</strong> <span className="text-info">{character.eye_color}</span></p>
                                <p className="card-text"><strong>Birth Year:</strong> <span className="text-info">{character.birth_year}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
        
};

export default DetallesPersonas;