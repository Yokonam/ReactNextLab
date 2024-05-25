'use client'
import { useState, useEffect } from 'react'
import CardCollection from './components/CardCollection'
import { CardCollectionProp } from './components/types'
import { v4 as uuid } from 'uuid'
import CardItem from './components/CardItem'
type CardItem = {
  id: string
  number: number
}

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
  const [cardCollection, setCardCollection] =
    useState<CardCollectionProp>(initialCards)

  const handleChange = (color: string, index: number) => {
    const updatedCards = { ...cardCollection }
    updatedCards[color][index].exists = !updatedCards[color][index].exists
    setCardCollection(updatedCards)
  }

  const [cardList, setCardList] = useState<CardItem[]>([])
  useEffect(() => {
    const initialCardList: CardItem[] = Array.from(
      { length: 5 },
      (_, index) => ({
        id: uuid(),
        number: index
      })
    )
    setCardList(initialCardList)
  }, [])

  const handleDeleteClick = (id: string) => {
    setCardList((prevList) => {
      const updatedList = prevList.filter((item) => item.id !== id)
      const lastNumber = prevList.slice(-1)[0].number
      const newItem = {
        id: uuid(),
        number: lastNumber + 1
      }
      return [...updatedList, newItem]
    })
  }

  return (
    <>
      {/* <CardCollection cards={initialCards} handleChange={handleChange} /> */}
      <div>
        <ul>
          {cardList.map((card) => {
            return (
              <li key={card.id}>
                <p>{card.number}</p>
                <div>
                  <p>Color</p>
                  {Card.color.map((item) => {
                    const id = uuid()
                    return <CardItem key={id} id={id} item={item} />
                  })}
                </div>
                <div>
                  <p>Number</p>
                  {Card.number.map((item) => {
                    const id = uuid()
                    return <CardItem key={id} id={id} item={item} />
                  })}
                </div>
                <button onClick={() => handleDeleteClick(card.id)}>削除</button>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
