'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import fetchImage from '../utils/fetchImage'
import styles from './index.module.css'

export default function Page() {
  const [imageUrl, setImageUrl] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetchImage().then((image) => {
      setImageUrl(image.url)
      setLoading(false)
    })
  }, [])

  const handleClick = async () => {
    setLoading(true)
    const newImage = await fetchImage()
    setImageUrl(newImage.url)
    setLoading(false)
  }

  return (
    <div className={styles.page}>
      <button onClick={handleClick} className={styles.button}>
        猫を見る
      </button>
      <div className={styles.frame}>
        {loading ? (
          'Loading...'
        ) : (
          <Image
            src={imageUrl}
            alt="Cat Image"
            width={500}
            height={300}
            className={styles.img}
          />
        )}
      </div>
    </div>
  )
}
