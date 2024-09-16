import React, { useEffect, useState } from 'react'
import slide1 from '/assets/images/slide1.jpg'
import slide2 from "/assets/images/slide2.jpg"
import slide3 from "/assets/images/slide3.jpg"
import gsap from "gsap"


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
        },
        {
            title: 'Slide 4',
            url: slide2
        },
    ])
    const [current, setCurrent] = useState(0)
    const [bgImage, setBgImage] = useState(1)
    const length = images.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
        setBgImage(bgImage === length - 1 ? 0 : bgImage + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
        setBgImage(bgImage === 0 ? length - 1 : bgImage - 1)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(current === length - 1 ? 0 : current + 1)
            setBgImage(bgImage === length - 1 ? 0 : bgImage + 1)
        }, 15000)
        return () => clearInterval(interval)
    }, [current])
    console.log(bgImage);
    


    useEffect(() => {
        const tl = gsap.timeline({repeat: -1, repeatDelay: 1});
        const sliderTextHeader = document.querySelector('.sliderTextHeader')
        const sliderTextParagraphy = document.querySelector('.sliderTextParagraphy')
        const sliderTextButton = document.querySelector('.sliderTextButton')
       console.log(sliderTextHeader);
       
       

    }, [current])



    



  return (
    <div className='h-[70vh] w-full relative mt-6 '>
        {images.map((image, index) => {
            return (
            <div
                
                key={index}
                className={`${
                index === current ? 'animate-rightToLeft z-[3]' : 'left-0'
                }
                 ${index === bgImage ? 'z-[2]' : 'z-[1]'}
                absolute top-0  h-full w-full`}
            >
                <div className='absolute left-0 h-[30vh] w-full bg-opacity-50 bottom-0 bg-gradient-to-t from-black to-transparent'></div>
                <img
                src={image.url}
                alt={image.title}
                className='h-full w-full object-cover'
                />

                <div className={`absolute bottom-12 pb-8 left-0 w-full max-w-[500px] h-fit ${bgImage===index?'flex ':'hidden'} flex-col ml-[3rem]`}>
                    <h3 data={index} className={`sliderTextHeader text-3xl font-bold text-white mb-4 drop-shadow-lg  ${bgImage===index?'animate-topCenter animate-delay-[2.8s]':' opacity-0 -translate-y-32'} `}>Wounder full nature out there</h3>
                    <p className={`sliderTextParagraphy text-slate-300  ${bgImage===index?'animate-bottomCenter animate-delay-[3s]':' opacity-0'}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, laboriosam. Dolorum alias vel tenetur ut perspiciatis id optio aspernatur officiis?</p>
                    <a href="" className={`sliderTextButton text-purple-600 px-6 py-3 bg-purple-300 mt-5 w-fit ${bgImage===index?'animate-leftCenter animate-delay-[03.5s]':' opacity-0'}`}>
                        Read More
                    </a>
                </div>
            </div>
            )
        })}
        <button
            onClick={prevSlide}
            className='absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 z-10'
        >
            Prev
        </button>
        <button
            onClick={nextSlide}
            className='absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 z-10'
        >
            Next
        </button>
        <div className='z-[12] absolute left-0 bottom-8 flex justify-end w-full ml-auto px-8'>
            {images.map((image, index) => {
                return (
                    <div
                        key={index}
                        className={`${
                            index === current ? 'bg-white w-8' : 'bg-gray-300'
                        } h-2 w-2 rounded-full mx-1 transition-all duration-300`}
                    ></div>
                )
            })}
        </div>
    </div>
  )
}

export default ImageSlider