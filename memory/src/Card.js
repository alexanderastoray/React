import React from "react"
import './Card.css'
import PropTypes from "prop-types"

const HIDDEN_SYMBOL = '❓'

const Card = ({card, feedback, index, clickFonction}) => (
<div className={`card ${feedback}`} onClick={()=>clickFonction(index)}>
    <span className="symbol">
        {feedback === 'hidden' ? HIDDEN_SYMBOL : card}
    </span>
</div>
)

Card.propTypes = {
    card: PropTypes.string.isRequired,
    feedback: PropTypes.oneOf(['hidden','visible','justMatched','justMismatched']).isRequired,
    index: PropTypes.number.isRequired,
    clickFonction: PropTypes.func.isRequired
}

export default Card