import { Mail, Phone, MapPin, Instagram, XLogo } from "lucide-react";

const linkedinLogo = "/LinkedIn.png";

export const ContactSection = () => {
    return (
    <section id='contact' className='py-24 px-4 bg-secondary/30'>
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>Get in <span className='text-primary'>touch!</span></h2>

            <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                Have a question or want to work together? Feel free to reach out via one of the methods below.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                <div className='space-y-8'>
                    <h3 className='text-2xl font-semibold mb-6'> Contact Information </h3>

                    <div className='space-y-6 justify-center'>
                        <div className='flex items-start space-x-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <Mail className='h-6 w-6 text-primary'/>
                            </div>
                            <div>
                                <h4 className='font-medium text-left'> Email</h4>
                                <a href='mailto:matherkyle9@gmail.com' className='text-muted-foreground hover:text-primary transition-colors'>matherkyle9@gmail.com </a>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-start space-x-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <Phone className='h-6 w-6 text-primary'/>
                            </div>
                            <div>
                                <h4 className='font-medium text-left'> Phone</h4>
                                <a href='tel:+19789041175' className='text-muted-foreground hover:text-primary transition-colors'>+1 (978) 904-1175</a>
                            </div>
                        </div>
                        <div className='flex items-start space-x-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <MapPin className='h-6 w-6 text-primary'/>
                            </div>
                            <div>
                                <h4 className='font-medium text-left'> Location</h4>
                                <a className='text-muted-foreground hover:text-primary transition-colors'>New Haven, CT, United States</a>
                            </div>
                        </div>
                </div>

                <div className='pt-8'>
                    <h4 className='font-medium mb-4'> Connect with me</h4>
                    <div className='flex space-x-4 justify-center'>
                        <a href='https://www.linkedin.com/in/kyle-mather-b06104164/' target='_blank' rel='noopener noreferrer'>
                            <img src={linkedinLogo} alt='LinkedIn Logo' className='h-8 w-8 color-primary hover:opacity-80 transition-opacity' />
                        </a>
                        <a href='https://www.instagram.com/_kylemather/' target='_blank' rel='noopener noreferrer'>
                            <Instagram className='h-8 w-8 color-primary hover:opacity-80 transition-opacity' />
                        </a>
                        <a href='https://www.x.com/kylemather11' target='_blank' rel='noopener noreferrer'>
                            <XLogo className='h-8 w-8 color-primary hover:opacity-80 transition-opacity' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}