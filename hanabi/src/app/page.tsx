'use client'
import { useState } from 'react'
type Card = {
  value: number
  exists: boolean
}

type CardCollection = {
  [color: string]: Card[]
}
const initialCards: CardCollection = {
  red: [
    { value: 1, exists: false },
    { value: 1, exists: false },
    { value: 1, exists: false },
    { value: 2, exists: false },
    { value: 2, exists: false },
    { value: 3, exists: false },
    { value: 3, exists: false },
    { value: 4, exists: false },
    { value: 4, exists: false },
    { value: 5, exists: false }
  ],
  blue: [
    { value: 1, exists: false },
    { value: 1, exists: false },
    { value: 1, exists: false },
    { value: 2, exists: false },
    { value: 2, exists: false },
    { value: 3, exists: false },
    { value: 3, exists: false },
    { value: 4, exists: false },
    { value: 4, exists: false },
    { value: 5, exists: false }
  ],
  green: [
    { value: 1, exists: false },
    { value: 1, exists: false },
    { value: 1, exists: false },
    { value: 2, exists: false },
    { value: 2, exists: false },
    { value: 3, exists: false },
    { value: 3, exists: false },
    { value: 4, exists: false },
    { value: 4, exists: false },
    { value: 5, exists: false }
  ],
  yellow: [
    { value: 1, exists: false },
    { value: 1, exists: false },
    { value: 1, exists: false },
    { value: 2, exists: false },
    { value: 2, exists: false },
    { value: 3, exists: false },
    { value: 3, exists: false },
    { value: 4, exists: false },
    { value: 4, exists: false },
    { value: 5, exists: false }
  ],
  white: [
    { value: 1, exists: false },
    { value: 1, exists: false },
    { value: 1, exists: false },
    { value: 2, exists: false },
    { value: 2, exists: false },
    { value: 3, exists: false },
    { value: 3, exists: false },
    { value: 4, exists: false },
    { value: 4, exists: false },
    { value: 5, exists: false }
  ]
}

export default function Home() {
  const [cardList, setCardList] = useState<CardCollection>(initialCards)

  const handleChange = (color: string, index: number) => {
    const updatedCards = { ...cardList }
    updatedCards[color][index].exists = !updatedCards[color][index].exists
    setCardList(updatedCards)
  }
  return (
    <>
      <div>
        {Object.keys(initialCards).map((color) => (
          <div key={color}>
            <h2>{color}</h2>
            {initialCards[color].map((card, index) => (
              <div key={index}>
                Value: {card.value}, Exists: {card.exists ? 'Yes' : 'No'}
                <input
                  type="checkbox"
                  checked={card.exists}
                  id={`${color}-${index}`}
                  name={`${color}-${index}`}
                  onChange={() => handleChange(color, index)}
                />
                <label htmlFor={`${color}-${index}`}>{card.value}</label>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}
