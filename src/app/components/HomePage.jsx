import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
export default function HomePage() {
    return (
        <>
            <main className="w-full h-[100dvh] flex bg-black pt-12">
                <div className="w-full h-full flex flex-col justify-center items-center" id="Information">
                    <div className="flex gap-[2dvh] flex-col justify-center">
                        <div className="text-4xl md:text-5xl font-bold w-full flex justify-center">Hi,<br /> I am Shashank</div>
                        <div className="text-box text-5xl md:text-6xl uppercase font-black rounded-2xl bg-clip-text text-transparent bg-gradient-to-br from-red-900 to-red-400">
                            Redhood
                        </div>

                        <div className="font-bold text-xl uppercase">System Architect</div>

                        <div className="mt-6 ">


                            <Link
                                className="hover:border border-red-500 rounded-full uppercase px-6 py-4 hover:border-red-500 hover:text-red-500 hover:bg-black
                            w-auto text-black bg-red-500 font-black duration-500"
                                href="/#contact"
                            >
                                Hire Me
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full h-full justify-center items-center hidden md:flex">


                    <div className="cursor-pointer flex justify-center items-center w-[20rem] h-auto 
                hover:bg-red-800 hover:shadow-inner hover:shadow-red-600 
                hover:bg-gradient-to-br hover:from-red-900 to-red-400 duration-500 bg-red-500 
                rounded-ss-[74%] rounded-se-[64%] rounded-es-[59%] rounded-ee-[53%] overflow-hidden">
                        <img
                            src='/redhood.png'
                            alt="Redhood Image"
                            width={250}
                            className="hover:scale-110 duration-500"
                        />
                    </div>

                </div>
            </main>

            <div className="-mt-20 pb-20 text-red-500 text-4xl flex justify-center gap-16">
                            <Link
                                id="github"
                                href="/"
                                className="hover:scale-110 duration-500"
                            >
                                <FaGithub />
                            </Link>
                            <Link
                                id="linkedin"
                                href="/"
                                className="hover:scale-110 duration-500"

                            >
                                <FaLinkedin />
                            </Link>
                            <Link
                                id="discord"
                                href="https://discordapp.com/users/Redhood%20Schizophrenic"
                                className="hover:scale-110 duration-500"

                            >
                                <FaDiscord />
                            </Link>
                        </div>
        </>

    );
}
