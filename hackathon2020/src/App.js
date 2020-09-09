import React, { Component } from 'react';
import './App.css';
import Question from './components/Question/Question';
import questions from './Questions';
import ProgressBar from './components/ProgressBar/ProgressBar';

class App extends Component {
  state = {
    answers: [1, 2, 3],
    index: 0,
    page: 'question1',
    infoHide: 'hidden',
    censorHide: '',
    buttonDisable: false
  }

  onAnswer = (event) => {
    const midAnswers = this.state.answers;
    let answer;
    if (event.target.value === 'true') {
      answer = true;
    } else {
      answer = false;
    }
    midAnswers.push(answer);
    this.setState({answers: midAnswers})
    this.setState({infoHide: ""})
    this.setState({censorHide: "hidden"})
    this.setState({buttonDisable: true})
  }
  
  onNext = () => {
    this.setState({index: this.state.index + 1});
    this.setState({infoHide: "hidden"})
    this.setState({censorHide: ""})
    this.setState({buttonDisable: false})
    console.log(this.state.index);
  }

  // onAnswer = function that pushes the answer (true/false) into the answers array on the state

  // changePage = function that updates the state.page to be the current question or results page


  
  render() {
    let currentComp;
    switch(this.state.page) {
      case "question1":
        currentComp = <Question 
          question="The south just seceded what do you do?" 
          trueAnswer="go to war" 
          falseAnswer="give in to their wishes"
          info="Abraham Lincoln faced this decision in..."
          onAnswer={this.onAnswer}
          infoHide={this.state.infoHide}
          buttonDisable={this.state.buttonDisable} />
        break;
      // case "results":
      //   currentComp = <Results />
    }



    return (
      <div className="App">
        <h1>Twitter Blasters</h1>
  
        <ProgressBar answers={this.state.answers}/>

        
        <Question 
          questionInfo={questions[this.state.index]}
          onAnswer={this.onAnswer} 
          onNext={this.onNext} 
          infoHide={this.state.infoHide}
          censorHide={this.state.censorHide} 
          buttonDisable={this.state.buttonDisable}/>
        {/* buttons */}

        {/* Register to vote */}

        {/* Current Question with 2 answers (and info box) */}
        {/* Results page */}
  
      </div>
    );
  }
}

export default App;
