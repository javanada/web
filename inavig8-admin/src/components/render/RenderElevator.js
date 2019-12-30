import React from 'react';
import Elevator from '../toolbar/Elevator';


function RenderElevator(props) {
             
  return (
  
    props.objects.map((key) => (
        
        key.object_type.short_name === "elevator" &&
        <Elevator
          key={key.object_id}
          x={key.image_x}
          y={key.image_y}
          onMouseMove={props.onMouseMove}
          onMouseOut={props.onMouseOut}
        />

    )))


}

export default RenderElevator;
