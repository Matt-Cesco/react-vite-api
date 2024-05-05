const getCharacters = async () => {
    const res = await fetch("https://finalspaceapi.com/api/v0/character");
    const dataCharacters = await res.json();
    return dataCharacters;
};

export default getCharacters;
