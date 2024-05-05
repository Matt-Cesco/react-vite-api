import { useState } from "react";
import CharacterCard from "../src/Components/CharacterCard";
import EpisodeCard from "./Components/EpisodeCard";
import getCharacters from "../src/Utils/getCharacters";
import getEpisodes from "../src/Utils/getEpisodes";

const App = () => {
    const [characters, setCharacters] = useState([]);
    const [episodes, setEpisodes] = useState([]);

    const fetchCharacters = async () => {
        const dataCharacters = await getCharacters();
        setCharacters(dataCharacters);
    };

    const fetchEpisodes = async () => {
        const dataEpisodes = await getEpisodes();
        setEpisodes(dataEpisodes);
        console.log(dataEpisodes);
    };

    return (
        <div className="w-full py-14 xl:py-24 px-4 xl:px-0 bg-zinc-800">
            <div className="max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl mx-auto">
                <button className="text-white bg-blue-600 rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={fetchCharacters}>
                    fetch characters
                </button>
                <button className="text-white bg-orange-600 rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={fetchEpisodes}>
                    fetch episodes
                </button>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 my-8">
                    {characters.map((character) => (
                        <div key={character.id} className="bg-white border border-gray-200 rounded-lg shadow">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 my-8">
                    {episodes.map((episode) => (
                        <div key={episode.id} className="bg-white border border-gray-200 rounded-lg shadow">
                            <EpisodeCard img_url={episode.img_url} name={episode.name} air_date={episode.air_date} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default App;
