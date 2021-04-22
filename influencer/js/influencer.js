const influenceElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')
const scoreElement = document.getElementById('score')

let score = 1000

//The below code displays the 1st item in the text nodes list and starts the game with the 1st item in the list

function startGame() {
    score = 1000
    startInfluence(1)
}

//show the options buttons and then when they're clicked make them move to the next item in the list which is assigned to them

function startInfluence(influenceIndex) {
    const influence = influences.find(influence => influence.id === influenceIndex)
    influenceElement.innerText = influence.text
    while (optionButtonsElement.firstChild) {
      optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }


  
    influence.options.forEach(option => {
      if (showOption(option)) {
        const button = document.createElement('button')
        button.innerText = option.text
        button.classList.add('btn')
        button.addEventListener('click', () => selectOption(option))
        optionButtonsElement.appendChild(button)
      }
    })
  }

//display the buttons using the code below  

function showOption(option) {
    return option.requiredState == null || option.requiredState(score)
  }

  
function selectOption(option) {
    const nextinfluenceId = option.nextText
    //if any of the options return a nextText of less than 0 then start at the beginning again
    if (nextinfluenceId <= 0) {
      return startGame()
    }
    //score = Object.assign(score, option.setScore)
    startInfluence(nextinfluenceId)
  }

//create teh list with all the questions and answers.  Blank template below for use to add options into the code

/*{
        id: ,
        text: '',
        options: [
            {
                text: '',
                nextText: ,
                setScore: score+
            },
            {
                text: '',
                nextText: ,
                setScore: score+
            },
            {
                text: '',
                nextText: ,
                setScore: score-
            },
            {
                text: '',
                nextText: ,
                setScore: score+
            }
        ]
        },*/

const influences = [
    {
        id: 1,
        text: 'Welcome to the game, you have started creating a small following using your social media channels and have 1000 followers, its time to pick what you would like to promote:',
        options: [
            {
                text: 'Gaming and Technology',
                nextText: 2,
                score:1000           
            },
            
            {
                text: 'Travel',
                nextText: 3,
                setScore: score+500
            },
            {
                text: 'Food and Life Hacks',
                nextText: 4,
                setScore: score-250

            },
            {
                text: 'Clothing',
                nextText: 5,
                setScore: score+250
            },

            ]
        },
        {
        id: 2,
        text: 'You chose Gaming and Technology, Thats hot right now so you gained another 1000 followers instantly. Your current follower count is 2000 Next you need to pick a brand to represent',
        options: [
            {
                text: 'Eggsbox',
                nextText: 6,
                setScore: score+1000
            },
            {
                text: 'Allenware Computers',
                nextText: 7,
                setScore: score+500
            },
            {
                text: 'Microshaft Computing',
                nextText: 8,
                setScore: score-250
            },
            {
                text: 'PlayStop',
                nextText: 9,
                setScore: score+250
            }
        ]
        },
        {
        id: 3,
        text: 'You chose Travel, thats pretty popular at the moment so you gained 500 followers and now have a total of 1500.  Where would you like to travel too?',
        options: [
            {
                text: 'Thailand',
                nextText: 11,
                setScore: score-250
            },
            {
                text: 'Bali',
                nextText: 10,
                setScore: score+1000
            },
            {
                text: 'North Korea',
                nextText: 12,
                setScore: score+250
            },
            {
              text: 'Paris, France',
              nextText: 13,
              setScore: score+500
            }
        ]
        },
        {
        id: 4,
        text: 'You chose Food and Life Hacks, you lost -250 followers, because people are just fed up seeing "LIFE HACKS" and what other people are eating.  Start again...',
        options: [
            {
                text: 'Start Again',
                nextText: -1
            }
        ]
        },
        {
        id: 5,
        text: 'You chose Clothing, you gained 250 followers and have a total of 1250 followers.  Pick a brand to represent.',
        options: [
            {
                text: 'Ardidarse',
                nextText: 14,
                setScore: score+500
            },
            {
                text: 'Nuke',
                nextText: 15,
                setScore: score+250
            },
            {
                text: 'SissyPants',
                nextText: 18,
                setScore: score-250
            },
            {
                text: 'NaKaTo',
                nextText: 20,
                setScore: score+1000
            }
        ]
        },
        {
            id: 6,
            text: 'You chose Eggsbox, which is FIRE right now, your followers reach 3000, what would you like to highlight now with your Eggsbox sponsorship?',
            options: [
                {
                    text: 'Call of Booty Streaming',
                    nextText: 20,
                    setScore: score+1000
                },
                {
                    text: 'MineShaft Streaming',
                    nextText: 19,
                    setScore: score+250
                },
                {
                    text: 'Fantastic Mr Fox Streaming',
                    nextText: 21,
                    setScore: score-1000
                },
                {
                    text: 'Flight Sim Streaming',
                    nextText: 18,
                    setScore: score-500
                }
            ]
            },
        {
        id: 8,
        text: 'You chose MicroShaft Computing and your followers fled because they thought that was a far too risky brand, Game over you lost',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
        },
        {
        id: 20,
        text: 'Your followers have now hit the limit for your chosen subject matter, why not switch it up and try another branch.  Have a look at whats out there or just take a break and enjoy what you have in the moment...',
        options: [
            {
                text: 'Change Focus',
                nextText: -1
            }
        ]
        },
        {
        id: 18,
        text: 'Awww you crashed and burned and have invested too much time/energy and have burnt out, start again and see if you can do better.',
        options: [
            {
                text: 'Try again',
                nextText: -1
            }
        ]
        },
        {
            id: 19,
            text: 'You Chose MineShaft Streaming, congratulations you got 250 followers taking your total to 3250.  What would you like to do next?',
            options: [
                {
                    text: 'Stream more MineShaft',
                    nextText: 18,
                    setScore: score+250
                },
                {
                    text: 'Stream Another Game',
                    nextText: 20,
                    setScore: score+1000
                },
                {
                    text: 'Start Again',
                    nextText: -1,
                    setScore: score-1000
                }
                
            ]
            }
    ]

//last thing the program needs to do is actually start the game

startGame()
        
    