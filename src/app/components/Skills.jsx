function SingleLinerContainer({ name, title, items }) {
    return (
        <div id={name} className="flex flex-col gap-6 pt-10 pb-16">
            <h1 className="uppercase flex justify-center text-2xl font-bold font-sans">{title}</h1>
            <div className="w-full pt-10 flex flex-col md:flex-row gap-4 justify-center items-center">
                {
                    items.map(item => (
                        <div key={item.id} className='p-6 bg-black md:w-[10dvw] md:h-[25dvh] w-auto h-auto border border-red-400 shadow-sm shadow-red-900 flex flex-col justify-center items-center gap-4 overflow-hidden'>
                            <div className="h-[18dvh] w-full flex justify-center items-center">
                                <div className={item.ImageDivCss}>
                                    <img
                                        src={item.Image}
                                        alt={item.Name}
                                        className={item.ImageCss}
                                    />
                                </div>
                            </div>
                            <h1 className={item.TextCss}>{item.Name}</h1>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

function DoubleLinerContainer({ name, title, array1, array2 }) {
    return (
        <div id={name} className="flex flex-col gap-6 pt-10 pb-16">
            <h1 className="uppercase flex justify-center items-center text-xl md:text-2xl font-bold font-sans">{title}</h1>
            <div className="w-full pt-10 flex flex-col md:flex-row gap-4 justify-center items-center">
                {
                    array1.map(logo => (
                        <div key={logo.id} className='p-6 bg-black md:w-[10dvw] md:h-[25dvh] w-auto h-auto border border-red-400 shadow-sm shadow-red-900 flex flex-col justify-center items-center gap-4 overflow-hidden'>
                            <div className="h-[18dvh] w-full flex justify-center items-center">
                                <div className={logo.ImageDivCss}>
                                    <img
                                        src={logo.Image}
                                        alt={logo.Name}
                                        className={logo.ImageCss}
                                    />
                                </div>
                            </div>
                            <h1 className={logo.TextCss}>{logo.Name}</h1>
                        </div>
                    ))
                }

            </div>
            <div className="w-full pt-4 flex flex-col md:flex-row gap-4 justify-center items-center">
                {
                    array2.map(logo => (
                        <div key={logo.id} className='p-6 bg-black md:w-[10dvw] md:h-[25dvh] w-auto h-auto border border-red-400 shadow-sm shadow-red-900 flex flex-col justify-center items-center gap-4 overflow-hidden'>
                            <div className="h-[18dvh] w-full flex justify-center items-center">
                                <div className={logo.ImageDivCss}>
                                    <img
                                        src={logo.Image}
                                        alt={logo.Name}
                                        className={logo.ImageCss}
                                    />
                                </div>
                            </div>
                            <h1 className={logo.TextCss}>{logo.Name}</h1>
                        </div>
                    ))
                }

            </div>
        </div>
    );
}

export default function SkillsPage() {
    const backend1 = [
        {
            'id': 1,
            'Image': '/Skills/nodejs.svg',
            'Name': 'NodeJS',
            'ImageCss': 'w-[20dvw] md:w-[10dvw]',
            'ImageDivCss': 'w-auto rounded-xl bg-gray-900  p-2',
            'TextCss': 'font-medium'
        },
        {
            'id': 2,
            'Image': '/Skills/python.svg',
            'Name': 'Python',
            'ImageCss': 'w-[20dvw] md:w-[10dvw]',
            'ImageDivCss': 'w-auto p-2',
            'TextCss': 'font-medium'
        },
        {
            'id': 3,
            'Image': '/Skills/javascript.svg',
            'Name': 'Javascript',
            'ImageCss': 'w-[20dvw] md:w-[10dvw]',
            'ImageDivCss': 'w-auto p-2',
            'TextCss': 'font-medium'
        },
        {
            'id': 4,
            'Image': '/Skills/typescript.svg',
            'Name': 'Typescript',
            'ImageCss': 'w-[20dvw] md:w-[10dvw]',
            'ImageDivCss': 'w-auto p-2',
            'TextCss': 'font-medium'
        }
    ];
    const backend2 = [
        {
            'id': 5,
            'Image': '/Skills/java.svg',
            'Name': 'Java',
            'ImageCss': 'w-[20dvw] md:w-[10dvw]',
            'ImageDivCss': 'w-auto rounded-xl bg-white p-2',
            'TextCss': 'font-medium'
        },
        {
            'id': 6,
            'Image': '/Skills/julia.svg',
            'Name': 'Julia',
            'ImageCss': 'w-[20dvw] md:w-[10dvw]',
            'ImageDivCss': 'w-auto rounded-xl bg-white p-2',
            'TextCss': 'font-medium'
        },
        {
            'id': 7,
            'Image': '/Skills/octave.svg',
            'Name': 'Octave',
            'ImageCss': 'w-[20dvw] md:w-[10dvw]',
            'ImageDivCss': 'w-auto rounded-xl bg-white p-2',
            'TextCss': 'font-medium'
        },
    ];
    const frameworks = [
        {
            'id': 1,
            'Image': '/Skills/nextjs.svg',
            'Name': 'NextJS',
            'ImageCss': 'w-[20dvw] md:w-[10dvw]',
            'ImageDivCss': 'w-auto rounded-full bg-white p-2',
            'TextCss': 'font-medium'
        },
        {
            'id': 2,
            'Image': '/Skills/express.svg',
            'Name': 'Express',
            'ImageCss': 'w-[20dvw] md:w-[10dvw]',
            'ImageDivCss': 'w-auto rounded-xl bg-white p-2',
            'TextCss': 'font-medium'
        },
        {
            'id': 3,
            'Image': '/Skills/nestjs.svg',
            'Name': 'NestJS',
            'ImageCss': 'w-[20dvw] md:w-[10dvw]',
            'ImageDivCss': 'w-auto rounded-xl bg-gray-900 p-2',
            'TextCss': 'font-medium'
        },
        {
            'id': 4,
            'Image': '/Skills/django.svg',
            'Name': 'Django',
            'ImageCss': 'w-[20dvw] md:w-[10dvw]',
            'ImageDivCss': 'w-auto rounded-xl p-2',
            'TextCss': 'font-medium'
        },
        {
            'id': 5,
            'Image': '/Skills/flask.svg',
            'Name': 'Flask',
            'ImageCss': 'w-[20dvw] md:w-[10dvw]',
            'ImageDivCss': 'w-auto rounded-xl bg-white p-2',
            'TextCss': 'font-medium'
        }
    ];
    const frontend1 = [
        {
            'id': 1,
            'Image': '/Skills/html.svg',
            'Name': 'HTML',
            'ImageCss': 'w-[20dvw] md:w-[10dvw]',
            'ImageDivCss': 'w-auto rounded-xl bg-white  p-2',
            'TextCss': 'font-medium'
        },
        {
            'id': 2,
            'Image': '/Skills/css.svg',
            'Name': 'CSS',
            'ImageCss': 'w-[20dvw] md:w-[10dvw]',
            'ImageDivCss': 'w-auto rounded-xl bg-white p-2',
            'TextCss': 'font-medium'
        },
        {
            'id': 3,
            'Image': '/Skills/wordpress.svg',
            'Name': 'WordPress',
            'ImageCss': 'w-[20dvw] md:w-[10dvw]',
            'ImageDivCss': 'w-auto rounded-xl bg-white p-2',
            'TextCss': 'font-medium'
        },
        {
            'id': 4,
            'Image': '/Skills/jinja.svg',
            'Name': 'Jinja',
            'ImageCss': 'w-[20dvw] md:w-[10dvw]',
            'ImageDivCss': 'w-auto rounded-xl bg-white p-2',
            'TextCss': 'font-medium'
        }
    ];
    const frontend2 = [
        {
            'id': 5,
            'Image': '/Skills/react.svg',
            'Name': 'React',
            'ImageCss': 'w-[20dvw] md:w-[10dvw]',
            'ImageDivCss': 'w-auto rounded-xl bg-gray-900  p-2',
            'TextCss': 'font-medium'
        },
        {
            'id': 6,
            'Image': '/Skills/tailwind.svg',
            'Name': 'Tailwind',
            'ImageCss': 'w-[20dvw] md:w-[10dvw]',
            'ImageDivCss': 'w-auto rounded-xl bg-white p-2',
            'TextCss': 'font-medium'
        }
    ];
    const dev1 = [
        {
            'id': 1,
            'Image': '/Skills/arch_linux.svg',
            'Name': 'Arch Linux',
            'ImageCss': 'w-[20dvw] md:w-[10dvw]',
            'ImageDivCss': 'w-auto rounded-xl   p-2',
            'TextCss': 'font-medium'
        },

        {
            'id': 2,
            'Image': '/Skills/github.svg',
            'Name': 'Github',
            'ImageCss': 'w-[20dvw] md:w-[10dvw]',
            'ImageDivCss': 'w-auto rounded-xl bg-white p-2',
            'TextCss': 'font-medium'
        },
        {
            'id': 3,
            'Image': '/Skills/markdown.svg',
            'Name': 'Markdown',
            'ImageCss': 'w-[20dvw] md:w-[10dvw]',
            'ImageDivCss': 'w-auto rounded-xl bg-white  p-2',
            'TextCss': 'font-medium'
        },
        {
            'id': 4,
            'Image': '/Skills/yaml.svg',
            'Name': 'Yaml',
            'ImageCss': 'w-[20dvw] md:w-[10dvw]',
            'ImageDivCss': 'w-auto rounded-xl bg-white p-2',
            'TextCss': 'font-medium'
        }

    ];
    const dev2 = [

        {
            'id': 5,
            'Image': '/Skills/git.svg',
            'Name': 'Git',
            'ImageCss': 'w-[20dvw] md:w-[10dvw]',
            'ImageDivCss': 'w-auto rounded-xl bg-gray-900 p-2',
            'TextCss': 'font-medium'
        },
        {
            'id': 6,
            'Image': '/Skills/postman.svg',
            'Name': 'Postman',
            'ImageCss': 'w-[20dvw] md:w-[10dvw]',
            'ImageDivCss': 'w-auto rounded-xl bg-gray-900 p-2',
            'TextCss': 'font-medium'
        }
    ];
    const deployment1 = [
        {
            'id': 1,
            'Image': '/Skills/gunicorn.svg',
            'Name': 'Gunicorn',
            'ImageCss': 'w-[20dvw] md:w-[10dvw]',
            'ImageDivCss': 'w-auto rounded-xl bg-gray-900  p-2',
            'TextCss': 'font-medium'
        },
        {
            'id': 2,
            'Image': '/Skills/kubernetes.svg',
            'Name': 'Kubernetes',
            'ImageCss': 'w-[20dvw] md:w-[10dvw]',
            'ImageDivCss': 'w-auto rounded-xl bg-gray-900 p-2',
            'TextCss': 'font-medium'
        },
        {
            'id': 3,
            'Image': '/Skills/raspberry.svg',
            'Name': 'Raspberry Pi',
            'ImageCss': 'w-[20dvw] md:w-[10dvw]',
            'ImageDivCss': 'w-auto rounded-xl bg-white p-2',
            'TextCss': 'font-medium'
        },
        {
            'id': 4,
            'Image': '/Skills/apache.svg',
            'Name': 'Apache',
            'ImageCss': 'w-[20dvw] md:w-[10dvw]',
            'ImageDivCss': 'w-auto rounded-xl bg-gray-900 p-2',
            'TextCss': 'font-medium'
        }
    ];
    const deployment2 = [
        {
            'id': 5,
            'Image': '/Skills/netlify.svg',
            'Name': 'Netlify',
            'ImageCss': 'w-[20dvw] md:w-[10dvw]',
            'ImageDivCss': 'w-auto rounded-xl bg-gray-900  p-2',
            'TextCss': 'font-medium'
        },
        {
            'id': 6,
            'Image': '/Skills/nginx.svg',
            'Name': 'NGINX',
            'ImageCss': 'w-[20dvw] md:w-[10dvw]',
            'ImageDivCss': 'w-auto rounded-xl bg-gray-900 p-2',
            'TextCss': 'font-medium'
        }
    ];
    const ml1 = [
        {
            'id': 1,
            'Image': '/Skills/keras.svg',
            'Name': 'Keras',
            'ImageCss': 'w-[20dvw] md:w-[10dvw]',
            'ImageDivCss': 'w-auto rounded-xl bg-white  p-2',
            'TextCss': 'font-medium'
        },
        {
            'id': 2,
            'Image': '/Skills/scikit_learn.svg',
            'Name': 'Scikit Learn',
            'ImageCss': 'w-[20dvw] md:w-[10dvw]',
            'ImageDivCss': 'w-auto rounded-xl bg-white p-2',
            'TextCss': 'font-medium'
        },
        {
            'id': 3,
            'Image': '/Skills/opencv.svg',
            'Name': 'Open CV',
            'ImageCss': 'w-[20dvw] md:w-[10dvw]',
            'ImageDivCss': 'w-auto rounded-xl bg-white p-2',
            'TextCss': 'font-medium'
        },
        {
            'id': 4,
            'Image': '/Skills/pandas.svg',
            'Name': 'Pandas',
            'ImageCss': 'w-[20dvw] md:w-[10dvw]',
            'ImageDivCss': 'w-auto rounded-xl bg-white p-2',
            'TextCss': 'font-medium'
        }
    ];
    const ml2 = [
        {
            'id': 5,
            'Image': '/Skills/pytorch.svg',
            'Name': 'Pytorch',
            'ImageCss': 'w-[20dvw] md:w-[10dvw]',
            'ImageDivCss': 'w-auto rounded-xl bg-gray-900  p-2',
            'TextCss': 'font-medium'
        },
        {
            'id': 6,
            'Image': '/Skills/tensorflow.svg',
            'Name': 'Tensorflow',
            'ImageCss': 'w-[20dvw] md:w-[10dvw]',
            'ImageDivCss': 'w-auto rounded-xl bg-gray-900 p-2',
            'TextCss': 'font-medium'
        },
        {
            'id': 7,
            'Image': '/Skills/numpy.svg',
            'Name': 'Numpy',
            'ImageCss': 'w-[20dvw] md:w-[10dvw]',
            'ImageDivCss': 'w-auto rounded-xl bg-gray-900 p-2',
            'TextCss': 'font-medium'
        }
    ];

    return (
        // Border Top
        <div className='border-t border-white w-[100dvw] h-auto pb-16 flex flex-col overflow-hidden'>

            {/* Actual Div */}
            <main className="w-full h-auto flex flex-col bg-black p-12">
                <div id="header" className="flex pt-8 w-full items-center flex-col">
                    <h1 className="uppercase text-3xl font-bold">Skills</h1>
                    <p className="text-xl text-gray-500">A List of Skills I'm Pro-Efficient in</p>
                </div>
                <div id="skills">

                    {/* Framework Stack */}
                    <SingleLinerContainer
                        items={frameworks}
                        name="frameworks"
                        title="Framework Stack"
                    />
                    {/* Backend Stack */}
                    <DoubleLinerContainer
                        array1={backend1}
                        array2={backend2}
                        name="backend"
                        title="Backend Stack"
                    />
                    {/* Frontend Stack */}
                    <DoubleLinerContainer
                        array1={frontend1}
                        array2={frontend2}
                        name="frontend"
                        title="Frontend Stack"
                    />
                    {/* Development Stack */}
                    <DoubleLinerContainer
                        array1={dev1}
                        array2={dev2}
                        name='development_environment'
                        title='Development Environment Stack'
                    />
                    {/* Deployment Stack */}
                    <DoubleLinerContainer
                        array1={deployment1}
                        array2={deployment2}
                        name='deployment'
                        title='Deployment Stack'
                    />
                    {/* Machine Learning Stack */}
                    <DoubleLinerContainer
                        array1={ml1}
                        array2={ml2}
                        name='machine_learning'
                        title='Machine Learning Stack'
                    />
                </div>
            </main>
        </div>
    );
}