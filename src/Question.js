import React from 'react';


class Question extends React.Component {
  
  answerTrue = (event) => {
    this.setState({
      isSelected: true
    })
  }
  answerFalse = (event) => {
    this.setState({
      isSelected: false
    })
  }

  handleClickTrue = (event) => {
    if (this.answerTrue === this.props.answer) {
      return <button style={this.props.answer ? {backgroundColor: "#39ff14"} : {backgroundColor:"red"}} />
    }
  }
  handleClickFalse = (event) => {
    if (this.state.isSelected === this.props.answer) {

    }
  }
  render() {
    // style={this.props.answer ? {backgroundColor: "#39ff14"} : {backgroundColor:"red"}}

    //<button style={this.props.answer ? {backgroundColor: "#39ff14"} : {backgroundColor:"red"}} />
    console.log(this.props)
    return (
      <div className="question">
        <p>{this.props.text}</p>
        <button
          onClick={this.handleClickTrue}>True</button>
        <button>False</button>
      </div>
    )
  }
}
// style={this.props.selected === this.props.answer ? {backgroundColor: "#39ff14"} : {backgroundColor:"red"}}
export default Question;
