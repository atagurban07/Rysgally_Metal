import React from 'react';
import './About.css';
import aboutImg from '../../../assets/about.jpg';
import playIcon from '../../../assets/playIcon.png';
import { FaPlayCircle } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const About = ({ setPlayState }) => {
    const { t, i18n } = useTranslation();
    return (
        <div className='about'>
            <div className='about-right'>
                {/* <h3>Biz Barada</h3>
                <h2>"Rysgally Metal" HJ</h2> */}
                <p>{t('aboutUsText1')}</p>
                <p>-{t('aboutUsText2')}</p>
                <p>-{t('aboutUsText3')}</p>
                <p>-{t('aboutUsText4')}</p>
                <p>-{t('aboutUsText5')}</p>
                <p>-{t('aboutUsText6')}</p>
                <p>-{t('aboutUsText7')}</p>
                <p>-{t('aboutUsText8')}</p>
                <p>-{t('aboutUsText9')}</p>
                <p>-{t('aboutUsText10')}</p>
                <p>{t('aboutUsText11')}</p>
                <p>{t('aboutUsText12')}</p>
            </div>
            <div className='about-left'>
                <img src={aboutImg} alt='' className='about-img' />
                <FaPlayCircle size={'60px'} className='play-icon' onClick={() => { setPlayState(true) }} />
                {/* <img src={playIcon} alt='' className='play-icon'
                    onClick={() => { setPlayState(true) }} /> */}
            </div>

        </div>
    )
}

export default About