type ImageProps = {
    url: string;
  };

  const fetchImage = async (): Promise<ImageProps> => {
    const res = await fetch('https://api.thecatapi.com/v1/images/search');
    const images = await res.json();
    return images[0];
  };

  export default fetchImage;
