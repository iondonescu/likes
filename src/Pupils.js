import React from "react";
import Pupil from "./Pupil.js";

const Pupils = ({ items, selectedNumberOfLikes, setSelectedNumberOfLikes }) => {
  const renderItems = items.map((item) => {
    return (  
        
            <Pupil
            key={item.id}
              item={item}
              selectedNumberOfLikes={selectedNumberOfLikes}
              setSelectedNumberOfLikes={setSelectedNumberOfLikes}
            />
          
      
    );
  });
  return <React.Fragment>{renderItems}</React.Fragment>;
};

export default Pupils;
