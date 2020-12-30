import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(
    /* async 여기서 직접하지말자 */ () => {
      const doTranslation = async () => {
        const response = await axios.post(
          "https://translation.googleapis.com/language/translate/v2",
          {},
          {
            params: {
              q: debouncedText, //번역할 문자열
              target: language.value, // 어떤 언어로 번역할 것인가
              key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM", // google Translate API key
            },
          }
        );
        setTranslated(response.data.data.translations[0].translatedText);
      };
      // 빈 문자열이면 search가 undefind떠서 에러남 그래서 if문으로 걸러줌
      if (debouncedText) {
        doTranslation();
      }
    },
    [language, debouncedText]
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedText(text);
      console.log("request execute!");
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [text]);

  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;
