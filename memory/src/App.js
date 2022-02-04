import React from "react";
import { Component } from "react/cjs/react.production.min";
import './App.css'
import Card from "./Card";
import GuessCount from "./GuessCount";
import shuffle from 'lodash.shuffle'
import HallOfFame,{FAKE_OF} from "./HallOfFame";

const SIDE = 6
const SYMBOLS = '😀🎉💖🎩🐶🐱🦄🐬🌍🌛🌞💫🍎🍌🍓🍐🍟🍿'

class App extends Component{

  cards = this.generateCards()

  generateCards() {
    const result = [] 
    const size = SIDE * SIDE 
    const candidats = shuffle(SYMBOLS)

    while(result.length < size){
      const card = candidats.pop()
      result.push(card,card)
    }
    return shuffle(result)
  }

  handleCardClick(card) {
    console.log(card);
  }

  render() {
    const won = new Date().getSeconds() % 2 === 0
    return (
    <div className="memory">
      <GuessCount guesses={0}></GuessCount>
      {this.cards.map((card,index) => (
          <Card card={card} feedback="visible" key={index} clickFonction={this.handleCardClick}></Card>
        )
      )}
      {won && <HallOfFame entries={FAKE_OF}></HallOfFame>}
    </div>
    )
  }
}

export default App;
