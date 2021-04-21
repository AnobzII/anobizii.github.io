const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')
const scoreElement = document.getElementById('score')

let score = 1000

function startGame() {
    score = 0
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
      optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }
  
    textNode.options.forEach(option => {
      if (showOption(option)) {
        const button = document.createElement('button')
        button.innerText = option.text
        button.classList.add('btn')
        button.addEventListener('click', () => selectOption(option))
        optionButtonsElement.appendChild(button)
      }
    })
  }
  
function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
  }
function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
      return startGame()
    }
    //score = Object.assign(score, option.setScore)
    showTextNode(nextTextNodeId)
  }
  
const textNodes = [
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
                nextText: 17,
                setScore: score+1000
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
        id: 18,
        text: 'Awww you crashed and burned and have invested too much time/energy and have burnt out, start again and see if you can do better.',
        options: [
            {
                text: 'Try again',
                nextText: -1
            }
        ]
    }
    ]
    
startGame()
        
    