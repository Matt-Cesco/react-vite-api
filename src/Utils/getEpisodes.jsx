const getEpisodes = async () => {
    const res = await fetch("https://finalspaceapi.com/api/v0/episode/");
    const dataEpisodes = await res.json();
    return dataEpisodes;
};

export default getEpisodes;
