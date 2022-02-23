import React from "react"
import './Touche.css'

const Touche = ({touche, index, clickFonction}) => (
<div className="touche" onClick={()=>clickFonction(touche)}>
    <span className="symbol">
        {touche}
    </span>
</div>
)

export default Touche