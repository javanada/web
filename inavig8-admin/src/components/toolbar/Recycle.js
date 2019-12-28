import React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';

const RECYCLE_SRC = '/img/icons/recycle.png'; 
const OBJECT_TYPE_ID = 14;

const Recycle = (props) => {
    const [image] = useImage(RECYCLE_SRC);
    const handleRecycleClick = (e) => {
      console.log('recycle clicked');
    }
    return <Image 
            x={props.x} 
            y={props.y} 
            scaleX={0.04} 
            scaleY={0.04} 
            short_name={"recycle"}
            object_type_id={OBJECT_TYPE_ID}
            draggable              
            onDragStart={props.handleDragImageStart}
            onDragEnd={props.handleDragImageEnd}
            onClick={handleRecycleClick}
          image={image} />;
  };


  export default Recycle;