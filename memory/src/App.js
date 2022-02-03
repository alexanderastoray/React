import React from "react";
import { Component } from "react/cjs/react.production.min";
import './App.css'
import Card from "./Card";
import GuessCount from "./GuessCount";



class App extends Component{

  handleCardClick(card) {
    console.log(card);
  }

  render() {
    return (
    <div className="memory">
      <GuessCount guesses={0}></GuessCount>
      <Card card="😀" feedback="hidden" clickFonction={this.handleCardClick}></Card>
      <Card card="🎉" feedback="justMatched" clickFonction={this.handleCardClick}></Card>
      <Card card="💖" feedback="justMismatched" clickFonction={this.handleCardClick}></Card>
      <Card card="🎩" feedback="visible" clickFonction={this.handleCardClick}></Card>
      <Card card="🐶" feedback="hidden" clickFonction={this.handleCardClick}></Card>
      <Card card="🐱" feedback="justMatched" clickFonction={this.handleCardClick}></Card>
    </div>
    )
  }
}

export default App;
