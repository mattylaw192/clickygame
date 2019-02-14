import React, { Component } from 'react';
import CharacterTiles from "./components/CharacterTiles";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Nav from "./components/Nav";
import characters from "./characters.json";
import './App.css';



function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let x = Math.floor(Math.random() * (i + 1));
    [array[i], array[x]] = [array[x], array[i]];
  }
  return array;
};

class App extends Component {

  state = {
    characters,
    currentScore: 0,
    topScore: 0,
    result: "",
    clicked: [],
  };



  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      result: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });

    } else if (newScore === 6) {
      this.setState({ result: "Special Occasion." });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore:0,
      topScore: this.state.topScore,
      result: "reset",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledCharacters = shuffle(characters);
    this.setState({ friends: shuffledCharacters });
  };


  render() {
    return (
      <Wrapper>
        <Nav
          title="Silicon Valley Match Game"
          score={this.state.currentScore}
          topScore={this.state.topScore}
          result={this.state.result}
        />

        <Title>
          Click on a character and add to your score by not clicking a duplicate.
        </Title>

        {this.state.characters.map(characters => (

          <CharacterTiles
            key={characters.id}
            handleClick={this.handleClick}
            handleIncrement={this.handleIncrement}
            handleReset={this.handleReset}
            handleShuffle={this.handleShuffle}
            id={characters.id}
            image={characters.image}
          />

        ))}

      </Wrapper>


    );

  }
}

export default App;
