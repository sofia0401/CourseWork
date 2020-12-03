
const startButton=document.getElementById('startbtn')
const nextButton=document.getElementById('nextbtn')
const questionElement=document.getElementById('question')
const answerButtonsElement=document.getElementById('answerbtn')
let shuffledQuestions, currentQuestionIndex, count

startButton.addEventListener('click',startQuiz)
nextButton.addEventListener('click', () => {
	currentQuestionIndex++
	getNewQuestion()
})


function startQuiz() {
	count=0
	startButton.classList.add('hide')
	shuffledQuestions=quiz.sort(()=>Math.random()-.5)
	currentQuestionIndex=0
	answerButtonsElement.classList.remove('hide')
	getNewQuestion()
}

function getNewQuestion() {
	resetOptions()
	showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
	questionElement.innerText=question.question
	question.options.forEach(answer => {
		const button = document.createElement('button')
		button.innerText=answer.text
		button.classList.add('btn')
		if (answer.correct)
			button.dataset.correct=answer.correct
		button.addEventListener('click', selectAnswer) 
		answerButtonsElement.appendChild(button)
	})
}

function resetOptions() {
	nextButton.classList.add('hide')
	while (answerButtonsElement.firstChild) {
		answerButtonsElement.removeChild
		(answerButtonsElement.firstChild)
	}
}

function selectAnswer(e) {
	const selectedButton=e.target
	const correct=selectedButton.dataset.correct
	setStatus(selectedButton, selectedButton.dataset.correct)
	
	if (shuffledQuestions.length>currentQuestionIndex+1)
		nextButton.classList.remove('hide')
	else {
		if (count!=5)
	{
		answerButtonsElement.classList.add('hide')
		questionElement.innerText='Ваш результат: '+count+'/5'
		startButton.innerText='Попробовать еще раз'
		startButton.classList.remove('hide')
	}
	else {
		answerButtonsElement.classList.add('hide')
		questionElement.innerText='Ваш результат: 5/5\nПоздравляю!'
	}	
}
}


function setStatus(element, correct) {
	if (correct) {
		element.style.background = "green"
		count++
	}
	else 
		element.style.background = "red"
		
}


const quiz=[
{
	question:'Чем отличалась мода 1980-х годов?',
	options:[
		{text: 'Яркими цветами в одежде и вызывающим макияжем', correct: true},
		{text: 'Минимализмом и пастельными тонами', correct: false},
		{text: 'Очень пышными женскими юбками', correct: false}
		]
},
{
	question:'Что такое «От кутюр»?',
	options:[
		{text: 'Мужской стиль одежды 1820-х годов', correct: false},
		{text: 'Одежда из дорогих тканей, 70% которой сделано вручную', correct: true},
		{text: 'Женская прическа XVIII века', correct: false}
		]
},
{
	question:'Что такое челси?',
	options:[
		{text: 'Разновидность веера', correct: false},
		{text: 'Спортивная команда', correct: false},
		{text: 'Модель обуви', correct: true}
		]
	
},
{
	question:'Когда женщины начали носить брюки?',
	options:[
		{text: 'В середине XIX века', correct: false},
		{text: 'В 40-х годах XX века', correct: true},
		{text: 'В 80-х годах XX века', correct: false}
		]
	
},
{
	question:'Что входит в мужской костюм-тройку?',
	options:[
		{text: 'Брюки, пиджак и жилет', correct: true},
		{text: 'Рубашка, пиджак и брюки', correct: false},
		{text: 'Брюки, жилет и рубашка', correct: false}
		]

}
]