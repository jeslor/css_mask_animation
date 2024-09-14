import React, { useEffect, useState } from 'react'
import slide1 from '/assets/images/slide1.jpg'
import slide2 from "/assets/images/slide2.jpg"
import slide3 from "/assets/images/slide3.jpg"


const ImageSlider = () => {
    const [images, setImages] = useState([
        {
            title: 'Slide 1',
            url: slide1
        },
        {
            title: 'Slide 2',
            url: slide2
        },
        {
            title: 'Slide 3',
            url: slide3
        }
    ])
    const [current, setCurrent] = useState(0)
    const length = images.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(current === length - 1 ? 0 : current + 1)
        }, 5000)
        return () => clearInterval(interval)
    }, [current])


  return (
    <div className='h-[70vh] w-full'>
        {images.map((image, index) => {
            return (
            <div
                key={index}
                className={`${
                index === current ? 'opacity-100' : 'opacity-0'
                } transition-opacity duration-1000 absolute top-0 left-0 h-full w-full`}
            >
                <img
                src={image.url}
                alt={image.title}
                className='h-full w-full object-cover'
                />
            </div>
            )
        })}
        <button
            onClick={prevSlide}
            className='absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2'
        >
            Prev
        </button>
        <button
            onClick={nextSlide}
            className='absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2'
        >
            Next
        </button>
    </div>
  )
}

export default ImageSlider