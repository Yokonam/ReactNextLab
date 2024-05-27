'use client'
import { useState, useEffect } from 'react'
import CardCollection from './components/CardCollection'
import { CardCollectionProp } from './components/types'
import { v4 as uuid } from 'uuid'
import CardItem from './components/CardItem'
type Color = {
  red: boolean
  blue: boolean
  green: boolean
  yellow: boolean
  white: boolean
}

type NumberOption = {
  '1': boolean
  '2': boolean
  '3': boolean
  '4': boolean
  '5': boolean
}

type CardItem = {
  id: string
  index: number
  colors: Color
  numbers: NumberOption
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
        index: index,
        colors: {
          red: false,
          blue: false,
          green: false,
          yellow: false,
          white: false
        },
        numbers: { '1': false, '2': false, '3': false, '4': false, '5': false }
      })
    )
    setCardList(initialCardList)
  }, [])

  const handleChangeCard = (
    id: string,
    text: string,
    category: 'color' | 'number'
  ) => {
    setCardList((prevList) =>
      prevList.map((item) => {
        if (item.id === id) {
          const updatedItem = { ...item }
          console.log(updatedItem)
          if (category === 'color') {
            updatedItem.colors = {
              ...item.colors,
              [text as keyof Color]: !item.colors[text as keyof Color]
            }
          } else {
            updatedItem.numbers = {
              ...item.numbers,
              [text as keyof NumberOption]:
                !item.numbers[text as keyof NumberOption]
            }
          }
          return updatedItem
        }
        return item
      })
    )
  }

  const handleDeleteClick = (id: string) => {
    setCardList((prevList) => {
      const updatedList = prevList.filter((item) => item.id !== id)
      const lastIndex = prevList.slice(-1)[0].index
      const newItem = {
        id: uuid(),
        index: lastIndex + 1,
        colors: {
          red: false,
          blue: false,
          green: false,
          yellow: false,
          white: false
        },
        numbers: { '1': false, '2': false, '3': false, '4': false, '5': false }
      }
      return [...updatedList, newItem]
    })
  }

  return (
    <>
      {/* <CardCollection cards={initialCards} handleChange={handleChange} /> */}
      <div>
        <ul>
          {cardList.map(({ id, index, colors, numbers }) => {
            return (
              <li key={id}>
                <p>{index}</p>
                <div>
                  <p>Color</p>
                  {Object.keys(colors).map((color) => {
                    const id = uuid()
                    return (
                      <CardItem
                        key={id}
                        id={id}
                        text={color}
                        handleChange={() =>
                          handleChangeCard(id, color, 'color')
                        }
                        checked={colors[color as keyof Color]}
                      />
                    )
                  })}
                </div>
                <div>
                  <p>Number</p>
                  {Object.keys(numbers).map((number) => {
                    const id = uuid()
                    return (
                      <CardItem
                        key={id}
                        id={id}
                        text={number}
                        handleChange={() =>
                          handleChangeCard(id, number, 'number')
                        }
                        checked={numbers[number as keyof NumberOption]}
                      />
                    )
                  })}
                </div>
                <button onClick={() => handleDeleteClick(id)}>削除</button>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
