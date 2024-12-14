import React, { useState } from 'react';
import './Contact.css';
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { RiMailSendLine } from "react-icons/ri";
import { SlLocationPin } from "react-icons/sl";
import { LuPhoneCall } from "react-icons/lu";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t, i18n } = useTranslation();
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
        <div className='contact'>
            <div className='contact-col'>
                <h3>{t('cntactCol1SendMsg')} <MdOutlineLocalPostOffice size={'35px'} className='ml-3' /></h3>
                {/* <p>Ýokary hilli önümlerimiz dürli howa şertlerinde ulanmaga,uzak möhletleýin peýdalanmaga
                    niýetlenip,howpsuzlygy, hem-de goraglylygy bilen tapawutlanýar.</p> */}
                <ul>
                    <li><SlLocationPin size={'25px'} className='mr-3' />{t('cntactCol1Location')}</li>
                    <li><LuPhoneCall size={'25px'} className='mr-3' />+99361480088 <br />
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
                    <input type='tel' name='phone' placeholder={t('placeholderNameTitle')} required />
                    <label>{t('cntactCol2Msg')}</label>
                    <textarea name='message' rows='6' placeholder={t('placeholderMSGTitle')} required ></textarea>
                    <button type='submit' className='btn light-btn text-black'> {t('cntactCol2button')}
                        <FaLongArrowAltRight size={'25px'} className='ml-2' />
                    </button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact