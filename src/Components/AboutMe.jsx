import { Briefcase, Code, User } from 'lucide-react'
import React from 'react'

const AboutMe = () => {
  return (
    <section id='about' className='py-24 px-4 relative'>
        <div className="container mx-auto max-w-5xl">
            <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                About <span className='text-primary'>Me</span>
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                <div className='space-y-6'>
                    <h3 className='text-2xl font-semibold text-indigo-300'>Designing Thoughtful, Scalable Web Experiences</h3>
                    <p className='text-muted-foreground'>
                        I am a results-driven Web Developer specializing in React and Django, with a strong focus on building fast, responsive, and scalable web applications. I enjoy crafting clean component-based UIs in React and developing robust backend systems using Django and REST APIs.
                    </p>
                    <p className='text-muted-foreground'>I am deeply passionate about full-stack development, modern frontend workflows, and performance-optimized applications. I actively build real-world projects, explore best practices, and continuously sharpen my skills to create seamless user experiences backed by powerful server-side logic.
                    </p>

                    <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
                        <a href="#contact" className='cosmic-button'>
                            {" "}
                            Get In Touch
                        </a>
                        <a href="" className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300'>
                            Download CV here
                        </a>
                    </div>
                </div>

                <div className='grid grid-cols-1 gap-6'>
                    <div className='rounded-md gradient-border p-6 card-hover'>
                        <div className='flex items-start gap-4'>
                            <div className='p-3 rounded-full bg-primary/10'> <Code className='h-6 w-6 text-primary' />
                            </div>
                            <div className='text-left'>
                                <h4 className='font-semibold text-lg '>Web Development</h4>
                                <p className='text-muted-foreground'>Creating responsive websites and web applications with modern frameworks</p>
                        </div>
                        </div>
                    </div>
                    <div className='gradient-border p-6 card-hover'>
                        <div className='flex items-start gap-4'>
                            <div className='p-3 rounded-full bg-primary/10'> <User className='h-6 w-6 text-primary' />
                            </div>
                            <div className='text-left'>
                                    <h4 className='font-semibold text-lg '>UI/ UX Design</h4>
                                    <p className='text-muted-foreground'>Designing intuitive user interfaces and seamless user experiences</p>
                                </div>

                        </div>
                    </div>
                    <div className='gradient-border p-6 card-hover'> 
                        <div className='flex items-start gap-4'>
                            <div className='p-3 rounded-full bg-primary/10'> <Briefcase className='h-6 w-6 text-primary' />
                            </div>
                            <div className='text-left'>
                                    <h4 className='font-semibold text-lg '>Project Management</h4>
                                    <p className='text-muted-foreground'>Leading projects from conception to completion with agile methodologies.</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutMe
