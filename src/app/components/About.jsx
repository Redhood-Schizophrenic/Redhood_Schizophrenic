export default function AboutPage() {
    return (
        <div className='border-t border-white w-[100dvw] h-auto pb-16 flex flex-col overflow-hidden'>
            <main className="w-full h-auto flex flex-col bg-black p-12">
                <div id="header" className="flex pt-8 w-full items-center flex-col">
                    <h1 className="uppercase text-3xl font-bold">
                        <span className="text-box rounded-4xl bg-clip-text text-transparent bg-gradient-to-tl from-orange-900 to-red-400">
                            About
                        </span>
                    </h1>
                    <p className="md:text-xl text-sm md:block text-white">A small introduction about me</p>
                </div>
                <div className="w-full h-full justify-center  flex md:gap-10 pt-10">
                    <div className="hidden md:flex cursor-pointer justify-center items-center w-[15rem] h-auto 
                    border-4 border-red-500 rounded-ss-[74%] rounded-se-[64%] rounded-es-[59%] rounded-ee-[53%] overflow-hidden">
                        <img
                            src='/redhood.png'
                            alt="Redhood Image"
                            width={300}
                            className="hover:scale-110 duration-500"
                        />
                    </div>
                    <div className="md:w-[40dvw] flex flex-col justify-center">
                        <h1 className="text-3xl font-black">Hi, I'm <span className="text-box rounded-2xl bg-clip-text text-transparent bg-gradient-to-br from-red-900 to-red-400">Shashank</span></h1>
                        <h2 className="text-xl font-bold pt-2">System Architect</h2>
                        <p className="text-lg font-light pt-6 flex flex-col gap-6">

                            With a robust background in Software Development and System Architecture,
                            I specialize as a Backend Developer with significant experience in FinTech and Machine Learning.
                            Additionally, I possess skills in Graphic Designing,
                            enabling a versatile and holistic approach to technology solutions.

                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}