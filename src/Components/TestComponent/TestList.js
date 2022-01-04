const TestsList = [
	
	
	{
		testName: 'Test Name',
		testId: 123,
		questions: [
			{
				questionId: 1000,
				questionText: 'What is the Capital of Great Britain',
				options: ['London', 'Paris', 'Kyiv', 'Berlin'],
				writeOptionInex: [0],
			}
		]
	},
	{
		testName: 'Test Name',
		testId: 124,
		questions: [
			{
				questionId: 1001,
				questionText: 'Сhoose the second and fourth option',
				options: ['First', 'Second', 'Third', 'Fourth'],
				writeOptionInex: [1, 3],
			}
		]
	}, 
	{
		testName: 'Test Name',
		testId: 125,
		questions: [
			{
				questionId: 1002,
				questionText: 'What is no food in the list?',
				options: ['Tomato', 'Fish', 'Coca-Cola', 'Cucumber'],
				writeOptionInex: [2],
			}
		]
	},
	
]

export default TestsList;