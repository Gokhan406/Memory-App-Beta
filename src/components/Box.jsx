import React from 'react'
import "./images/beşgen.jpg"

export default function Box(props) {
    if(props.box.id !== 13 && props.box.durum === "off"){
        return(
            <div onClick={() => props.setdurum(props.box)} className={"box "+ props.box.id + " " + props.box.durum}></div>
        );
    }

    if(props.box.id !== 13 && props.box.durum === "on"){
        return(
            <div onClick={() => props.setdurum(props.box)} className={"box "+ props.box.id + " " + props.box.durum +" "+props.box.foto}></div>
        );
    }
}