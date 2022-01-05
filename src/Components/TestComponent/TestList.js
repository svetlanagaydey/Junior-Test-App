const TestsList = [
	{	name: 'HTML',
		list: [
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
					questionText: 'Сhoose the second and fourth option. Choose all answers',
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
	},

	{	name: 'CSS',
		list: [
		{
			testName: 'CSS',
			testId: 223,
			questions: [
				{
					questionId: 1200,
					questionText: 'CSS What is the Capital of Great Britain',
					options: ['London', 'Paris', 'Kyiv', 'Berlin'],
					writeOptionInex: [0],
				}
			]
		},
		{
			testName: 'CSS',
			testId: 224,
			questions: [
				{
					questionId: 1201,
					questionText: 'CSS Сhoose the second and fourth option',
					options: ['First', 'Second', 'Third', 'Fourth'],
					writeOptionInex: [1, 3],
				}
			]
		}, 
		{
			testName: 'CSS',
			testId: 225,
			questions: [
				{
					questionId: 1202,
					questionText: 'CSS What is no food in the list?',
					options: ['Tomato', 'Fish', 'Coca-Cola', 'Cucumber'],
					writeOptionInex: [2],
				}
			]
		},	
	]}
]

export default TestsList;