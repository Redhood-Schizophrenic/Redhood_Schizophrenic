import Navbar from "../../components/navbar";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function ProjectsPage() {
    // Array containing project items
    const projectItems = [
        {
            topic: 'StudyWings',
            imageLink1: '/Studywings/1.png',
            imageLink2: '/Studywings/2.png',
            imageLink3: '/Studywings/3.png',
            imageLink4: '/Studywings/home.png',
            alttext: 'Finoplex',
            class: 'md:w-[35dvw] w-[150dvh] shadow-2xl p-2 hover:scale-110 duration-500 backdrop-blur-sm',
            class1: 'md:w-[70dvw] w-[150dvh] shadow-2xl p-2 hover:scale-110 duration-500 backdrop-blur-sm',
            heading: 'Abroad Education Platform',
            content: 'Studywings is an Abroad-based Education Platform, it allows users (Students) to create their own profile which can then be viewed on University Side and then that student can be accepted.' 
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
                                    src={item.imageLink4}
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
                                src={item.imageLink3}
                                alt={item.alttext}
                                className={item.class1}
                            />
                        </div>
                        <h1 className='text-white uppercase font-extrabold pt-4 text-2xl font-serif'>
                            {item.heading}
                        </h1>
                        <h2 className='text-white font-medium font-sans text-gray-500 pt-4 text-sm flex flex-wrap'>
                            {item.content}
                        </h2>
                    </div>
                ))}
            </section>

        </div>

    );
}
