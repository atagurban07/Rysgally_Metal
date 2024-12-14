import React from 'react';
import { MdDesignServices, MdHighQuality } from "react-icons/md";
import { GiPaintRoller, GiConfirmed } from "react-icons/gi";
import { TbRosetteNumber1 } from "react-icons/tb";
import { useTranslation } from 'react-i18next';
import './InfoBox.css';


const data = [
    {
        icon: <MdDesignServices size={30} color='#8cb4f5' />,
        heading: "Design",
        text: "Müşderileriň isleglerine görä dizaýn esasynda dürli ölçeglerde harytlary taýýarlamak",
    },
    {
        icon: <GiPaintRoller size={30} color='#f7d272' />,
        heading: "Toz Boýag",
        text: "Poslamaýan we yokary temperatura çydamly poroşok boýag",
    },
    {
        icon: <TbRosetteNumber1 size={30} color='#fa82ea' />,
        heading: "Kepillilik",
        text: "Öndürilen önümleriň ählisine 1 ýyllyk mugt hyzmat we kepillik berilýär",
    },
    {
        icon: <GiConfirmed size={30} color='#82fa93' />,
        heading: "Standartlaşdyrylan",
        text: "Harytlarymyz talap edilýän ähli standartlara laýyk gelýär",
    },
]

const HomeInfoBox = () => {
    const { t, i18n } = useTranslation();
    const data = [
        {
            icon: <MdDesignServices size={30} color='#8cb4f5' />,
            heading: t('infoBox1Head'),
            text: t('infoBox1Text'),
        },
        {
            icon: <GiPaintRoller size={30} color='#f7d272' />,
            heading: t('infoBox2Head'),
            text: t('infoBox2Text'),
        },
        {
            icon: <TbRosetteNumber1 size={30} color='#fa82ea' />,
            heading: t('infoBox3Head'),
            text: t('infoBox3Text'),
        },
        {
            icon: <GiConfirmed size={30} color='#82fa93' />,
            heading: t('infoBox4Head'),
            text: t('infoBox4Text'),
        },
    ]
    return (
        <div className="infoboxes">
            {data.map((item, index) => {
                const { icon, heading, text } = item;
                return (
                    <div className="info-box" key={index}>
                        <div className='icon '>{icon}</div>
                        <div className='text-white'>
                            <h4 className='text-center pt-1 font-bold'>{heading}</h4>
                            <p className=' text-white pt-1 pr-1'>{text}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default HomeInfoBox