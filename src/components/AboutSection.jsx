import {Shield, Bug, Briefcase} from "lucide-react";
export const AboutSection = () => {
    return <section id='about' className='py-24 px-4 relative'>
        {" "}
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3x md:text-4xl font-bold text-center mb-12'>
              About <span className='text-primary'>Me</span>  
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                <div className='space-y-6'>
                    <h3 className='text-2xl font-semibold'>
                        Passionate Cybersecurity Analyst & Ethical Hacker
                    </h3>

                    <p className='text-muted-foreground'>
                        I am a dedicated cybersecurity analyst with a passion for ethical hacking. 
                        My journey in the tech world has been driven by a desire to protect and secure digital environments. 
                        With a strong foundation in cybersecurity principles, I thrive on challenges that require innovative solutions 
                        to complex security issues.
                    </p>

                    <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
                        <a href='#contact' className='cosmic-button'>Contact Me</a>

                    </div>

                    <a href='/public/KyleMather_CyberResume.pdf'
                    target='_blank' rel='noopener noreferrer'
                    className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300'>View or Download Resume</a>

                </div>
                <div className='grid grid-cols-1 gap-6'>
                    <div className='gradient-border p-6 card-hover'>
                        <div className='flex items-start gap-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <Shield className='h-6 w-6 text-primary'/>
                            </div>
                            <div className='text-left'>
                                <h4 className='font-semibold text-lg'> Security Engineering</h4>
                                <p className='text-muted-foreground'> I design secure systems with a focus on automation, threat mitigation, and proactive defense. 
                                    From building secure-by-default tools to analyzing vulnerabilities in complex architectures, 
                                    I’m passionate about engineering solutions that scale with security in mind.</p>
                            </div>
                        </div>
                    </div>
                    <div className='gradient-border p-6 card-hover'>
                        <div className='gradient-border p-6 card-hover'>
                        <div className='flex items-start gap-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <Bug className='h-6 w-6 text-primary'/>
                            </div>
                            <div className='text-left'>
                                <h4 className='font-semibold text-lg'> Penetration Testing</h4>
                                <p className='text-muted-foreground'> As an ethical hacker, I simulate real-world attacks to uncover vulnerabilities before malicious actors can 
                                    exploit them. I specialize in network reconnaissance, web application testing, and red team exercises that 
                                    strengthen organizational resilience.</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className='gradient-border p-6 card-hover'>
                        <div className='gradient-border p-6 card-hover'>
                        <div className='flex items-start gap-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <Briefcase className='h-6 w-6 text-primary'/>
                            </div>
                            <div className='text-left'>
                                <h4 className='font-semibold text-lg'> Professional Experience</h4>
                                <p className='text-muted-foreground'> I’ve supported enterprise security teams as an Information Security Engineer Intern at Principal Financial 
                                    Group and as an IT Help Desk Intern at Snyk. These roles sharpened my technical skills and gave me firsthand 
                                    experience in identity management, incident response, and user support at scale.</p>
                            </div>
                        </div>
                    </div>
                    </div>

                </div>

            </div>
        </div>
    </section>
}