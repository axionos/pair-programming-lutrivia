import React from 'react';

class GameInfo extends React.Component {

  render() {

    console.log('gameinfo props', this.props)
    return (
      <div className="game_info">
        <h1>{this.props.name}</h1>

        { // 6. display button depending on the inProgress
          this.props.inProgress ? null : <button
            onClick={this.props.startGame}
          >New Game</button> }

        <h3>{this.props.score}</h3>
      </div>
    )
  }
}

export default GameInfo;
