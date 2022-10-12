import React from "react"
import './Touche.css'

const Touche = ({touche, feedback, index, clickFonction}) => (
<div className={`touche ${feedback}`} onClick={()=>clickFonction(touche)}>
    <span className="symbol">
        {touche}
    </span>
</div>
)

export default Touche