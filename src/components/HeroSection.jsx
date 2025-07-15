import { ArrowDown } from "lucide-react"


export const HeroSection = () => {
    return <section id="hero" className='relative min-h-screen flex flex-column items-center justify-center'>
        <div className='container max-w-4xl mx-auto text-center z-10'>
            <div className='space-y-6'>
                <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
                    <span className='animate-fade-in'>Hi, I'm</span>
                    <span className='text-primary animate-fade-in-delay-1'> Kyle</span>
                    <span className='text-gradient animate-fade-in-delay-2'> Mather</span>
                </h1>

                <p className='text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto animate-fade-in-delay-3'>
                    I'm a cybersecurity-focused developer and problem solver with hands-on experience in ethical hacking, 
                    threat detection, and secure software development. I specialize in building tools that bridge security and usability, from 
                    IDE plugins that detect insecure code to AI-powered systems that analyze digital threats in real time. Whether I’m conducting 
                    network forensics, designing secure architectures, or leading a red team engagement, I approach each challenge with technical 
                    precision and a strong focus on impact.
                </p>
                
                <div className='pd-4 animate-fade-in-delay-4'>
                    <a href='#projects' className='cosmic-button'>
                        View My Work
                    </a>
                </div>
            </div>
        </div>
        <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce'>
            <span className='text-sm text-muted-foreground mb-2'> Scroll</span>
            <ArrowDown className='h-5 w-5 text-primary' />
        </div>
    </section>
}