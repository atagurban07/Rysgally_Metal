import React, { useEffect, useState } from 'react'
import './Slider.scss';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { sliderData } from './slider-data';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Slider = () => {
    const { t, i18n } = useTranslation();
    const [currentSlide, setCurrentSlide] = useState(0);
    const navigate = useNavigate();
    const slideLength = sliderData.length;
    const autoScroll = true;
    let slideInterval;
    const intervalTime = 2000;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    };
    const prewSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    };

    useEffect(() => {
        setCurrentSlide(0);
    }, []);

    useEffect(() => {
        if (autoScroll) {
            const auto = () => {
                slideInterval = setInterval(nextSlide, intervalTime);
            };
            auto();
        }
        return clearInterval(slideInterval);
    }, [currentSlide, slideInterval, autoScroll]);

    return (
        <div className="slider">
            <AiOutlineArrowLeft className="arrow prew" onClick={prewSlide} />
            <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
            {sliderData.map((slide, index) => {
                const { image, heading, desc } = slide;
                return (
                    <div
                        key={index}
                        className={index === currentSlide ? "slide current" : "slide"}
                    >
                        {index === currentSlide && (
                            <>
                                <img src={image} alt="slide" />
                                <div className='content'>
                                    <span className='span1'></span>
                                    <span className='span2'></span>
                                    <span className='span3'></span>
                                    <span className='span4'></span>
                                    {index === 0 && (
                                        <>
                                            <h2>{t('sliderHeadShelves')}</h2>
                                            <p>{t('sliderHeadShelvesDesc')}</p>
                                        </>
                                    )}
                                    {index === 1 && (
                                        <>
                                            <h2>{t('sliderHeadSkaf')}</h2>
                                            <p>{t('sliderHeadSkafDesc')}</p>
                                        </>
                                    )}
                                    {index === 2 && (
                                        <>
                                            <h2>{t('sliderHeadYangyn')}</h2>
                                            <p>{t('sliderHeadYangynDesc')}</p>
                                        </>
                                    )}
                                    {index === 3 && (
                                        <>
                                            <h2>{t('sliderHeadGapy')}</h2>
                                            <p>{t('sliderHeadGapyDesc')}</p>
                                        </>
                                    )}
                                    {index === 4 && (
                                        <>
                                            <h2>{t('sliderHeadElectric')}</h2>
                                            <p>{t('sliderHeadElectricDesc')}</p>
                                        </>
                                    )}
                                    {index === 5 && (
                                        <>
                                            <h2>{t('sliderHeadLoft')}</h2>
                                            <p>{t('sliderHeadLoftDesc')}</p>
                                        </>
                                    )}
                                    <hr />
                                    <button className='--btn --btn-primary'
                                        onClick={() => navigate('/products')}>
                                        {t('SeeProductsButton')}
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                )
            })}
        </div>

    )
}

export default Slider