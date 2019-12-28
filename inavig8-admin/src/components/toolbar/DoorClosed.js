import React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';


const DOOR_CLOSED_SRC = '/img/icons/door-closed.png';
const OBJECT_TYPE_ID = 19;

const DoorClosed = (props) => {
    const [image] = useImage(DOOR_CLOSED_SRC);
    const handleDoorClosedClick = (e) => {
      console.log('door closed clicked');
    }
    return <Image 
            x={props.x} 
            y={props.y} 
            scaleX={0.04} 
            scaleY={0.04} 
            short_name={"door closed"}
            object_type_id={OBJECT_TYPE_ID}
            draggable              
            onDragStart={props.handleDragImageStart}
            onDragEnd={props.handleDragImageEnd}
            onClick={handleDoorClosedClick}
          image={image} />;
  };


  export default DoorClosed;