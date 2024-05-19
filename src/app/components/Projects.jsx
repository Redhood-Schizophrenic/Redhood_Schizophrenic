import Image from "next/image";
export default function ProjectsPage() {

    // Array containing project items
    const projectItems = [
        {
            id: '1',
            topic: 'Finoplex',
            imageLink: '/Finoplex/finoplex1.png',
            class: 'md:w-[20dvw] w-[60dvw]',
            redirect: '/projects/finoplex',
        },
        {
            id: '2',
            topic: 'StudyWings',
            imageLink: '/Studywings/home.png',
            class: 'md:w-[30dvw] w-[60dvw]',
            redirect: '/projects/studywings',
        },
        {
            id: '3',
            topic: 'Blood Buddy',
            imageLink: '/Bloodbuddy/home.png',
            class: 'md:w-[30dvw] w-[60dvw]',
            redirect: '/projects/bloodbuddy',
        },
        {
            id: '4',
            topic: 'Adventour',
            imageLink: '/Adventour/home.png',
            class: 'md:w-[30dvw] w-[60dvw]',
            redirect: '/projects/adventour',
        },
    ];


    return (
        <div className='border-t border-white w-[100dvw] h-auto pb-16 flex flex-col overflow-hidden'>

            <div className='flex flex-col text-center'>
                <div className='font-serif pt-24'>
                    <h1 className='text-white uppercase font-bold text-4xl'>
                        Projects
                    </h1>
                </div>
                <div className='font-sans'>
                    <h2 className='font-normal text-gray-500 pt-4 text-xl'>
                        A List of few Projects made by me.
                    </h2>
                </div>
            </div>

            <div className='flex flex-col justify-center flex-wrap w-[80%] gap-16 ml-[10%] mr-[10%] pt-16 md:flex-row'>
                {projectItems.map(item => (
                    <a key={item.id} href={item.redirect}>
                        <div className='p-10 bg-black md:w-[30dvw] md:h-[45dvh] w-auto h-auto border-2 border-red-500 shadow-md shadow-red-500 duration-500 hover:scale-110 flex flex-col overflow-hidden'>
                            <h1 className='text-white uppercase font-black pb-4 md:text-2xl text-xl font-serif'>
                                {item.topic}
                            </h1>
                            <div className="flex flex-col">
                                <img
                                    src={item.imageLink}
                                    alt={item.topic}
                                    className={item.class}
                                />
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}