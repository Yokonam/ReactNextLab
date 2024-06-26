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

const cardOptions = {
  colors: ['red', 'blue', 'green', 'yellow', 'white'],
  numbers: ['1', '2', '3', '4', '5']
}
export default function Home() {
  const [cardCollection, setCardCollection] =
    useState<CardCollectionProp>(initialCards)

  const handleChangeCollection = (color: string, index: number) => {
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

  const handleOnClick = (key: string, type: 'colors' | 'numbers') => {
    const updateCardList = cardList.map((card) => {
      return {
        ...card,
        [type]: {
          ...card[type],
          [key]: true
        }
      }
    })
    setCardList(updateCardList)
  }
  return (
    <>
      <CardCollection
        cards={initialCards}
        handleChange={handleChangeCollection}
      />
      <div>
        {cardOptions.colors.map((color) => (
          <button
            key={`${color}`}
            onClick={() => handleOnClick(color, 'colors')}
          >
            {color}
          </button>
        ))}
      </div>
      <div>
        {cardOptions.numbers.map((number) => (
          <button
            key={`${number}`}
            onClick={() => handleOnClick(number, 'numbers')}
          >
            {number}
          </button>
        ))}
      </div>
      <div>
        <ul>
          {cardList.map(({ id, index, colors, numbers }) => {
            return (
              <li key={id}>
                <p>{index}</p>
                <div>
                  <p>Color</p>
                  {Object.keys(colors).map((color) => {
                    return (
                      <CardItem
                        key={`${id}-${color}`}
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
                    return (
                      <CardItem
                        key={`${id}-${number}`}
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
