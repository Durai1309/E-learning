import React, { useState } from 'react';
import './Quiz.css';

export default function Quizjava() {
	const questions = [
		{
			questionText: 'Number of primitive data types in Java ?',
			answerOptions: [
				{ answerText: '16', isCorrect: false },
				{ answerText: '36', isCorrect: false },
				{ answerText: '8', isCorrect: true },
				{ answerText: '14', isCorrect: false },
			],
		},
		{
			questionText: 'What is the size of float and double in java?',
			answerOptions: [
				{ answerText: '16 and 36', isCorrect: false },
				{ answerText: '36 and 64', isCorrect: false },
				{ answerText: '8 and 64', isCorrect: false },
				{ answerText: '4 and 8', isCorrect: true },
			],
		},
		{
			questionText: 'Automatic type conversion is possible in which of the possible cases?',
			answerOptions: [
				{ answerText: 'Short to int', isCorrect: false },
				{ answerText: 'long to int', isCorrect: false },
				{ answerText: 'Byte to int ', isCorrect: false },
				{ answerText: 'Int to long', isCorrect: true },
			],
		},
		{
			questionText: '"Select the valid statement. "',
			answerOptions: [
				{ answerText: 'Char[]ch=new char{5}', isCorrect: false },
				{ answerText: 'Char[]ch=new char5', isCorrect: false },
				{ answerText: 'Char[]ch=new char(5)', isCorrect: false },
				{ answerText: 'Char[]ch=new char[5]', isCorrect: true },
			],
		},
		{
			questionText: ' Arrays in java are-',
			answerOptions: [
				{ answerText: 'class', isCorrect: false },
				{ answerText: 'objects', isCorrect: true },
				{ answerText: 'data ', isCorrect: false },
				{ answerText: 'none', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>

							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className='oii' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}