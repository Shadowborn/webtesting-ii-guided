import React from 'react';

export default function Players({players}) {
    if(!players.length) {
        return <h2>No players to list</h2>
    }
    return (
        <ul>
            {players.map(p => (
                <li key={p.id}>{p.name}</li>
            ))}
        </ul>
    )
}