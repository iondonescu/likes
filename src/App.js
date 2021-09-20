import React, {useState} from 'react';
import Header from './Header';
import Pupils from './Pupils';

const pupils =[
    {
        id: 1,
        name: 'Ion',
        location : 'Braila',
        numberOfLikes : 0
    },
    {   
        id : 2,
        name: 'Mihai',
        location : 'Botosani',
        numberOfLikes : 0
    },
    {   
        id : 3,
        name: 'Gabriela',
        location : 'Bucuresti',
        numberOfLikes : 0
    }
];
/*
class App extends React.Component{
    render(){
        return(
        <div>
            <img src="http://jaced.com/blogpix/2007/trisquarecircle/002.gif" usemap="#shapes"/>
            <map name="shapes">
                <area shape="polygon" coords="79,6,5,134,153,134"></area>
                <area shape="rectangle" coords="177,6,306,134"></area>
                <area shape="circle" coords="397,71,65"></area>
            </map>
        </div>
        );

    }
}
*/
export default () => {
    const [selected,setSelected] = useState(pupils[0]);
    const [selectedNumberOfLikes,setSelectedNumberOfLikes] = useState(0);
    //console.log(selected);
    return (
        <div>
            <Header/>
            <Pupils 
            items = {pupils}
            selectedNumberOfLikes = {selectedNumberOfLikes}
            onSelectedChange = {setSelectedNumberOfLikes}
            />

            
        </div>
    )
};