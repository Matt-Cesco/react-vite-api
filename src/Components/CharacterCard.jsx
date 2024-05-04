import React from "react";

const CharacterCard = ({ img_url, name, status, gender, hair, origin, species }) => {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <img className="rounded-t-lg" src={img_url} alt="image" />
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{name}</h5>

                <p className="mb-3 font-bold text-gray-700">status: {status}</p>
                <p className="mb-3 font-bold text-gray-700">gender: {gender}</p>
                <p className="mb-3 font-bold text-gray-700">hair: {hair}</p>
                <p className="mb-3 font-bold text-gray-700">origin: {origin}</p>
                <p className="mb-3 font-bold text-gray-700">species: {species}</p>
            </div>
        </div>
    );
};

export default CharacterCard;
