import React from 'react';
import Question from './Question.js';

class QuestionsContainer extends React.Component {
  constructor(props){
    super(props)
    this.state={
      isSelected: null
    }
  }

  render() {
    // 3. remove questions depending on inProgress(state of the parent)
    if (this.props.inProgress === false) {
      return null
    }

    // render 5 random questions
    const shuffled = this.props.questionsList.sort(() => 0.5 - Math.random())
    let selected = shuffled.slice(0, 5)
    const questionsLis = selected.map(function(question) {
      return <Question
        key={question.id}
        text={question.text}
        answer={question.answer}
        isSelected={this.state.isSelected}
         />
    })

    return (
      <div className="questions_container">
        <ul>
          {questionsLis}
        </ul>
      </div>
    )
  }
}
export default QuestionsContainer;
