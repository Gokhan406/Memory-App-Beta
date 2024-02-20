import React from 'react'
import Skor from './Skor'

export default function Header(props) {
  return (
    <div>
        <Skor skor={props.skor}/>
    </div>
  )
}