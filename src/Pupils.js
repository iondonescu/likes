import React from 'react';
import Pupil from './Pupil.js';

const Pupils = ({items,selectedNumberOfLikes, setSelectedNumberOfLikes}) => {
    const renderItems = items.map(
        (item) => {
            return (
                <div key = {item.id} className="pupils">
                    <Pupil  item = {item} selectedNumberOfLikes = {selectedNumberOfLikes} setSelectedNumberOfLikes = {setSelectedNumberOfLikes}/>
                </div>
            )
        }
    );
    return <div>{renderItems}</div>
}

export default Pupils;