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
  state = {
    cards: this.generateCards(),
    currentPair: [],
    guesses: 0,
    matchedCardIndices: [],
  }

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

  getFeedbackForCard(index){
    const {currentPair, matchedCardIndices } = this.state
    const indexMatched = matchedCardIndices.includes(index)

    if(currentPair.length < 2){
      return indexMatched || index === currentPair[0] ? 'visible' : 'hidden'
    }

    if(currentPair.includes(index)){
      return indexMatched ? 'justMatched' : 'justMismatched'  
    }

    return indexMatched ? 'visible' : 'hidden'
  }

  //Arow fx for bind 
  handleCardClick = index => {
    const { currentPair } = this.state

    if(currentPair.length === 2){
      return
    }

    if(currentPair.length === 0){
      this.setState({ currentPair: [index]})
    }

    this.handleNewPairClosedBy(index)
  }

  render() {
    const {cards, guesses, matchedCardIndices} = this.state
    const won = matchedCardIndices.length === cards.length
    return (
    <div className="memory">
      <GuessCount guesses={guesses}></GuessCount>
      {cards.map((card,index) => (
          <Card 
            card={card} 
            feedback={this.getFeedbackForCard(index)} 
            key={index} 
            index={index}
            clickFonction={this.handleCardClick}>
          </Card>
        )
      )}
      {won && <HallOfFame entries={FAKE_OF}></HallOfFame>}
    </div>
    )
  }
}

export default App;
