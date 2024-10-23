'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Github, Linkedin, Instagram, ExternalLink, FileText, Twitter } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function PortfolioComponent() {
  const [activeSection, setActiveSection] = useState('home')

  const projects = [
    {
      title: "DementiaBuddy",
      description: "A dynamic healthcare platform that aids individuals with dementia in recalling memories through personalized video content and facial recognition.",
      technologies: "OpenCV, Tensorflow, Next.js, Pytorch, React, Supabase, Auto0",
      link: "#",
      image: "/placeholder.svg",
      location: "UofTHacks, Toronto",
      date: "January 2024"
    },
    {
      title: "Ripply",
      description: "Mitigates the learning curve for the blockchain through a chatbot which aids in XRP wallet & fund manipulation.",
      technologies: "Cohere AI, Voiceflow, XRPL, HTML, CSS",
      link: "#",
      image: "/placeholder.svg",
      location: "MetHacks, Toronto",
      date: "March 2024"
    },
    {
      title: "LocalEyes",
      description: "A revolutionary fully responsive web app that encourages users to explore and learn about underrepresented parts of their community.",
      technologies: "Cohere AI, Mapbox API, Javascript, Tailwind CSS, MongoDB Compass",
      link: "#",
      image: "/placeholder.svg",
      location: "MapHacks2, Virtual",
      date: "February 2024"
    },
    {
      title: "AI Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      technologies: "TensorFlow, PyTorch, Scikit-learn, Pandas",
      link: "#",
      image: "/placeholder.svg",
      location: "AI Hackathon, San Francisco",
      date: "April 2024"
    },
    {
      title: "AI Project 2",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      technologies: "Natural Language Processing, Computer Vision, Reinforcement Learning",
      link: "#",
      image: "/placeholder.svg",
      location: "Global AI Challenge, London",
      date: "May 2024"
    },
    {
      title: "AI Project 3",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      technologies: "GANs, Transformers, BERT, GPT",
      link: "#",
      image: "/placeholder.svg",
      location: "AI for Good Hackathon, New York",
      date: "June 2024"
    }
  ]

  const experiences = [
    {
      title: "Senior Data Quality Specialist",
      company: "COHERE",
      period: "Jan 2024 — Present",
      description: "Audited and ranked machine learning datasets by debugging, generating, and quality assurance testing code across multiple languages. Finetuned our models via prompt engineering and data analysis, training Command R+ to overtake Claude 3 and GPT-4-turbo by avg. of 13.5% in benchmarks at 50% cost. Built exclusive administrative projects and initiated technical writing documentation efforts to standardize coding practices internally, boosting team attendance by 200% and showcasing my leadership & dedication to the team's well-being & productivity.",
      skills: "Python, JavaScript, Appscript, C, C++, Java, HTML, Pandas, SQL, Scrum, Latex"
    },
    {
      title: "Data Quality Specialist",
      company: "COHERE",
      period: "Aug 2023 — Jan 2024",
      description: "Optimized proprietary large language models (LLMs) for diverse fields by evaluating structured datasets and prompt completions. Produced & annotated high quality data that created Cohere's Command R, Command R+, a 104 billion parameter model. Contributed innovative ideas and technical insights during team stand-ups, showcasing dedication towards collaborative brainstorming.",
      skills: "Troubleshooting, Annotation, Data Science, Communication, Technical Writing, Leadership, Remote & Hybrid Work"
    },
    {
      title: "Academic Link - Faculty of Science",
      company: "Toronto Metropolitan University Housing & Residence Life",
      period: "August 2023 — April 2024",
      description: "Served as a live-in resident academic advisor, fostering a supportive environment for students in the science and developer community. Provided personalized guidance to help students navigate campus resources, enhancing their academic journey and overall university experience. Organized and facilitated numerous events, including targeted study sessions and hands-on Python & Hackathon workshops, significantly boosting student engagement and practical skills. Contributed to a monthly newsletter, strengthening community bonds and keeping residents informed about opportunities and resources. Leveraged various digital platforms to streamline communication and resource sharing, demonstrating adaptability in using technology to support student success.",
      skills: "Mentorship, Event Planning, Python, Academic Advising, Community Building, Workshop Facilitation, Newsletter Creation, Resource Management, Student Engagement, Technology Integration"
    }
  ]

  const gdgStats = {
    members: 5000,
    events: 50,
    speakersHosted: 30,
    communityImpact: 10000
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-gray-900 dark:text-gray-100">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60">
        <div className="container mx-auto px-4">
          <nav className="flex justify-center items-center h-16 space-x-4">
            {['home', 'about', 'projects', 'experience', 'leadership', 'contact'].map((item) => (
              <Button
                key={item}
                variant={activeSection === item ? "default" : "ghost"}
                onClick={() => setActiveSection(item)}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Button>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8 max-w-5xl">
        {activeSection === 'home' && (
          <section className="flex flex-col lg:flex-row items-center justify-between gap-12 py-12">
            <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                Hi, I&apos;m Rajab Rehan
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Computer Science Student at TMU | AI Enthusiast | Actively Seeking Summer 2023 Internships
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Button onClick={() => setActiveSection('about')} className="bg-blue-500 hover:bg-blue-600 text-white">Learn More</Button>
                <Button variant="outline" onClick={() => setActiveSection('contact')} className="border-purple-500 text-purple-500 hover:bg-purple-50">Contact Me</Button>
                <Button variant="outline" asChild className="border-green-500 text-green-500 hover:bg-green-50">
                  <a href="/assets/Resume_2024_October.pdf" target="_blank" rel="noopener noreferrer">
                    <FileText className="mr-2 h-4 w-4" /> View Resume
                  </a>
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="/placeholder-profile.svg"
                alt="Rajab Rehan"
                width={400}
                height={400}
                className="rounded-full border-4 border-blue-500 shadow-lg mx-auto"
              />
            </div>
          </section>
        )}

        {activeSection === 'about' && (
          <section className="py-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 text-center">About Me</h2>
            <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg text-center">
              First year Computer Science major at Toronto Metropolitan University, passionate about AI and its applications in solving real-world problems. My journey in tech is driven by a curiosity to explore the cutting edge of artificial intelligence and machine learning.
            </p>
            <h3 className="mt-12 text-2xl font-bold text-blue-600 dark:text-blue-400 text-center">Skills</h3>
            <div className="mt-6 text-gray-700 dark:text-gray-300 space-y-4">
              <p><span className="font-semibold">Languages:</span> Python, SQL, Java, C, JavaScript, HTML, CSS, Bash</p>
              <p><span className="font-semibold">Tools:</span> Git, Linux, GCP, Firebase, AWS, Vercel, DigitalOcean, Postman, Notion, Kaggle, Excel, Figma, LaTeX, Jira, Trello, Bootstrap</p>
              <p><span className="font-semibold">Frameworks/Libraries:</span> React, Next.js, MongoDB, Flask, TensorFlow, PyTorch, Supabase, OpenCV, Matplotlib, Appscript, Pandas</p>
            </div>
          </section>
        )}

        {activeSection === 'projects' && (
          <section className="py-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 text-center">Projects</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <Card key={index} className="bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-blue-600 dark:text-blue-400">{project.title}</CardTitle>
                    <CardDescription>{project.technologies}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-2">{project.location}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{project.date}</p>
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={300}
                      height={200}
                      className="rounded-lg object-cover w-full h-48 mb-4"
                    />
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                    <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        View Project <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {activeSection === 'experience' && (
          <section className="py-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 text-center">Work Experience</h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card key={index} className="bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-blue-600 dark:text-blue-400">{exp.title}</CardTitle>
                    <CardDescription>{exp.company} | {exp.period}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                    <p className="text-sm font-semibold text-purple-600 dark:text-purple-400">Skills: {exp.skills}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {activeSection === 'leadership' && (
          <section className="py-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 text-center">Leadership & Community Service</h2>
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Google Developer Groups on Campus TMU</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  As the Founder & President, I've built the largest tech community in Canada, growing from zero to over 5,000 members in just one year. Our mission is to foster innovation, learning, and collaboration among tech enthusiasts.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(gdgStats).map(([key, value]) => (
                    <div key={key} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                      <h4 className="text-lg font-semibold  text-purple-600 dark:text-purple-400">{value}+</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                    </div>
                  ))}
                </div>
                <Button className="mb-6" asChild>
                  <a href="https://www.instagram.com/gdg_tmu/" target="_blank" rel="noopener noreferrer">
                    <Instagram className="mr-2 h-4 w-4" /> Follow us on Instagram
                  </a>
                </Button>
                <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Computer Science Course Union</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  As a Year Representative, I've been actively involved in voicing the concerns of 500+ 'Class of 2026' computer science majors. This role has allowed me to improve student responsiveness towards university faculty and organize events that have increased student engagement in community initiatives by nearly 400%.
                </p>
              </div>
              <div className="space-y-6">
                <Image
                  src="/placeholder-workshop.svg"
                  alt="GDG Workshop"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover w-full"
                />
                <div className="grid grid-cols-2 gap-4">
                  <Image
                    src="/placeholder-event1.svg"
                    alt="GDG Event 1"
                    width={280}
                    height={200}
                    className="rounded-lg object-cover w-full"
                  />
                  <Image
                    src="/placeholder-event2.svg"
                    alt="GDG Event 2"
                    width={280}
                    height={200}
                    className="rounded-lg object-cover w-full"
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'contact' && (
          <section className="py-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 text-center">Contact Me</h2>
            <div className="flex flex-col items-center space-y-6">
              <p className="text-xl text-gray-700 dark:text-gray-300 text-center">rajabrehan0@gmail.com • (647)-237-5456</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild className="border-blue-500 text-blue-500 hover:bg-blue-50">
                  <a href="https://www.linkedin.com/in/rajab-rehan/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                  </a>
                </Button>
                <Button variant="outline" asChild className="border-purple-500 text-purple-500 hover:bg-purple-50">
                  <a href="https://www.github.com/rajabrehan" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </a>
                </Button>
                <Button variant="outline" asChild className="border-pink-500 text-pink-500 hover:bg-pink-50">
                  <a href="https://www.instagram.com/rajabbbbbbbb/" target="_blank" rel="noopener noreferrer">
                    <Instagram className="mr-2 h-4 w-4" /> Instagram
                  </a>
                </Button>
                <Button variant="outline" asChild className="border-sky-500 text-sky-500 hover:bg-sky-50">
                  <a href="https://twitter.com/your-twitter-handle" target="_blank" rel="noopener noreferrer">
                    <Twitter className="mr-2 h-4 w-4" /> Twitter
                  </a>
                </Button>
                <Button variant="outline" asChild className="border-cyan-500 text-cyan-500 hover:bg-cyan-50">
                  <a href="https://t.me/your-telegram-username" target="_blank" rel="noopener noreferrer">
                    <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.324-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.015 3.333-1.386 4.025-1.627 4.477-1.635.099-.002.321.023.465.178.121.13.142.305.157.466.042.47-.004.798-.004.798z"/>
                    </svg>
                    Telegram
                  </a>
                </Button>
              </div>
              <div className="mt-8 w-full max-w-2xl">
                <Image
                  src="/placeholder.svg?height=300&width=600"
                  alt="Contact Image"
                  width={600}
                  height={300}
                  className="rounded-lg object-cover w-full"
                />
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="mt-auto border-t bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            © 2024 Rajab Rehan. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}