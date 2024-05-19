import React from "react";

const Footer = () => {
    return (
        <>
            <div className='relative bg-black w-[100%] h-[40dvh] pb-16'>


                <footer className="bg-white dark:bg-gray-900">
                    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                        <div className="md:flex md:justify-between">
                            <div className="mb-6">
                                <a href="/" className="flex items-center flex-col md:flex-row">
                                    <img src="/logo.png" className="h-20 me-3" alt="Logo" />
                                    <span className="self-center text-xl md:text-2xl font-semibold whitespace-nowrap dark:text-white">Redhood Schizophrenic</span>
                                </a>
                            </div>



                            <div className="grid grid-cols gap-8 sm:gap-6 sm:grid-cols-3 ">

                                <div>
                                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Socials</h2>
                                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                        <li className="mb-4">

                                            <a href="https://github.com/Redhood-Schizophrenic" className="hover:underline flex gap-2">
                                                Github
                                            </a>

                                        </li>
                                        <li>
                                            <a href="https://discord.gg/s6VEUrFGUz" className="hover:underline flex gap-2">
                                               Discord
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                        <li className="mb-4">
                                            <a href="#" className="hover:underline">Privacy Policy</a>
                                        </li>
                                        <li>
                                            <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                        <div className="sm:flex sm:items-center sm:justify-between">
                            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="/" className="hover:underline">Redhood Schizophrenic™</a>. All Rights Reserved.
                            </span>

                        </div>
                    </div>
                </footer>

            </div>
        </>
    );
}

export { Footer }