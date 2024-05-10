import React, { useState, useEffect } from 'react';
import './quick-test.css';

export const QuickTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctTotal, setCorrectTotal] = useState(0);
  const checkAnswer = (e) => {
    const selectedAnswer = e.target.textContent.trim();
    const correctAnswer = questionsArray[currentQuestion].options[questionsArray[currentQuestion].answer];
    if (selectedAnswer === correctAnswer) {
      setCorrectTotal(prev => prev + 1);
    } else {
      console.log("Incorrect");
    }
    if (currentQuestion + 1 < questionsArray.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const quizBody = document.querySelector(".quiz-body")
      const questionSection = document.querySelector(".question-section")
      questionSection.innerHTML = `<h4 className="your-score">Your score</h4>`
      quizBody.innerHTML = `<p className="the-score">${correctTotal}/${questionsArray.length}</p>`
    }
  }
  const questionsArray = [
  {
    question: "Which language learning method emphasizes immersion and real-life conversation?",
    answer: 1,
    options: [
      "Total Physical Response (TPR)",
      "Communicative Approach",
      "Grammar-Translation Method",
      "Direct Method"
    ]
  },
  {
    question: "What is the term for the study of the structure and rules of language?",
    answer: 2,
    options: [
      "Phonology",
      "Morphology",
      "Syntax",
      "Semantics"
    ]
  },
  {
    question: "Which language is most widely spoken in the world?",
    answer: 1,
    options: [
      "Mandarin Chinese",
      "English",
      "Spanish",
      "Hindi"
    ]
  },
  {
    question: "What is the term for a word that has the same or similar meaning as another word?",
    answer: 1,
    options: [
      "Synonym",
      "Antonym",
      "Homonym",
      "Acronym"
    ]
  },
  {
    question: "Which language uses the Cyrillic alphabet?",
    answer: 0,
    options: [
      "Russian",
      "Arabic",
      "Greek",
      "Japanese"
    ]
  },
  {
    question: "What is the term for the process of learning a second language later in life?",
    answer: 0,
    options: [
      "Second Language Acquisition (SLA)",
      "Bilingualism",
      "Multilingualism",
      "Linguistic Relativity"
    ]
  },
  {
    question: "Which language family does English belong to?",
    answer: 0,
    options: [
      "Germanic",
      "Romance",
      "Slavic",
      "Semitic"
    ]
  },
  {
    question: "What is the term for the study of the meaning of words and phrases?",
    answer: 3,
    options: [
      "Phonology",
      "Morphology",
      "Syntax",
      "Semantics"
    ]
  },
  {
    question: "Which language is known as the 'language of diplomacy'?",
    answer: 0,
    options: [
      "French",
      "German",
      "Latin",
      "Esperanto"
    ]
  },
  {
    question: "What is the term for the process of translating written text?",
    answer: 0,
    options: [
      "Translation",
      "Interpretation",
      "Transcription",
      "Localization"
    ]
  }
];


  return (
    <div className="quick-test-section">
      <h3>Experience Language Learning Reinvented: Dive into Interactive Lessons</h3>
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
    </div>
  );
};
