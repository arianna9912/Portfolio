import React from 'react';
import translations from '../translations/translation.json';

const Experience = ({ language }) => {
    return (

        <section className="bg-purple-100 py-10">
            <div className='w-full'>
                <div className="w-full  text-center">
                    <h2 className="text-3xl mt-auto font-semibold text-gray-700 xl:text-4xl lg:text-3xl mb-2 animate-bounce">
                        {translations[language].experience}
                    </h2>
                </div>
            </div>
            <div className="container mx-auto px-4">

                <div className="flex flex-wrap -mx-4 mt-12">
                    <div className="w-full md:w-1/3 px-4 mb-8">
                        <div class="rounded-md bg-white bg-opacity-50 p-8 ">

                            <h3 className="text-2xl font-bold mb-4 text-gray-600" style={{ fontFamily: 'Inter,sans-serif' }}>{translations[language].inventory}</h3>
                            <ul className="list-disc pl-6">
                                <li className="text-lg text-gray-700 mb-4" style={{ fontFamily: 'Inter,sans-serif' }}>{translations[language].requirements}</li>
                                <li className="text-lg text-gray-700 mb-4" style={{ fontFamily: 'Inter,sans-serif' }}>{translations[language].design}</li>
                                <li className="text-lg text-gray-700 mb-4" style={{ fontFamily: 'Inter,sans-serif' }}>{translations[language].vue}</li>
                                <li className="text-lg text-gray-700 mb-4" style={{ fontFamily: 'Inter,sans-serif' }}>{translations[language].multiple}</li>
                                <li className="text-lg text-gray-700 mb-4" style={{ fontFamily: 'Inter,sans-serif' }}> {translations[language].rest}</li>

                            </ul>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 px-4 mb-8">
                        <div className="rounded-md bg-white bg-opacity-50 p-8">

                            <h3 className="text-2xl font-bold mb-4 text-gray-600" style={{ fontFamily: 'Inter,sans-serif' }}>{translations[language].platform} </h3>
                            <ul className="list-disc pl-6">
                                <li className="text-lg text-gray-700 mb-4" style={{ fontFamily: 'Inter,sans-serif' }}>{translations[language].security}</li>
                                <li className="text-lg text-gray-700 mb-4" style={{ fontFamily: 'Inter,sans-serif' }}>{translations[language].sales}</li>
                                <li className="text-lg text-gray-700 mb-4" style={{ fontFamily: 'Inter,sans-serif' }}>{translations[language].communication}</li>
                                <li className="text-lg text-gray-700 mb-4" style={{ fontFamily: 'Inter,sans-serif' }}>{translations[language].design}</li>
                                <li className="text-lg text-gray-700 mb-4" style={{ fontFamily: 'Inter,sans-serif' }}>{translations[language].requirements}</li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 px-4 mb-8">
                        <div className="rounded-md bg-white bg-opacity-50 p-8">

                            <h3 className="text-2xl font-bold mb-4 text-gray-600" style={{ fontFamily: 'Inter,sans-serif' }}>{translations[language].magister} </h3>
                            <ul class="list-disc pl-6">
                                <li className="text-lg text-gray-700 mb-4" style={{ fontFamily: 'Inter,sans-serif' }}> {translations[language].rest}</li>
                                <li className="text-lg text-gray-700 mb-4" style={{ fontFamily: 'Inter,sans-serif' }}>{translations[language].database}</li>
                                <li className="text-lg text-gray-700 mb-4" style={{ fontFamily: 'Inter,sans-serif' }}>{translations[language].design}</li>
                                <li className="text-lg text-gray-700 mb-4" style={{ fontFamily: 'Inter,sans-serif' }}>{translations[language].vanilla}</li>
                                <li className="text-lg text-gray-700 mb-4" style={{ fontFamily: 'Inter,sans-serif' }}>{translations[language].requirements}</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
export default Experience;