import React from "react"
import './Card.css'

const HIDDEN_SYMBOL = '❓'

const Card = ({card, feedback, clickFonction}) => (
<div className={`card ${feedback}`} onClick={()=>clickFonction(card)}>
    <span className="symbol">
        {feedback === 'hidden' ? HIDDEN_SYMBOL : card}
    </span>
</div>
)

export default Card