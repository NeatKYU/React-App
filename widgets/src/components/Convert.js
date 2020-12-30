import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {
    useEffect(() => {
        const response = axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
            params: {
                q: text, //번역할 문자열
                target: language.value, // 어떤 언어로 번역할 것인가
                key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM', // google Translate API key
            }
        })
    }, [language, text])
    return <div></div>
}

export default Convert;