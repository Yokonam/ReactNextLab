import { GetServerSideProps, NextPage } from 'next'
import { useEffect, useState } from 'react'
import styles from './index.module.css'

type Props = {
  initImageUrl: string
}

const IndexPage: NextPage<Props> = ({ initImageUrl }) => {
  const [imageUrl, setImageUrl] = useState(initImageUrl)
  const [loading, setLording] = useState(false)
  useEffect(() => {
    fetchImage().then((newImage) => {
      setImageUrl(newImage.url)
      setLording(false)
    })
  }, [])

  const handleClick = async () => {
    setLording(true)
    const newImage = await fetchImage()
    setImageUrl(newImage.url)
    setLording(false)
  }

  return (
    <div className={styles.page}>
      <button onClick={handleClick} className={styles.button}>
        猫を見る
      </button>
      <div className={styles.frame}>
        {loading || <img src={imageUrl} className={styles.img} />}
      </div>
    </div>
  )
}

export default IndexPage

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const image = await fetchImage()

  return {
    props: {
      initImageUrl: image.url
    }
  }
}

type ImageProps = {
  url: string
}
const fetchImage = async (): Promise<ImageProps> => {
  const res = await fetch('https://api.thecatapi.com/v1/images/search')
  const images = await res.json()
  console.log(images)
  return images[0]
}
