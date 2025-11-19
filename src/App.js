import { useEffect } from 'react';
import './App.css';

const contact = {
  name: 'Winston Churchill',
  email: 'winston@gmail.com',
  phone: '+966505891400',
  location: 'Dhahran, Saudi Arabia',
  objective:
    'Computer Science student at KFUPM seeking a summer training position to contribute to innovative projects while gaining hands-on industry experience.',
};

const education = {
  institution: 'King Fahd University of Petroleum and Minerals',
  program: 'B.S. Computer Science',
  years: '2021 – 2026',
  location: 'Dhahran, Saudi Arabia',
  coreCoursework: [
    'Object Oriented Programming',
    'Data Structures & Algorithms',
    'Principles of Software Engineering',
    'Databases',
    'Web Development & Engineering',
    'Networks & Data Communication',
  ],
  stats: [
    { label: 'Major GPA', value: '3.95 / 4' },
    { label: 'Cumulative GPA', value: '3.93 / 4' },
  ],
};

const skills = {
  technical: [
    'Web Development (Frontend & Backend)',
    'Mobile Apps (Frontend)',
    'API Development',
    'Database Design & Normalization',
    'Technical Report Writing',
  ],
  soft: ['Problem Solving', 'Communication & Teamwork', 'Time Management', 'Organization'],
};

const techStack = ['Java', 'JavaScript', 'HTML', 'CSS', 'MongoDB', 'Express.js', 'React', 'Node.js', 'Python', 'Flutter', 'Dart', 'SQL'];

const projects = [
  {
    title: 'Train-Booking System',
    stack: 'MERN',
    date: 'Dec 2024',
    description:
      'Web application to streamline ticket booking. Implemented JWT-based authentication, seat selection, and booking workflows.',
  },
  {
    title: 'Single Cycle & Pipelined Processor',
    stack: 'Logisim',
    date: 'May 2024',
    description:
      'Designed and simulated single-cycle and pipelined processors demonstrating mastery of architecture and pipeline optimization.',
  },
  {
    title: 'Events & Facilities Reservation System',
    stack: 'Java / JavaFX',
    date: 'May 2024',
    description:
      'Desktop app enabling streamlined reservation management with intuitive UI and core scheduling capabilities.',
  },
];

const credentials = {
  certificates: ['Flutter & Dart - The Complete Guide (Maximilian Schwarzmüller)'],
  awards: [
    { title: 'Dean’s Honor List', org: 'Department of Computing & Mathematics', year: '2025' },
    { title: 'Outstanding Performance in Physics (Twice)', org: 'KFUPM Physics Department', year: '2023' },
    { title: 'Outstanding Performance in Mathematics', org: 'KFUPM Math Department', year: '2022' },
  ],
};

const languages = [
  { name: 'Arabic', level: 'Native' },
  { name: 'English', level: 'Professional – TOEFL PBT 607/677 (≈ IELTS 7-7.5)' },
];

function App() {
  useEffect(() => {
    const revealables = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealables.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="page">
      <header className="hero reveal">
        <div className="hero__content">
          <p className="eyebrow">Summer Training Candidate</p>
          <h1>{contact.name}</h1>
          <p className="hero__objective">{contact.objective}</p>
          <div className="hero__contact">
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href={`tel:${contact.phone}`}>{contact.phone}</a>
            <span>{contact.location}</span>
          </div>
          <div className="hero__actions">
            <a className="btn primary" href={`mailto:${contact.email}`}>
              Let’s Connect
            </a>
            <a className="btn ghost" href="#projects">
              View Projects
            </a>
          </div>
        </div>
        <div className="hero__card">
          <p>Computer Science Student · KFUPM</p>
          <div className="hero__stats">
            {education.stats.map((stat) => (
              <div key={stat.label}>
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main>
        <section className="section education reveal">
          <div>
            <h2>Education</h2>
            <p className="section__subtitle">{education.program}</p>
          </div>
          <div className="education__details">
            <div>
              <h3>{education.institution}</h3>
              <p>{education.location}</p>
              <p className="muted">{education.years}</p>
            </div>
            <div>
              <h4>Core Coursework</h4>
              <ul>
                {education.coreCoursework.map((course) => (
                  <li key={course}>{course}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section skills reveal">
          <div>
            <h2>Skills</h2>
            <p className="section__subtitle">Strong technical foundation backed by collaborative soft skills.</p>
          </div>
          <div className="skills__grid">
            <div className="card">
              <h3>Technical</h3>
              <ul>
                {skills.technical.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3>Soft Skills</h3>
              <ul>
                {skills.soft.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="stack">
            {techStack.map((tech, index) => (
              <span key={tech} style={{ animationDelay: `${index * 60}ms` }}>
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section id="projects" className="section projects reveal">
          <div>
            <h2>Highlighted Projects</h2>
            <p className="section__subtitle">Select work across web, systems, and desktop development.</p>
          </div>
          <div className="projects__grid">
            {projects.map((project, index) => (
              <article key={project.title} className="card pop" style={{ animationDelay: `${index * 120}ms` }}>
                <header>
                  <p className="muted">{project.date}</p>
                  <span className="tag">{project.stack}</span>
                </header>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section credentials reveal">
          <div>
            <h2>Credentials</h2>
          </div>
          <div className="credentials__grid">
            <div className="card">
              <h3>Certificates</h3>
              <ul>
                {credentials.certificates.map((cert) => (
                  <li key={cert}>{cert}</li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3>Awards</h3>
              <ul>
                {credentials.awards.map((award) => (
                  <li key={award.title}>
                    <div>
                      <strong>{award.title}</strong>
                      <p className="muted">{award.org}</p>
                    </div>
                    <span>{award.year}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section languages reveal">
          <div>
            <h2>Languages</h2>
          </div>
          <div className="card languages__card">
            {languages.map((lang) => (
              <div key={lang.name}>
                <h3>{lang.name}</h3>
                <p>{lang.level}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section references reveal">
          <div>
            <h2>References</h2>
          </div>
          <div className="card">
            <p>Available upon request.</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Ready to contribute to impactful teams during Summer 2025.</p>
      </footer>
    </div>
  );
}

export default App;
