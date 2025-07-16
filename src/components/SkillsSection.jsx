import { useState } from 'react';
import { cn } from "@/lib/utils";

const skills = [
  // Programming Languages
  { name: "Python", category: "Programming" },
  { name: "Java", category: "Programming" },
  { name: "JavaScript", category: "Programming" },
  { name: "C", category: "Programming" },
  { name: "C++", category: "Programming" },
  { name: "R", category: "Programming" },

  // Cybersecurity Tools
  { name: "Nmap", category: "Cybersecurity" },
  { name: "Wireshark", category: "Cybersecurity" },
  { name: "Metasploit", category: "Cybersecurity" },
  { name: "Nessus", category: "Cybersecurity" },
  { name: "OpenVAS/GVM", category: "Cybersecurity" },
  { name: "TCPDump", category: "Cybersecurity" },
  { name: "Cisco Packet Tracer", category: "Cybersecurity" },

  // Operating Systems
  { name: "Linux (RHEL, Ubuntu, Kali)", category: "Operating System" },
  { name: "Windows", category: "Operating System" },
  { name: "macOS", category: "Operating System" },

  // Virtualization
  { name: "VMware Fusion", category: "Virtualization" },
  { name: "Oracle VirtualBox", category: "Virtualization" },

  // InfoSec/IT Tools
  { name: "Jira", category: "IT Tools" },
  { name: "Jamf Pro", category: "IT Tools" },
  { name: "Confluence", category: "IT Tools" },
  { name: "Zoom Admin", category: "IT Tools" },
  { name: "Google Suite", category: "IT Tools" },

  // Databases and Data Tools
  { name: "SQL", category: "Database" },
  { name: "Microsoft Excel", category: "Data Tools" },
  { name: "Google Sheets", category: "Data Tools" },
];

const categories = ['all', 'Programming', 'Cybersecurity', 'Operating System', 'Virtualization', 'IT Tools', 'Database', 'Data Tools'];


export const SkillsSection = () => {
const [activeCategory, setActiveCategory] = useState('all');

    return <section id='skills'
    className='py-24 px-4 bg-secondary/30'
    >
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                My <span className='text-primary'>Skills</span>
            </h2>

            <div className='flex flex-wrap justify-center gap-4 mb-12'>
                {categories.map((category, key) => (
                    <button
                        key={key}
                        onClick={() => setActiveCategory(category)}
                        className={cn(
                            'px-5 py-2 rounded-full transition-colors duration-300 capitalize',
                            activeCategory === category ? 'bg-primary text-primary-foreground' : 
                            'bg-secondary/70 text-foreground hover:bg-secondary'
                        )}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {skills
                .filter((skill) => activeCategory === 'all' || skill.category === activeCategory)
                .map((skill, key) => (
                    <div key={key} className='bg-card p-6 rounded-lg shadow-xs card-hover'>
                        <div className='text-center mb-4'>
                            <h3 className='font-semibold text-lg'> {skill.name} </h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}