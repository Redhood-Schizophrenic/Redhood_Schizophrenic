import Navbar from "../../components/navbar";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function ProjectsPage() {
    // Array containing project items
    const projectItems = [
        {
            topic: 'Finoplex',
            imageLink1: '/Finoplex/finoplex1.png',
            imageLink2: '/Finoplex/finoplex2.png',
            imageLink3: '/Finoplex/finoplex3.jpg',
            alttext: 'Finoplex',
            class: 'md:w-[35dvw] w-[150dvh] shadow-2xl p-6',
            class1: 'md:w-[70dvw] w-[150dvh] shadow-2xl p-6',
            heading: 'A Financial Calculator App',
            content: 'Supports Asset Valuations for : Mutual Fund, Forex, Gold, Silver, Fixed Cumulative Deposits, Recurring Deposits, Collectibles, Post Office schemes - National Saving Certificate, Kisan Vikas Patra, Monthly Income Scheme, Time Deposits for 1,2,3 and 5 Years, Mahila Samaan Saving Certificate. Tax Splits for Net Taxable Income from years 2020 onwards for New and Old Regime for Individual income levels from 0 to 100 Crores.'
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
                        <h1 className='text-white uppercase font-black pb-4 md:text-6xl text-4xl font-serif'>
                            {item.topic}
                        </h1>
                        <div className="flex flex-col overflow-hidden">
                            <div className="flex md:flex-row flex-col">
                                <img
                                    src={item.imageLink1}
                                    alt={item.alttext}
                                    className={item.class}
                                />
                                <img
                                    src={item.imageLink2}
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
                        <h1 className='text-white uppercase font-extrabold pt-4 md:text-3xl text-2xl font-serif'>
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
