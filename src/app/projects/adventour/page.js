import Navbar from "../../components/Navbar";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function BloodBuddy() {
    // Array containing project items
    const projectItems = [
        {
            topic: 'Adventour',
            imageLink1: '/Adventour/1.png',
            imageLink2: '/Adventour/2.png',
            imageLink3: '/Adventour/home.png',
            alttext: 'Adventour',
            class: 'md:w-[35dvw] w-[150dvh] shadow-2xl p-2 hover:scale-110 duration-500 backdrop-blur-sm',
            class1: 'md:w-[70dvw] w-[150dvh] shadow-2xl p-2 hover:scale-110 duration-500 backdrop-blur-sm',
            heading: 'Tours and travels Website',
            content: "Adventour is a tours and travels website which allows users to enjoy their weekends or any other occasions at their preferred destinations." 
        },
    ];


    return (
        <div className="flex flex-col gap-20">

            <Navbar />

            <section className='flex flex-col w-[80%] gap-16 ml-[10%] mr-[10%] mt-[20dvh]'>

                <a href="/#projects">
                    <div id="user" className="px-2 text-white font-bold md:text-8xl text-4xl flex">
                        <IoMdArrowRoundBack />
                    </div>
                </a>


                {projectItems.map(item => (
                    <div className='p-10 bg-black w-auto h-auto shadow-2xl shadow-red-500 duration-500 flex flex-col overflow-hidden justify-center items-center'>
                        <h1 className='text-white uppercase font-extrabold pb-4 md:text-6xl text-3xl font-serif'>
                            {item.topic}
                        </h1>
                        <div className="flex flex-col items-center">
                            <div className="flex md:flex-row flex-col">
                                <img
                                    src={item.imageLink3}
                                    alt={item.alttext}
                                    className={item.class}
                                />

                                <img
                                    src={item.imageLink1}
                                    alt={item.alttext}
                                    className={item.class}
                                />

                            </div>
                            

                            <img
                                src={item.imageLink2}
                                alt={item.alttext}
                                className={item.class1}
                            />
                        </div>
                        <h1 className='text-white uppercase font-extrabold pt-4 text-2xl font-serif'>
                            {item.heading}
                        </h1>
                        <h2 className='font-medium font-sans text-gray-500 pt-4 text-sm flex flex-wrap'>
                            {item.content}
                        </h2>
                    </div>
                ))}
            </section>

        </div>

    );
}
