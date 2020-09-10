import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ProgressBar from '../components/ProgressBar/ProgressBar';
import Qheader from '../components/Qheader/Qheader'
import Question from '../components/Question/Question';
import Register from '../components/Register/Register';

class QuestionContainer extends Component {
  state = {
    index: 0,
    qHeader: "Who tweeted this?",
    headColor: "",
    trueBtn: "",
    falseBtn: "",
    infoHide: 'hidden',
    censorHide: '',
    buttonDisable: false
  }

  onAnswer = (bool) => {
    this.props.onAnswer(bool)
    if (bool === 'true') {
      this.setState({qHeader: "CORRECT!"})
      this.setState({headColor: "headCorrect"})
      this.setState({trueBtn: "correct"})
    } else {
      this.setState({qHeader: "SO CLOSE!"})
      this.setState({headColor: "headWrong"})
      this.setState({falseBtn: "wrong"})
    }
    this.setState({infoHide: ""})
    this.setState({censorHide: "hidden"})
    this.setState({buttonDisable: true})
  }
  
  onNext = () => {
    this.setState({index: this.state.index + 1});
    this.setState({qHeader: "Who tweeted this?"})
    this.setState({headColor: ""})
    this.setState({infoHide: "hidden"});
    this.setState({censorHide: ""});
    this.setState({buttonDisable: false});
    this.setState({trueBtn: ""});
    this.setState({falseBtn: ""});
  }

  nextBtn = () => {
     if (this.props.answers.length === 10) {
         return (
             <Link to='/results'>
                <button className={this.state.infoHide + " nextBtn"}>
                  SEE MY SCORE
                  <img src="/arrow-forward.svg" />
                </button>
             </Link>
         )
     } else {
        return (
        <button className={this.state.infoHide + " nextBtn"} onClick={this.onNext}>
          NEXT
          <img className="arrow" src="/arrow-forward.svg" />
        </button>
        )
     }
  }
  
  render() {

    return (
      <div className="mainPage">

        <ProgressBar answers={this.props.answers}/>

        <Qheader header={this.state.qHeader} headColor={this.state.headColor} />
        
        <Question 
          index={this.state.index}
          onAnswer={this.onAnswer} 
          onNext={this.onNext} 
          infoHide={this.state.infoHide}
          censorHide={this.state.censorHide} 
          buttonDisable={this.state.buttonDisable}
          trueBtn={this.state.trueBtn}
          falseBtn={this.state.falseBtn} />

        {this.nextBtn()}

        <Register />
  
      </div>
    );
  }
}

export default QuestionContainer;
