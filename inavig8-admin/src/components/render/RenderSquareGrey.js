import React from 'react';
import SquareGrey from '../toolbar/SquareGrey';


function RenderSquareGrey(props) {
             
    return (

        props.objects.map((key) => (
            
            key.object_type.short_name === "grey square" &&
            <SquareGrey
              key={key.object_id}
              x={key.image_x}
              y={key.image_y}
              name={key.name}
              onDragStart={props.handleDragRectStart}
              onDragEnd={props.handleDragRectEnd}
              onMouseMove={props.onMouseMove}
              onMouseOut={props.onMouseOut}
              shadowOffset={{ x: 1, y: 1 }}
              shadowBlur={1} />

        )))
}

export default RenderSquareGrey;
