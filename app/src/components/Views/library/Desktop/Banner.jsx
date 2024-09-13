import React, { useState, useEffect } from 'react'
import './Banner.css'

const images = [
  'https://cdn.laguiavalentinaquintero.com/poi/Poi_66279ece42df1d426737bec4_5cc313f9c3eb99cf60eb67e8a94be42a.jpeg',
  'https://cdn.laguiavalentinaquintero.com/poi/Poi_65aed40342df1d6d4415da44_19770b5e4884921f123bf319c2f1859e.jpeg',
  'https://cdn.laguiavalentinaquintero.com/poi/Poi_58d274e608b7895965756924_bb1b47809dec7adc33b5fe0988b50a95.jpeg',
  'https://cdn.laguiavalentinaquintero.com/poi/Poi_5d4c24e342df1d1dfe508d54_d138aabc030e02abed40f3db7535cafb.jpeg'

]

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => {
        const currentIndex = images.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      })
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="banner" style={{ backgroundImage: `url(${currentImage})` }}>
      <div className='slogan'>Viaja, descubre, quédate</div>
    </div>
  )
}

export default Banner