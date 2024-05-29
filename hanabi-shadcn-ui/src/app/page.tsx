'use client'
import { useState, useEffect } from 'react'
import CardCollection from './components/CardCollection'
import {
  CardCollectionProp,
  CardItemProp,
  ColorOptionProp,
  NumberOptionProp
} from './components/types'
import { v4 as uuid } from 'uuid'
import CardItem from './components/CardItem'

import ColorButton from './components/ColorButton'
import NumberButton from './components/NumberButton'

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

  const [cardList, setCardList] = useState<CardItemProp[]>([])
  useEffect(() => {
    const initialCardList: CardItemProp[] = Array.from(
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
              [text as keyof ColorOptionProp]:
                !item.colors[text as keyof ColorOptionProp]
            }
          } else {
            updatedItem.numbers = {
              ...item.numbers,
              [text as keyof NumberOptionProp]:
                !item.numbers[text as keyof NumberOptionProp]
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
      <div className="grid grid-cols-5 gap-2">
        {cardOptions.colors.map((color) => (
          <ColorButton
            key={`${color}`}
            color={color}
            handleOnClick={() => handleOnClick(color, 'colors')}
          />
        ))}
      </div>
      <div className="grid grid-cols-5 gap-2 mt-5">
        {cardOptions.numbers.map((number) => (
          <NumberButton
            key={`${number}`}
            number={number}
            handleOnClick={() => handleOnClick(number, 'numbers')}
          />
        ))}
      </div>
      <div className="mt-20">
        <div className="flex flex-row-reverse	gap-5">
          {cardList.map(({ id, index, colors, numbers }) => {
            return (
              <CardItem
                key={id}
                id={id}
                index={index}
                colors={colors}
                numbers={numbers}
                handleChangeCard={handleChangeCard}
                handleDeleteClick={handleDeleteClick}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}
