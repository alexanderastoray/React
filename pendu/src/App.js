import React from "react";
import { Component } from "react/cjs/react.production.min";
import './App.css'
import chunk from 'lodash.chunk'
import Touche from "./Touche";

const SIDE_ROW = 3
const SIDE_COLUMN = 10
const SYMBOLS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

class App extends Component{

  touches = this.generateClavier()

  generateClavier() {
    const result = [] 
    const size = SIDE_COLUMN * SIDE_ROW
    const candidats = chunk(SYMBOLS)

    while(result.length < size){
      const touche = candidats.pop()
      result.push(touche)
    }
    return chunk(result)
  }

  handleToucheClick(touche) {
    console.log(touche);
  }

  render() {
    return (
    <div className="jeuPendu">
          <div className="clavier">
            {this.touches.map((touche,index) => (
                    <Touche touche={touche} key={index} clickFonction={this.handleToucheClick}></Touche>
              )
            )}
          </div>
          <div className="pendu"></div>
          <div className="mot"></div>
    </div>
    )
  }
}

export default App;
