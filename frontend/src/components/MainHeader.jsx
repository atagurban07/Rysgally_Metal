import React, { useState, useRef, useEffect } from 'react';
import './MainHeaderStyle.css';
import { FaCloudDownloadAlt } from "react-icons/fa";
import logoLight from '../../assets/logo-black.png';
import logoDark from '../../assets/logo-white.png';
import logoMetal from '../../assets/LogoGara1.png';
import searchIconLight from '../../assets/search-w.png';
import searchIconDark from '../../assets/search-b.png';
import toogleLight from '../../assets/night.png';
import toogleDark from '../../assets/day.png';
import { GrLanguage } from "react-icons/gr";
import { TbWorld } from "react-icons/tb";
import { useTranslation } from 'react-i18next';
// 
const catalogueUrl = 'http://localhost:5173/Katalog.pdf';
const MainHeader = () => {
    const { t, i18n } = useTranslation();
    const [openLanguage, setOpenLanguage] = useState(false)
    const iconRef = useRef(null); // Icon elementini referans almak için

    // Dışarıya tıklanma olayını dinleyen fonksiyon
    const handleOutsideClick = (event) => {
        if (iconRef.current && !iconRef.current.contains(event.target)) {
            setOpenLanguage(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);

        // Cleanup
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const handleIconClick = () => {
        setOpenLanguage(prev => !prev);
    };
    const clickHandle = async (lang) => {
        await i18n.changeLanguage(lang)
        setOpenLanguage(false);
    }

    const downloadFile = (url) => {
        const fileName = url.split('/').pop();
        const aTag = document.createElement('a');
        aTag.href = url;
        aTag.setAttribute('download', fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }
    const toggleMode = () => {
        // theme === 'dark' ? setTheme('light') : setTheme('dark');
    }
    return (
        <div className='navbar'>
            {/* {theme === 'dark' ? logoDark : logoLight} */}
            <div className='slogan'>
                <img src={logoMetal} alt='' className='logo' />
                {/* <p>Quality is not coincidence!</p> */}
            </div>
            {/* <p><GrLanguage size={'30px'} color='#fff' /> */}

            <div className='flex' onClick={handleIconClick}
                ref={iconRef} >
                <TbWorld size={'30px'} className='cursor-pointer'
                // onClick={() => setOpenLanguage((prev) => !prev)}
                />
                {
                    openLanguage && (
                        <div className='flex flex-col languages'>
                            <ul className='flex '>
                                <li className='lan' onClick={() => clickHandle('en')}>EN</li>
                                <li className='lan' onClick={() => clickHandle('tm')}>TM</li>
                                <li className='lan' onClick={() => clickHandle('ru')}>РУ</li>
                                <li className='lan' onClick={() => clickHandle('tr')}>TR</li>
                            </ul>
                        </div>
                    )
                }

                <button className='headerButton' onClick={() => { downloadFile(catalogueUrl) }}>
                    <p><FaCloudDownloadAlt className='mr-2' size={'20px'} />

                        {t('translation:downloadButton')} </p>
                </button>
            </div>

            {/* 
            <div className='search-box'>
                <input type='text' placeholder='Search' />
                <img src={searchIconLight} alt='' />
            </div>
            {/* onClick={() => { toggleMode() }}  */}
            {/*<img src={toogleDark}
                alt='' className='toggle-icon' /> */}

        </div>
    )
}

export default MainHeader