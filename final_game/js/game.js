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
        text: 'You chose Gaming and Technology, Thats hot right now so you gained another 1000 followers instantly.  Next you need to pick a brand to represent',
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
        text: 'You chose MicroShaft Computing and your followers fled because they thought that was a far too risky brand, Game over you lost',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
        },
        {
        id: 4,
        text: 'You chose MicroShaft Computing and your followers fled because they thought that was a far too risky brand, Game over you lost',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
        },
        {
        id: 5,
        text: 'You chose MicroShaft Computing and your followers fled because they thought that was a far too risky brand, Game over you lost',
        options: [
            {
                text: 'Restart',
                nextText: -1
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
        }
    ]

    console.log(score)
    
startGame()
        
    