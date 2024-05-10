import React, {useState, useEffect} from 'react';
import './practice.css'
import {vocabularyData} from './data.js';
import {practiceData} from './data.js';
import {grammarData} from './data.js';
import {Footer} from '/src/component/home/sections/footer/Footer.jsx'
import {Hero} from './sections/hero/Hero.jsx';
import {Resource} from './sections/resource/Resource.jsx';
export const Practice = () => {
  const [questions, setQuestions] = useState(0);
  const dataArray = [vocabularyData, practiceData, grammarData];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return(
    <div className="practice">
      <Hero />
       <div className="practice-section">
          <div className="inner-practice-section">
            <div className="question-box">
              <div className="box-header">
                <button onClick={() => setQuestions(0)}>Language</button>
                <button onClick={() => setQuestions(1)}>Vocabulary</button>
                <button onClick={() => setQuestions(2)}>Grammar</button>
              </div>
              <div className="box-body">
                <QuickTest questionsArray={dataArray[questions]} />
              </div>
            </div>
          </div>
        <Resource />
       </div>
      <Footer />
    </div>
  )
} 
const QuickTest = ({questionsArray}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctTotal, setCorrectTotal] = useState(0);
  
  useEffect(() => {
    setCurrentQuestion(0);
    setCorrectTotal(0); // Reset correct total when questionsArray changes
  }, [questionsArray]);

  const checkAnswer = (e) => {
    const selectedAnswer = e.target.textContent.trim();
    const correctAnswer = questionsArray[currentQuestion].options[questionsArray[currentQuestion].answer];
    if (selectedAnswer === correctAnswer) {
      setCorrectTotal(prev => prev + 1);
    }
    if (currentQuestion + 1 < questionsArray.length) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div className="quick-test-section">
      <div className="practice-header">
        <h3>Resonate Practice</h3>
        <p>Welcome to our Language Practice section, designed to empower you on your language learning journey.Dive into interactive exercises tailored to enhance your language skills across various domains, including vocabulary, grammar, listening comprehension, speaking, and writing. </p>
      </div>
      <div className="quiz-box">
        <div className="quiz-header">
          <div className="question">
            <p>Question {currentQuestion + 1} of {questionsArray.length}</p>
          </div>
          <button disabled={currentQuestion + 1 === questionsArray.length} onClick={() => setCurrentQuestion(prev => prev + 1)}>Next Question</button>
        </div>
        <div className="question-section">
          <p>{questionsArray[currentQuestion].question}</p>
        </div>
        <div className="quiz-body">
          <ul>
            {
              questionsArray[currentQuestion].options.map((option, index) => (
                <li onClick={checkAnswer} key={index}><i className='bx bx-radio-circle'></i> {option}</li>
              ))
            }
          </ul>
        </div>
      </div>
      {currentQuestion + 1 === questionsArray.length && (
        <div className="score-section">
          <h4 className="your-score">Your score</h4>
          <p className="the-score">{correctTotal}/{questionsArray.length}</p>
        </div>
      )}
    </div>
  );
};
