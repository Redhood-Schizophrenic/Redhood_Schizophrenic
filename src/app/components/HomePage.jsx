import Image from "next/image";
import Link from "next/link";
export default function HomePage() {
    return (
        <main className="w-full h-[100dvh] flex bg-black pt-12">
            <div className="w-full h-full flex flex-col justify-center items-center" id="Information">
                <div className="flex gap-[2dvh] flex-col">
                    <div className="text-5xl font-bold">Hi,<br /> I am Shashank</div>
                    <div className="text-box text-6xl uppercase font-black rounded-2xl bg-clip-text text-transparent bg-gradient-to-br from-red-900 to-red-400">
                        Redhood
                    </div>

                    <div className="font-bold text-xl uppercase">System Architect</div>

                    <div className="mt-6 flex gap-8">
                        <Link 
                            className="border rounded-full uppercase p-4 border-red-500 text-red-500
                             w-auto hover:text-black hover:bg-red-500 font-extrabold duration-500" 
                            href="/#contact"
                        > 
                            Contact
                        </Link>

                        <Link 
                            className="hover:border border-red-500 rounded-full uppercase px-6 py-4 hover:border-red-500 hover:text-red-500 hover:bg-black
                             w-auto text-black bg-red-500 font-extrabold duration-500" 
                            href="/#contact"
                        > 
                           Hire Me 
                        </Link>
                    </div>
                </div>

            </div>
            <div className="w-full h-full flex justify-center items-center hidden md:flex">


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
    );
}
