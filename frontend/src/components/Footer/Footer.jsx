import React from 'react';
import './Footer.css'
import { GrInstagram } from "react-icons/gr";
import { FaTiktok, FaYoutube } from "react-icons/fa";
import { SiGmail, SiFacebook } from "react-icons/si";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className='footer'>
            <div className='sb_footer section_padding'>
                <div className='sb_footer-links'>
                    <div className='sb_footer-links-div'>
                        <h4>{t('footerCompanyTitle')}</h4>
                        <Link to="/aboutus">
                            <p>{t('footerAboutTitle')}</p>
                        </Link>
                        <Link to="/aboutus">
                            <p>{t('footerContactTitle')}</p>
                        </Link>
                        <Link to="/products">
                            <p>{t('footerProductsTitle')}</p>
                        </Link>

                    </div>
                    <div className='sb_footer-links-div'>
                        <h4>{t('footerProfileTitle')}</h4>
                        <Link to="/profile">
                            <p>{t('footerMyProfileTitle')}</p>
                        </Link>
                    </div>
                    <div className='sb_footer-links-div'>
                        <h4>{t('footerContactTitle')}</h4>
                        <a href=''>
                            <p>+99365220242</p>
                        </a>
                        <a href=''>
                            <p>+99364880304</p>
                        </a>
                        <a href=''>
                            <p>rysgallymetal@gmail.com</p>
                        </a>
                    </div>
                    <div className='sb_footer-links-div'>
                        <h4>{t('footerSocialTitle')}</h4>
                        <div className='socialmedia'>
                            <a href='https://www.instagram.com/rysgallymetall?igsh=ZzljZm1ua3U5bGFm'>
                                <p><GrInstagram size={'20px'} className='mr-2' /></p>
                            </a>
                            <a href='https://www.tiktok.com/@rysgally_metal?_r=1&_d=dkmkah6b09496h&sec_uid=MS4wLjABAAAAtThnolA08YEWnCmCdn0cou7kO8QaYtGB5N6995brH5u3612kPPsEbnXGtCKBTJH6&share_author_id=7238877286992446466&sharer_language=ru&source=h5_m&u_code=e8794j77k4ef75&timestamp=1722422971&user_id=7238877286992446466&sec_user_id=MS4wLjABAAAAtThnolA08YEWnCmCdn0cou7kO8QaYtGB5N6995brH5u3612kPPsEbnXGtCKBTJH6&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7382541311603263240&share_link_id=4cc8b250-787a-4f45-b330-4849253fe413&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb0229&social_share_type=5&enable_checksum=1'>
                                <p><FaTiktok size={'20px'} className='mr-2' /></p>
                            </a>
                            <a href='https://youtube.com/@rysgallymetal?si=1IiBUCmHu8EQc2e1'>
                                <p><FaYoutube size={'20px'} className='mr-2' /></p>
                            </a>
                            <p><SiGmail size={'20px'} className='mr-2' /></p>
                        </div>
                    </div>
                </div>

                <div className='hr-white'>
                    <hr></hr>
                    <hr></hr>
                </div>


                <div className='sb_footer-below'>
                    <div className='sb_footer-copyright'>
                        <p>
                            @{new Date().getFullYear()} RysgallyMetal. {t('footerSecurityTitle')}.
                        </p>
                    </div>
                    {/* <div className='sb_footer-below-links'>

                    </div> */}
                </div>
            </div>
        </div>
    )

}

export default Footer