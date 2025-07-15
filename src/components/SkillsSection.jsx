

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

  // Languages
  { name: "English", category: "Language" },
  { name: "Spanish", category: "Language" },
  { name: "French", category: "Language" },
  { name: "Portuguese", category: "Language" }
];


export const SkillsSection = () => {
    return <section id='skills' className='py-24 px-4 bg-secondary/30'></section>
}