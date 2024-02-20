import React from 'react'
import Box from './Box';

export default function Boxes(props) {
  return (
    props.boxes.map((box,index) => <Box box={box} key={index} setdurum={props.setdurum}/>)
  );
}