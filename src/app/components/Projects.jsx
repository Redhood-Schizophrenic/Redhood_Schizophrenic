import Image from "next/image";
export default function ProjectsPage() {

    // Array containing project items
    const projectItems = [
        {
            id: '1',
            topic: 'Finoplex',
            imageLink: '/Finoplex/finoplex1.png',
            redirect: '/projects/finoplex',
            content: 'A Financial Calculator app to evaluate Personal Finances.'
        },
        {
            id: '2',
            topic: 'StudyWings',
            imageLink: '/Studywings/home.png',
            redirect: '/projects/studywings',
            content: 'The passport to global education, offering curated programs and support for students seeking transformative academic experiences worldwide.'
        },
        {
            id: '3',
            topic: 'Blood Buddy',
            imageLink: '/Bloodbuddy/home.png',
            redirect: '/projects/bloodbuddy',
            content: 'Connecting donors with recipients, the platform simplifies the process of giving the gift of life. Join in saving lives, one donation at a time.'
        },
        {
            id: '4',
            topic: 'Adventour',
            imageLink: '/Adventour/home.png',
            redirect: '/projects/adventour',
            content: 'Adventour is a tours and travels website which allows users to enjoy their weekends or any other occasions at their preferred destinations.'
        },
    ];


    return (
        <div className='border-t border-white w-[100dvw] h-auto pb-16 flex flex-col overflow-hidden'>

            <div className='flex flex-col text-center'>
                <div className='font-serif pt-24'>
                    <h1 className='text-white uppercase font-bold text-4xl'>
                        <span className="text-box rounded-4xl bg-clip-text text-transparent bg-gradient-to-tl from-orange-900 to-red-400">
                            Projects
                        </span>
                    </h1>
                </div>
                <div className='font-sans'>
                    <h2 className='font-normal text-white pt-4 text-sm md:text-xl'>
                        A List of few Projects made by me.
                    </h2>
                </div>
            </div>

            <div className='flex flex-col justify-center flex-wrap w-[82%] gap-6 ml-[10%] mr-[10%] pt-16 md:flex-row'>
                {projectItems.map(item => (
                    <a key={item.id} href={item.redirect}>
                        <div id="wrapper" className='flex items-center justify-center hover:scale-105 duration-700'>
                            <div
                                id="image-container"
                                className="relative md:w-[40dvw] border shadow-sm border-red-500 shadow-red-500 w-full"
                            >
                                <img
                                    src={item.imageLink}
                                    alt={item.topic}
                                    className="block m-auto opacity-70"
                                />
                                <div
                                    id="image-content"
                                    className="md:p-10 absolute bg-black/60 w-full 
                                    flex justify-center items-center
                                    md:flex-wrap duration-700 
                                    opacity-0 hover:opacity-100 top-0 left-0 h-full
                                    flex-col
                                    hover:backdrop-blur-sm">
                                    <h1
                                        className="font-black pb-4 uppercase"
                                    >
                                        {item.topic}
                                    </h1>
                                    <p className="hidden md:block font-normal"> {item.content} </p>
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}