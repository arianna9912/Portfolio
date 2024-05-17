import React, { useEffect } from 'react';
import emailjs from 'emailjs-com';
import translations from '../translations/translation.json';

const Contact = ({ language }) => {

    function sendForm(event) {
        event.preventDefault();
        const form = document.getElementById('contact-form');
        const name = form.elements.name.value;
        const email = form.elements.email.value;
        const message = form.elements.textarea.value;

        const serviceID = 'service_eeiqmj9';
        const templateID = 'template_m8jv0nn';
        const userID = 'Pp_hHUzxsOxrR5bZY';

        emailjs.send(serviceID, templateID, {
            from_name: name,
            from_email: email,
            message: message,
        }, userID)
            .then(function (response) {
                form.reset();
                console.log('Email sent successfully!', response.status, response.text);
            })
            .catch(function (error) {
                console.log('Error sending email:', error);
            });
    }

    useEffect(() => {
        const form = document.getElementById('contact-form');
        form.addEventListener('submit', sendForm);

        return () => {
            form.removeEventListener('submit', sendForm);
        };
    }, []);


    return (
        <section className="bg-purple-100" id="contact">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-3 lg:py-8">
                <div className=" max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">

                    <h2
                        className="font-heading mb-0 font-bold text-gray-800 text-2xl sm:text-5xl" style={{ fontFamily: 'Inter,sans-serif' }}>
                        {translations[language].get}
                    </h2>

                </div>

                <div className="flex items-stretch justify-center">
                    <div className="grid md:grid-cols-2">
                        <div className="h-full pr-6">
                            <p className="mt-3  ml-5 mb-4  text-lg text-gray-800" style={{ fontFamily: 'Inter,sans-serif' }}>
                                {translations[language].promo}
                            </p>

                            <ul className="mb-6 md:mb-0  ml-5">
                                <li className="flex">
                                    <div className="flex h-10 w-10 items-center justify-center rounded bg-purple-700 text-gray-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" class="h-6 w-6">
                                            <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                            <path
                                                d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div className="ml-4 mb-4">
                                        <h3 className="mb-2 text-lg font-medium leading-6 text-purple-700 " style={{ fontFamily: 'Inter,sans-serif' }}>{translations[language].address}
                                        </h3>

                                        <p className="text-gray-600" style={{ fontFamily: 'Inter,sans-serif' }}>{translations[language].havana}</p>
                                    </div>
                                </li>
                                <li className="flex">
                                    <div className="flex h-10 w-10 items-center justify-center rounded bg-purple-700 text-gray-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" class="h-6 w-6">
                                            <path
                                                d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                                            </path>
                                            <path d="M15 7a2 2 0 0 1 2 2"></path>
                                            <path d="M15 3a6 6 0 0 1 6 6"></path>
                                        </svg>
                                    </div>
                                    <div className="ml-4 mb-4">
                                        <h3 className="mb-2 text-lg font-medium leading-6 text-purple-700" style={{ fontFamily: 'Inter,sans-serif' }}>{translations[language].cont}
                                        </h3>
                                        <p className="text-gray-600" style={{ fontFamily: 'Inter,sans-serif' }}>{translations[language].mobile}: +53 52740178</p>
                                        <p className="text-gray-600" style={{ fontFamily: 'Inter,sans-serif' }}>{translations[language].email}: apr991212@gmail.com</p>
                                    </div>
                                </li>
                                <li className="flex">
                                    <div className="flex h-10 w-10 items-center justify-center rounded bg-purple-700 text-gray-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" class="h-6 w-6">
                                            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                                            <path d="M12 7v5l3 3"></path>
                                        </svg>
                                    </div>
                                    <div className="ml-4 mb-4">
                                        <h3 class="mb-2 text-lg font-medium leading-6 text-purple-700 " style={{ fontFamily: 'Inter,sans-serif' }}>
                                            {translations[language].work}</h3>
                                        <p className="text-gray-600" style={{ fontFamily: 'Inter,sans-serif' }}>{translations[language].day}: 08:00 - 17:00</p>

                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="card h-fit max-w-xl ml-2  md:p-12" id="form">
                            <h2 className="mb-2 ml-0 text-2xl text-purple-700 font-bold" style={{ fontFamily: 'Inter,sans-serif' }} >{translations[language].ready}</h2>
                            <form mt-4 py-3 id="contact-form" onSubmit={sendForm}>
                                <div className="mb-6">
                                    <div className="mx-0 mb-1 sm:mb-4">
                                        <div className="mx-0 ml-0 mb-1 sm:mb-4">
                                            <label for="name" className="pb-1 text-xs uppercase tracking-wider"style={{ fontFamily: 'Inter,sans-serif' }} ></label><input type="text" id="name" autocomplete="given-name" placeholder={translations[language].name} class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="name" />
                                        </div>
                                        <div className="mx-0 mb-1 sm:mb-4">
                                            <label for="email" className="pb-1 text-xs uppercase tracking-wider"style={{ fontFamily: 'Inter,sans-serif' }} ></label><input type="email" id="email" autocomplete="email" placeholder={translations[language].email} class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="email" />
                                        </div>
                                    </div>
                                    <div className="mx-0 mb-1 sm:mb-4">
                                        <label for="textarea" className="pb-1 text-xs uppercase tracking-wider" style={{ fontFamily: 'Inter,sans-serif' }} ></label><textarea id="textarea" name="textarea" cols="30" rows="5" placeholder={translations[language].write} class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"></textarea>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="w-full bg-purple-700 text-white px-6 py-3 font-xl rounded-md sm:mb-0" style={{ fontFamily: 'Inter,sans-serif' }} >{translations[language].send}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Contact;