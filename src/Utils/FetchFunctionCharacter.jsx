import { useState, useEffect } from "react";
import CharacterCard from "../Components/CharacterCard";

const FetchFunctionCharacter = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch("https://finalspaceapi.com/api/v0/character")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setCharacters(data);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className="w-full py-14 xl:py-24 px-4 xl:px-0 ">
            <div className="max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl flex justify-between mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-8">
                    {characters.map((character) => (
                        <div key={character.id}>
                            <CharacterCard
                                img_url={character.img_url}
                                name={character.name}
                                status={character.status}
                                gender={character.gender}
                                hair={character.hair}
                                origin={character.origin}
                                species={character.species}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FetchFunctionCharacter;
