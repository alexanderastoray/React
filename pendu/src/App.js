import React from "react";
import { Component } from "react/cjs/react.production.min";
import './App.css'
import chunk from 'lodash.chunk'
import Touche from "./Touche";
import Lettre from "./Lettre";

const SIDE_ROW = 3
const SIDE_COLUMN = 10
const SYMBOLS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const MOT = ['C','H','A','R','L','Y','N','E']

class App extends Component{
  state = {
    touches: this.generateClavier(),
    motToFind: MOT,
    currentTouche: []
  }

  generateClavier() {
    const result = [] 
    const size = SIDE_COLUMN * SIDE_ROW
    const candidats = chunk(SYMBOLS)

    while(result.length < size){
      const touche = candidats.shift()
      result.push(touche)
    }
    return chunk(result)
  }

  handleToucheClick = touche => {
    const { currentTouche } = this.state

    if(!currentTouche.includes(touche))
    {
      currentTouche.push(touche.toString())
    }
    
    this.setState({ currentTouche: currentTouche})

    return
  }

  getFeedbackForClavier(touche) {
    const { currentTouche } = this.state
    var result = ''
    
    if(currentTouche.includes(touche.toString()))
    {
      result = 'hidden'
    }

    return result 
  }

  render() {
    const {touches, motToFind, currentTouche} = this.state
    return (
    <div className="jeuPendu">
          <div className="clavier">
            {touches.map((touche,index) => (
                    <Touche 
                        touche={touche} 
                        feedback={this.getFeedbackForClavier(touche)} 
                        key={index} 
                        clickFonction={this.handleToucheClick}>
                    </Touche>
              )
            )}
          </div>
          <div className="pendu"></div>
          <div className="clavier">
            {motToFind.map((mot, index) => (
                          <Lettre lettre={currentTouche.includes(mot) ? mot : '-'} ></Lettre>
              )
            )}
          </div>
    </div>
    )
  }
}

export default App;
