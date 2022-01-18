import axios from 'axios';
import React, { useEffect, useState } from 'react';

const LocalInfo = ( {url} ) => {

    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios.get(url).then(res => setCharacter(res.data));
    }, [url]);

    return(
        <div className="column">
            <div className="card">
                <strong>{character.name}</strong>
                <img src={character.image} alt="" />
                <div className="attribute">
                    <b>Status: {character.status}</b>
                    <b>Origin: {character.origin.name}</b>
                    <b>Episodes: {character.episode[length]}</b>

                </div>
            </div>
        </div>
    );
}

export default LocalInfo;