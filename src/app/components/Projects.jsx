export default function ProjectsPage() {

    // Array containing project items
    const projectItems = [
        {
            topic: 'Finoplex',
            imageLink: '/Finoplex/finoplex1.png',
            alttext: 'Finoplex',
            class: 'md:w-[20dvw] w-[60dvw]',
            heading: 'Financial Calculator App',
            redirect: '/projects/finoplex',
            content: 'A Financial Calculator app to evaluate Personal Finances.'
        },
        {
            topic: 'StudyWings',
            imageLink: '/Studywings/home.png',
            alttext: 'Studywings',
            class: 'md:w-[30dvw] w-[60dvw]',
            heading: 'Abroad Education Platform',
            redirect: '/projects/studywings',
            content: 'The passport to global education, offering curated programs and support for students seeking transformative academic experiences worldwide.'
        },
        {
            topic: 'Blood Buddy',
            imageLink: '/Bloodbuddy/home.png',
            alttext: 'Blood Buddy',
            class: 'md:w-[30dvw] w-[60dvw]',
            heading: 'A Blood Donation Platform',
            redirect: '/projects/bloodbuddy',
            content: 'Connecting donors with recipients, the platform simplifies the process of giving the gift of life. Join in saving lives, one donation at a time.'
        },
        {
            topic: 'Adventour',
            imageLink: '/Adventour/home.png',
            alttext: 'Blood Buddy',
            class: 'md:w-[30dvw] w-[60dvw]',
            heading: 'Tours and Travels Website',
            redirect: '/projects/adventour',
            content: 'Adventour is a tours and travels website which allows users to enjoy their weekends or any other occasions at their preferred destinations.'
        },
    ];


    return (
        <div className='border-t border-white w-[100dvw] h-auto pb-16 flex flex-col overflow-hidden'>

            <div className='flex flex-col text-center'>
                <div className='font-serif pt-24'>
                    <h1 className='text-white uppercase font-bold text-4xl pt-24'>
                        Projects
                    </h1>
                </div>
                <div className='font-sans'>
                    <h2 className='text-black font-normal text-gray-500 pt-4 text-xl'>
                        A list of few top Projects made by me.
                    </h2>
                </div>
            </div>

            <div className='flex flex-col flex-wrap w-[80%] gap-16 ml-[10%] mr-[10%] pt-16 md:flex-row'>
                {projectItems.map(item => (
                    <a href={item.redirect}>
                        <div className='p-10 bg-black md:w-[30dvw] md:h-[65dvh] w-auto h-auto border-2 border-red-500 shadow-md shadow-red-500 duration-500 hover:scale-110 flex flex-col overflow-hidden'>
                            <h1 className='text-white uppercase font-black pb-4 md:text-2xl text-xl font-serif'>
                                {item.topic}
                            </h1>
                            <div className="flex flex-col">
                                <img
                                    src={item.imageLink}
                                    alt={item.alttext}
                                    className={item.class}
                                />
                                
                            </div>
                            <h1 className='text-white uppercase font-bold pt-4 text-lg font-serif'>
                                {item.heading}
                            </h1>
                            <h2 className='text-white font-medium font-sans text-gray-500 pt-4 text-sm flex flex-wrap'>
                                {item.content}
                            </h2>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}