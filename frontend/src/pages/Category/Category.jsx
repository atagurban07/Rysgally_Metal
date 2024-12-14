import React from 'react';
import './Category.css';
import cGapy from '../../../assets/cGapy.png';
// import cElektrik from '../../../assets/cElektrik.jpg';
import cLoft from '../../../assets/cLoft.jpg';
import cPazarny from '../../../assets/cPazarny2.png';
import cPolka from '../../../assets/cPolka1.png';
import cServer from '../../../assets/cServer.png';
import cSkaf from '../../../assets/cSkaf3.png';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';


const Category = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className='programs'>
            <div className='program'>
                <Link to={`/products`}>
                    <img src={cGapy} alt='' />
                    <div className='caption'>
                        <p><b>{t('categoryYangynGapy1')}<br />{t('categoryYangynGapy2')}</b></p>
                    </div>
                </Link>
            </div>
            {/* <div className='program'>
                <Link to={`/products`}>
                    <img src={cElektrik} alt='' />
                    <div className='caption'>
                        <p><b>{t('categoryElectric1')}<br />{t('categoryElectric2')}</b></p>
                    </div>
                </Link>
            </div> */}
            <div className='program'>
                <Link to={`/products`}>
                    <img src={cPazarny} alt='' />
                    <div className='caption'>
                        <p><b>{t('categoryYangynGuty1')}<br />{t('categoryYangynGuty2')}</b></p>
                    </div>
                </Link>
            </div>
            <div className='program'>
                <Link to={`/products`}>
                    <img src={cLoft} alt='' />
                    <div className='caption'>
                        <p><b>{t('categoryLoftMetal')}</b></p>
                    </div>
                </Link>
            </div>

            <div className='program'>
                <Link to={`/products`}>
                    <img src={cPolka} alt='' />
                    <div className='caption'>
                        <p><b>{t('categoryPolka')}</b></p>
                    </div>
                </Link>
            </div>
            <div className='program'>
                <Link to={`/products`}>
                    <img src={cSkaf} alt='' />
                    <div className='caption'>
                        <p><b>{t('categorySkaf')}</b></p>
                    </div>
                </Link>
            </div>
            <div className='program'>
                <Link to={`/products`}>
                    <img src={cServer} alt='' />
                    <div className='caption'>
                        <p><b>{t('categorySerwer1')}<br />{t('categorySerwer2')}</b></p>
                    </div>
                </Link>
            </div>

        </div >
    )
}

export default Category