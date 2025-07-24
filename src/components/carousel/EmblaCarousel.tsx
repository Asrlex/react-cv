import React, { useState, useEffect, useCallback } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import './css/embla.css'
import { BASE_ASSET_DIR } from '../../entities/components.enum'
import { PhotoProvider, PhotoView } from 'react-photo-view'

type PropType = {
  slides: string[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [totalSlides, setTotalSlides] = useState(0)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    setTotalSlides(emblaApi.scrollSnapList().length)
    onSelect()
    emblaApi.on('select', onSelect)

    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <PhotoProvider>
            {slides.map((imgUrl, index) => (
              <div className="embla__slide" key={index}>
                <PhotoView src={`${BASE_ASSET_DIR}/projects/${imgUrl}`} key={index}>
                  <img src={`${BASE_ASSET_DIR}/projects/${imgUrl}`} alt={`Slide ${index}`} className="embla__slide__img" />
                </PhotoView>
              </div>
            ))}
          </PhotoProvider>
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <span className="embla__counter">
            {`${selectedIndex + 1} / ${totalSlides}`}
          </span>
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel