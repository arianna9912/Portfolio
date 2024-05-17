import React from 'react';
import { Link } from 'react-router-dom';
import translations from '../translations/translation.json';
import image from '../assets/perfil.jpg';

const AboutMe = ({language}) => {
    return (
        <div className="bg-purple-100 min-h-screen flex items-center justify-center p-4">
            <div className="max-w-6xl  mt-0 flex flex-col  lg:flex-row lg:rounded-xl lg:shadow-2xl overflow-hidden">

                <div className="w-full  lg:w-1/2 ">
                    <img className="w-full h-screen  object-cover " src={image} alt="Awesome girl" />
                </div>

                <div className="bg-white p-8 lg:w-1/2 rounded-lg">
                    <h2 className="text-3xl font-semibold text-gray-700 xl:text-5xl lg:text-3xl mb-4" style={{fontFamily:'Inter,sans-serif'}}> {translations[language].aboutMeTitle}</h2>
                    <h2 className="text-3xl font-semibold text-purple-700 xl:text-5xl lg:text-3xl mb-4" style={{fontFamily:'Inter,sans-serif'}}>{translations[language].fullstack}</h2>

                    <p className="text-lg text-gray-600 mb-4" style={{fontFamily:'Inter,sans-serif'}}>
                    {translations[language].description}
                     </p>
                     <p className="text-lg text-gray-600 mb-4" style={{fontFamily:'Inter,sans-serif'}}>
                    {translations[language].description1}
                     </p>
                     <p className="text-lg text-gray-600 mb-4"style={{fontFamily:'Inter,sans-serif'}}>
                    {translations[language].description2}
                     </p>
                   <div className='text-center mt-8 py-3'>
                   <Link to="https://t.me/Ari1299?text=Hola,%20me%20gustaría%20contactarte" class=" w-full bg-pink-500 mt-10 text-white px-6 py-3 font-xl rounded-md sm:mb-0" style={{fontFamily:'Inter,sans-serif'}}>{translations[language].contactme}</Link>

                   </div>
                  
                </div>

            </div>
        </div>

    );
}

export default AboutMe;