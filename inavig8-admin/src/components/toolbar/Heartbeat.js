import React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';

const HEARTBEAT_SRC = '/img/icons/heartbeat.png'; 
const OBJECT_TYPE_ID = 13;

const Heartbeat = (props) => {
    const [image] = useImage(HEARTBEAT_SRC);
    const handleHeartbeatClick = (e) => {
      console.log('heartbeat clicked');
    }
    return <Image 
            x={props.x} 
            y={props.y} 
            scaleX={0.04} 
            scaleY={0.04} 
            short_name={"heartbeat"}
            object_type_id={OBJECT_TYPE_ID}
            draggable              
            onDragStart={props.handleDragImageStart}
            onDragEnd={props.handleDragImageEnd}
            onMouseMove={props.onMouseMove}
            onMouseOut={props.onMouseOut}
            onClick={handleHeartbeatClick}
          image={image} />;
  };


  export default Heartbeat;