import React from 'react';
import LocalInfo from './LocalInfo';

const ResidentsList = ( {location} ) => {
    return(
        <div className="character-list-container">
            {location.character?.map((character) => (
                <LocalInfo 
                    url={character.character.url}
                    key={character.character.url}
                />
            ))}
        </div>
    );
}

export default ResidentsList;