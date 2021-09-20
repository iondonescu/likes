import React,{useState,useEffect} from 'react';
import like from './img/like.png';
//const like = require('./img/like.png');

const Pupil = ({item,selectedNumberOfLikes, setSelectedNumerOfLikes}) => {
const [number,setNumber] = useState(selectedNumberOfLikes);
    return (
        <div>
            <p>{ item.name.toUpperCase() +' '+item.location+' '+ number}</p>
            <button
            onClick = {() => setNumber(number+1)}
            ><img src={like}/></button>
        </div>
    );
}

export default Pupil;