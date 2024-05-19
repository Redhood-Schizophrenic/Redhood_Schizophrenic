'use client';
import React from "react";
import { useState } from "react";
import axios from "axios";

const ContactPage = () => {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [message, setMessage] = useState('');

    const query = async (event) => {
        event.preventDefault();
        try {
            if (firstname != '' && lastname != '' && email != '' && contact != '' && message != '') {
                const data = await axios.post('/api/query/add', {
                    firstname,
                    lastname,
                    email,
                    contact,
                    message
                });
                console.log(data);

                if (data.status === 200) {
                    alert(`${firstname} ${lastname}, Thank you for contacting, Will contact as soon as possible...`)
                }
                else {
                    alert(`Error Occured, Please try again later`)
                }
            }
            else {
                alert('Please Fill Valid Values');
            }
        }
        catch (e) {
            alert(`Temporary Server Down, Please Try Again Later.`)
        }
    }

    return (
        <div className='border-t border-white w-[100dvw] h-auto pb-16 flex flex-col justify-center overflow-hidden'>

            <div className='w-[100%] h-auto pb-16 flex items-center justify-center'>
                <div className="flex flex-col justify-center">
                    <div>
                        <div className='flex flex-col text-center'>
                            <div className='font-serif pt-24'>
                                <h1 className='text-white uppercase font-bold text-xl md:text-4xl'>
                                    Connect with me
                                </h1>

                            </div>
                            <div className="w-full p-6 flex justify-center font-bold text-2xl">
                                <div className="bg-red-500 md:w-[15dvw] md:h-[1dvh] w-[60dvw] h-[1dvh] rounded"></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="md:w-[80dvw] w-[40dvw] flex gap-6 justify-center items-center md:overflow-hidden">
                            <form onSubmit={query}>
                                <div className="mt-10 w-[50dvw] flex flex-col justify-center gap-4 ml-[20dvw] md:m-0">
                                    <input
                                        type="text"
                                        className="border px-10 py-2 text-center bg-black text-white w-[60dvw] md:w-auto"
                                        placeholder="First Name"
                                        id="firstname"
                                        value={firstname}
                                        onChange={ev => setFirstName(ev.target.value)}
                                    />
                                    <input
                                        type="text"
                                        className="border px-10 py-2 text-center bg-black text-white w-[60dvw] md:w-auto"
                                        placeholder="Last Name"
                                        id="lastname"
                                        value={lastname}
                                        onChange={ev => setLastName(ev.target.value)}
                                    />
                                    <input
                                        type="text"
                                        className="border px-10 py-2 text-center bg-black text-white w-[60dvw] md:w-auto"
                                        placeholder="Your Email"
                                        id="email"
                                        value={email}
                                        onChange={ev => setEmail(ev.target.value)}
                                    />
                                    <input
                                        type="tel"
                                        className="border px-10 py-2 text-center bg-black text-white w-[60dvw] md:w-auto"
                                        placeholder="Phone"
                                        id="contact"
                                        value={contact}
                                        onChange={ev => setContact(ev.target.value)}
                                    />

                                    <textarea
                                        placeholder="Message"
                                        className="border px-10 py-2 text-center bg-black text-white w-[60dvw] md:w-auto"
                                        id="message"
                                        value={message}
                                        onChange={ev => setMessage(ev.target.value)}
                                    />

                                </div>
                                <div className="flex w-full justify-center">
                                    <button className="bg-red-500 text-white font-bold rounded px-8 py-2 mt-4 w-auto">Send</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;