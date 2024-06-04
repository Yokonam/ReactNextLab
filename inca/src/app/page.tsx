'use client'
import { useState } from 'react'

type Cards = {
  [key: string]: boolean[]
}

export default function Home() {
  const initCards: Cards = {
    trapA: [false, false, false],
    trapB: [false, false, false],
    trapC: [false, false, false],
    trapD: [false, false, false],
    trapE: [false, false, false]
  }

  const [trapCards, setTrapCards] = useState<Cards>(initCards)
  const [otherCards, setOtherCards] = useState<number>(15)

  const updateTrapCardStatus = (cardName: keyof Cards, type: string) => {
    const updatedCards = { ...trapCards }
    const cardIndexes = updatedCards[cardName]

    if (type === 'plus') {
      const index = cardIndexes.indexOf(false)
      if (index !== -1) {
        cardIndexes[index] = true
      }
    } else if (type === 'minus') {
      const index = cardIndexes.lastIndexOf(true)
      if (index !== -1) {
        cardIndexes[index] = false
      }
    }

    setTrapCards(updatedCards)
  }

  const handleOtherCardsChange = (type: string) => {
    if (type === 'plus' && otherCards > 0) {
      setOtherCards(otherCards - 1)
    } else if (type === 'minus' && otherCards < 15) {
      setOtherCards(otherCards + 1)
    }
  }

  const getRemainingTrapCards = () => {
    const remaining: { cardName: string; index: number }[] = []
    Object.entries(trapCards).forEach(([cardName, cardIndexes]) => {
      cardIndexes.forEach((checked, index) => {
        if (!checked) {
          remaining.push({ cardName, index })
        }
      })
    })
    return remaining
  }

  const calculateProbabilities = (
    remainingCards: { cardName: string; index: number }[]
  ) => {
    const total = remainingCards.length + otherCards
    const probabilities: { [key: string]: number } = {}

    remainingCards.forEach(({ cardName }) => {
      probabilities[cardName] = (probabilities[cardName] || 0) + 1 / total
    })

    probabilities['otherCards'] = otherCards / total
    return probabilities
  }

  const countFalse = (array: boolean[]) =>
    array.filter((value) => !value).length

  const remainingTrapCards = getRemainingTrapCards()
  const probabilities = calculateProbabilities(remainingTrapCards)
  const totalCards = remainingTrapCards.length + otherCards
  const trapCardsProbability = remainingTrapCards.length / totalCards

  return (
    <div>
      {Object.entries(trapCards).map(([cardName, cardIndexes]) => (
        <div key={cardName}>
          <h3>{cardName}</h3>
          <p>False count: {countFalse(cardIndexes)}</p>
          <button
            onClick={() =>
              updateTrapCardStatus(cardName as keyof Cards, 'minus')
            }
          >
            -
          </button>
          <button
            onClick={() =>
              updateTrapCardStatus(cardName as keyof Cards, 'plus')
            }
          >
            +
          </button>
        </div>
      ))}

      <div>
        <h3>Other Cards</h3>
        <p>Count: {otherCards}</p>
        <button onClick={() => handleOtherCardsChange('minus')}>-</button>
        <button onClick={() => handleOtherCardsChange('plus')}>+</button>
      </div>

      <div>
        <h3>Summary</h3>
        <p>Total trapCards: {remainingTrapCards.length}</p>
        <p>Total otherCards: {otherCards}</p>
        <p>Total cards: {totalCards}</p>
      </div>

      <div>
        <h3>Probabilities of Remaining Cards:</h3>
        {Object.entries(probabilities).map(([cardName, probability]) => (
          <div key={cardName}>
            {cardName}: {(probability * 100).toFixed(2)}%
          </div>
        ))}
        <div>
          <p>
            Probability of any trapCard:{' '}
            {(trapCardsProbability * 100).toFixed(2)}%
          </p>
        </div>
      </div>
    </div>
  )
}
