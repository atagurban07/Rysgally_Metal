import React, { useState } from 'react';
import './About/About.css';
import aboutImg from '../../assets/about.jpg';
import playIcon from '../../assets/playIcon.png';
import './Contact/Contact.css';
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { RiMailSendLine } from "react-icons/ri";
import { SlLocationPin } from "react-icons/sl";
import { LuPhoneCall } from "react-icons/lu";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import Title from '../components/Title/Title';
import { useTranslation } from 'react-i18next';
import VideoPlayer from '../components/VideoPlayer/VideoPlayer';

const AboutContact = () => {
    const { t, i18n } = useTranslation();
    const [playState, setPlayState] = useState(false);

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "6f1322c5-0d4d-45f9-bb5b-cbcc6fee5c96");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (
        <>
            <div className="ml-[2rem]">
                <Title subtitle='"Rysgally Metal" HJ' title={t('titleBizBarada')} />
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


                <div className='contact ml-[2rem]'>
                    <div className='contact-col'>
                        <h3>{t('cntactCol1SendMsg')}  <MdOutlineLocalPostOffice size={'35px'} className='ml-3' /></h3>
                        {/* <p>Ýokary hilli önümlerimiz dürli howa şertlerinde ulanmaga,uzak möhletleýin peýdalanmaga
                            niýetlenip,howpsuzlygy, hem-de goraglylygy bilen tapawutlanýar.</p> */}
                        <ul>
                            <li><SlLocationPin size={'25px'} className='mr-3' />{t('cntactCol1Location')}</li>
                            <li><LuPhoneCall size={'25px'} className='mr-3' />+99364880304 <br />
                                +99365220242
                            </li>

                            <li> <RiMailSendLine size={'25px'} className='mr-3' />rysgallymetal@gmail.com</li>
                        </ul>
                    </div>
                    <div className='contact-col'>
                        <form onSubmit={onSubmit}>
                            <label>{t('cntactCol2Name')}</label>
                            <input type='text' name='name' placeholder={t('placeholderNameTitle')} required />
                            <label>{t('cntactCol2Number')}</label>
                            <input type='tel' name='phone' placeholder={t('placeholderNumberTitle')} required />
                            <label>{t('cntactCol2Msg')}</label>
                            <textarea name='message' rows='6' placeholder={t('placeholderMSGTitle')} required ></textarea>
                            <button type='submit' className='btn light-btn text-black'>{t('cntactCol2button')}
                                <FaLongArrowAltRight size={'25px'} className='ml-2' />
                            </button>
                        </form>
                        <span>{result}</span>
                    </div>
                </div>
                <VideoPlayer playState={playState} setPlayState={setPlayState} />
            </div>
        </>
    )
}

export default AboutContact