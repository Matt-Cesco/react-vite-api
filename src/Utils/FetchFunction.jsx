import { useState, useEffect } from "react";

const FetchFunction = () => {
    
    useEffect(() => {
        fetch("https://finalspaceapi.com/api/v0")
            .then((response) => response.json())
            .then((data) => {
                console.log(data[0].name);
                // setCards(data);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <div>
            div
        </div>
    );
};

export default FetchFunction;
