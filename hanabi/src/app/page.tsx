'use client'
import { useState } from 'react'
import CardCollection from './components/CardCollection'
import { CardCollectionProp } from './components/types'
import { v4 as uuid } from 'uuid'
import CardColor from './components/CardColor'

const initialCards: CardCollectionProp = {
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

const Card = {
  color: ['red', 'blue', 'green', 'yellow', 'white'],
  number: [1, 2, 3, 4, 5]
}
export default function Home() {
  const [cardList, setCardList] = useState<CardCollectionProp>(initialCards)

  const handleChange = (color: string, index: number) => {
    const updatedCards = { ...cardList }
    updatedCards[color][index].exists = !updatedCards[color][index].exists
    setCardList(updatedCards)
  }
  return (
    <>
      {/* <CardCollection cards={initialCards} handleChange={handleChange} /> */}
      <div>
        <ul>
          {[...Array(5)].map(() => (
            <li key={uuid()}>
              <div>
                <p>Color</p>
                {Card.color.map((item) => {
                  const id = uuid()
                  return <CardColor key={id} id={id} item={item} />
                })}
              </div>
              <div>
                <p>Number</p>
                {Card.number.map((item) => {
                  const id = uuid()
                  return (
                    <div key={id}>
                      <input type="checkbox" id={id} name={`${item}`} />
                      <label htmlFor={id}>{item}</label>
                    </div>
                  )
                })}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
