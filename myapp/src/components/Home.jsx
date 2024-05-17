import React, { useEffect, useState } from 'react';
import { FaDownload } from 'react-icons/fa';

import perfil from '../assets/perfil.jpg';


import translations from '../translations/translation.json';



const Home = ({ language }) => {

    const [typedText, setTypedText] = useState('');


    useEffect(() => {

        const targetText = language === 'en' ? "Hey there!, I'm Arianna Perez" : "¡Hola!, Soy Arianna Pérez";

        const displayText = targetText.replace(/&#x27;/g, "'")
        let currentIndex = 0;

        const typingInterval = setInterval(() => {
            setTypedText((prevText) => {
                if (currentIndex === displayText.length) {
                    clearInterval(typingInterval);
                }
                currentIndex++;
                return displayText.slice(0, currentIndex);
            });
        }, 100);

        return () => {
            clearInterval(typingInterval);
        };
    }, [language]);

    return (

        <main className="relative h-screen overflow-hidden font-mono bg-purple-100">


            <div className="relative z-20 flex items-center">
                <div className="container relative flex flex-col items-center justify-between px-6 py-4 mx-auto">
                    <div className="flex flex-col">
                        <img src={perfil} class="mx-auto mt-10 rounded-full w-28" alt="Foto de perfil" />
                        <p className="my-6 text-3xl text-center text-gray-800" style={{fontFamily:'Inter,sans-serif'}} > {typedText}
                            <span className="text-4xl inline-block animate-pulse" aria-label="Hand waving">
                                👋
                            </span>
                            <span className="text-4xl ml-1 inline-block animate-pulse" style={{fontFamily:'Inter'}}>
                                💻
                            </span>
                        </p>
                        <h2 className="max-w-3xl py-2 mx-auto text-5xl font-bold text-center text-gray-800 md:text-6xl" style={{fontFamily:'Inter,sans-serif'}}>
                            {translations[language].build}
                        </h2>
                        <div className="flex items-center justify-center mt-4">
                            <a
                                href="/portfolio/CV.pdf"
                                download="Arianna-CV.pdf"
                                className="bg-purple-700 bg-opacity-50 hover:bg-opacity-30 text-gray-900 font-bold py-2 px-8 rounded flex items-center" style={{fontFamily:'Inter,sans-serif'}}
                            >
                                <FaDownload className="mr-2 animate-bounce" />
                                {language === 'en' ? 'Download CV' : 'Descargar CV'}

                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    );
};
export default Home;