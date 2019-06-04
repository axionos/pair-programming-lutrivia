import React from 'react';
import data from './data.js';
import GameInfo from './GameInfo.js';
import QuestionsContainer from './QuestionsContainer.js';

class App extends React.Component{
  // 1. set the "shared state"
  state={
    game: false
  }

  // 4. switch the game status to "true"
  startGame = (event) => {
    this.setState({
      game: true
    })
  }

  render(){
    // console.log('Data', data)
    return (
      <div className="App">
      <GameInfo
        name={data.gameInfo.name}
        score={data.gameInfo.score}
        startGame={this.startGame} // 5. pass the function as a prop to the child
        inProgress={this.state.game} // 2. share the state with the children
      />
      <QuestionsContainer
        questionsList={data.questions}
        inProgress={this.state.game} // 2. share the state with the children
      />
      </div>
    );

  }
}

export default App;
