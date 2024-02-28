import React, { useState, useEffect } from 'react';

const TypingEffect = () => {
  const [texto, setTexto] = useState('');
  const fullText = 'Olá Mundo!';

  useEffect(() => {
    let currentText = '';
    let textoIndex = 0;

    const typingInterval = setInterval(() => {
      if (textoIndex < fullText.length) {
        currentText += fullText[textoIndex];
        setTexto(currentText);
        textoIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 500);

    return () => clearInterval(typingInterval);
  }, []);

  return <p>{texto}</p>;
};

export default TypingEffect;