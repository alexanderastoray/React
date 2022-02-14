import React from "react";
import { Component } from "react/cjs/react.production.min";
import './App.css'
import Card from "./Card";
import GuessCount from "./GuessCount";
import shuffle from 'lodash.shuffle'
import HallOfFame,{FAKE_OF} from "./HallOfFame";

const SIDE = 6
const SYMBOLS = '😀🎉💖🎩🐶🐱🦄🐬🌍🌛🌞💫🍎🍌🍓🍐🍟🍿'
const VISUAL_PAUSE_MSEC = 750

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
    //console.log('handleCardClick : index' + index +  'currentPair '+ currentPair)

    if(currentPair.length === 2){
      return
    }

    if(currentPair.length === 0){
      this.setState({ currentPair: [index]})
      return
    }

    this.handleNewPairClosedBy(index)
  }

  handleNewPairClosedBy(index){
    const { cards, currentPair, guesses, matchedCardIndices } = this.state

    //console.log('handleNewPairClosedBy : index' + index +  'currentPair '+ currentPair[0])

    const newPair = [currentPair[0], index]
    const newGuesses = guesses + 1
    const matched = cards[newPair[0]] === cards[newPair[1]]
    this.setState({ currentPair: newPair, guesses: newGuesses})

    //console.log('handleNewPairClosedBy : newPair' + newPair +  'currentPair '+ currentPair)
    
    if(matched){
      this.setState({matchedCardIndices: [...matchedCardIndices, ...newPair] })
    }

    setTimeout(() => this.setState({currentPair: []}), VISUAL_PAUSE_MSEC)
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
