import { Github, ArrowRight } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'ELEVATE',
        description: 'ELEVATE is an open-source code analysis tool that helps students improve their Python code by highlighting constructs that may be acceptable in coursework but would not meet professional, enterprise-grade coding standards.',
        image: '/projects/ELEVATE.png',
        tags: ['Python', 'Github', 'React', 'TailwindCSS', 'Ollama'],
        githubUrl: 'https://github.com/kylemather-34/ELEVATE'
    },
    {
        id: 2,
        title: 'ACCENTA',
        description: 'An internal, AWS-native application designed to detect social engineering and data leaks in real-time using LLM-powered AI.',
        image: '/projects/Accenta.jpg',
        tags: ['AWS', 'AI', 'Security', 'Real-time', 'LLMOps']
    },
    {
        id: 3,
        title: 'Ocean Defender',
        description: 'An educational video game designed to raise awareness about ocean pollution among younger audiences. Inspired by classic Space Invaders gameplay, the project used Python and Pygame to create an engaging and fast-paced virtual environment. Players defend marine ecosystems from pollution while learning impactful facts about environmental issues.',
        image: '/projects/OceanDefender.png',
        tags: ['Python', 'Pygame', 'Education', 'Environment'],
        githubUrl: 'https://github.com/G597842/Ocean-Defender'
    }
];

export const ProjectsSection = () => {
    return (
        <section id='projects' className='py-24 px-4 relative'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'> Featured
                    <span className='text-primary'> Projects </span>
                </h2>

                <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                    A showcase of my most notable projects, demonstrating my skills and expertise in various technologies.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {projects.map((project, key) => (
                        <div key={key}
                            className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col h-full'>
                            <div className='h-48 overflow-hidden'>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                                />
                            </div>
                            <div className='p-6 flex flex-col flex-grow'>
                                <div className='flex flex-wrap gap-2 mb-4'>
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className='border px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground'>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className='text-xl font-semibold mb-1'>{project.title}</h3>
                                <p className='text-muted-foreground text-sm mb-4 flex-grow'>{project.description}</p>

                                {project.githubUrl && (
                                    <div className='mt-auto pt-4 text-center'>
                                        <a
                                            href={project.githubUrl}
                                            className='inline-flex items-center justify-center text-foreground/80 hover:text-primary transition-colors duration-300'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            <Github size={20} />
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className='text-center mt-12'>
                    <a className='cosmic-button w-fit flex items-center mx-auto gap-2' href='https://github.com/kylemather-34' target='_blank'>
                        Check out my other projects on Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};
