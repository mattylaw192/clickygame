import React, { Component } from 'react';
import CharacterTiles from "./components/CharacterTiles";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Nav from "./components/Nav";
import characters from "./characters.json";
import './App.css';

class App extends Component {
  
  state = {
    characters,
    currentScore: 0,
    topScore: 0,
    result: "",
    clicked: [],
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1){
      this.handleIncrement();
      this.setState({clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };


  render() {
    return(
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


      </Wrapper>


    );
    
  }
}

export default App;
