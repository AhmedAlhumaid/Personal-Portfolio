import { useEffect } from 'react';
import './App.css';

const contact = {
  name: 'Lionel Messi',
  email: '8BallonDors@gmail.com',
  phone: '+1 305 8XX XXXX',
  location: 'Miami, Florida & Rosario, Argentina',
  objective:
    'World Cup champion and 8-time Ballon d\'Or winner. Widely regarded as one of the greatest footballers of all time, combining exceptional dribbling, vision, and goal-scoring ability.',
};

const career = {
  academy: 'FC Barcelona Youth Academy (La Masia)',
  achievement: 'Professional Footballer & Captain',
  years: '2000 – Present',
  location: 'Barcelona, Paris & Miami',
  highlights: [
    'FIFA World Cup Winner (2022)',
    '8× Ballon d\'Or Winner',
    '4× UEFA Champions League Winner',
    '10× La Liga Champion',
    'All-time Top Scorer for Barcelona & Argentina',
    'Copa América Winner (2021)',
  ],
  stats: [
    { label: 'Career Goals', value: '800+' },
    { label: 'Career Assists', value: '350+' },
  ],
};

const skills = {
  technical: [
    'Dribbling & Ball Control',
    'Finishing & Goal Scoring',
    'Playmaking & Vision',
    'Free Kicks & Set Pieces',
    'Left-footed Precision',
  ],
  mental: ['Leadership & Captaincy', 'Clutch Performance', 'Game Intelligence', 'Team Chemistry'],
};

const clubs = ['Barcelona', 'PSG', 'Inter Miami', 'Argentina NT', 'Newell\'s Old Boys', 'La Masia'];

const careerHighlights = [
  {
    title: 'FIFA World Cup Victory',
    achievement: 'Champion & Golden Ball',
    date: 'Dec 2022',
    description:
      'Led Argentina to World Cup glory in Qatar, scoring 7 goals including a brace in the final. Won the Golden Ball as tournament\'s best player, cementing legacy as the greatest.',
  },
  {
    title: 'Barcelona Golden Era',
    achievement: '35 Trophies',
    date: '2004-2021',
    description:
      'Spent 17 seasons with Barcelona, winning 10 La Liga titles, 4 Champions Leagues, and scoring 672 goals. Became the club\'s all-time leading scorer and assisted in hundreds more.',
  },
  {
    title: 'Eight Ballon d\'Or Awards',
    achievement: 'Record Breaking',
    date: '2009-2023',
    description:
      'Won a record 8 Ballon d\'Or awards (2009, 2010, 2011, 2012, 2015, 2019, 2021, 2023), more than any player in history. Consistently recognized as the world\'s best footballer.',
  },
];

const achievements = {
  majorTrophies: [
    'FIFA World Cup (2022)',
    'Copa América (2021, 2024)',
    'UEFA Champions League (4×)',
    'La Liga (10×)',
    'Copa del Rey (7×)',
    'Ligue 1 (2×)',
    'Leagues Cup (2023)',
  ],
  individualAwards: [
    { title: '8× FIFA Ballon d\'Or', year: '2009-2023' },
    { title: 'FIFA World Cup Golden Ball', year: '2022' },
    { title: '6× European Golden Shoe', year: 'Various' },
    { title: 'FIFA World Player of the Year', year: '2009' },
    { title: 'Laureus World Sportsman of the Year', year: '2020, 2023' },
  ],
};

const languages = [
  { name: 'Spanish', level: 'Native' },
  { name: 'Catalan', level: 'Fluent' },
  { name: 'English', level: 'Conversational' },
];

function App() {
  useEffect(() => {
    // Reveal animations for sections
    const revealables = document.querySelectorAll('.reveal, .pop');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    revealables.forEach((el) => observer.observe(el));

    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="page">
      <header className="hero">
        <div className="hero__content">
          <p className="eyebrow">World Cup Champion • 8× Ballon d'Or</p>
          <h1>{contact.name}</h1>
          <p className="hero__objective">{contact.objective}</p>
          <div className="hero__contact">
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href={`tel:${contact.phone}`}>{contact.phone}</a>
            <span>{contact.location}</span>
          </div>
          <div className="hero__actions">
            <a className="btn primary" href={`mailto:${contact.email}`}>
              Get In Touch
            </a>
            <a className="btn ghost" href="#highlights">
              View Achievements
            </a>
          </div>
        </div>
        <div className="hero__card">
          <div className="hero__image">
            <img
              src="/messi-profile.jpg"
              alt="Lionel Messi"
              className="profile-img"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
              }}
            />
            <div className="image-placeholder">
              <span>🐐</span>
              <p>Add messi-profile.jpg to /public folder</p>
            </div>
          </div>
          <p>Greatest of All Time • Argentina Captain</p>
          <div className="hero__stats">
            {career.stats.map((stat) => (
              <div key={stat.label}>
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main>
        <section className="section career reveal">
          <div>
            <h2>Career Journey</h2>
            <p className="section__subtitle">{career.achievement}</p>
          </div>
          <div className="education__details">
            <div>
              <h3>{career.academy}</h3>
              <p>{career.location}</p>
              <p className="muted">{career.years}</p>
            </div>
            <div>
              <h4>Major Achievements</h4>
              <ul>
                {career.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section skills reveal">
          <div>
            <h2>Skills & Attributes</h2>
            <p className="section__subtitle">Exceptional technical ability combined with unmatched football IQ.</p>
          </div>
          <div className="skills__grid">
            <div className="card">
              <h3>Technical Skills</h3>
              <ul>
                {skills.technical.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3>Mental Attributes</h3>
              <ul>
                {skills.mental.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="stack">
            {clubs.map((club, index) => (
              <span key={club} style={{ animationDelay: `${index * 60}ms` }}>
                {club}
              </span>
            ))}
          </div>
        </section>

        <section id="highlights" className="section projects reveal">
          <div>
            <h2>Career Highlights</h2>
            <p className="section__subtitle">Defining moments from an extraordinary football career.</p>
          </div>
          <div className="projects__grid">
            {careerHighlights.map((highlight, index) => (
              <article key={highlight.title} className="card pop" style={{ animationDelay: `${index * 120}ms` }}>
                <header>
                  <p className="muted">{highlight.date}</p>
                  <span className="tag">{highlight.achievement}</span>
                </header>
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section credentials reveal">
          <div>
            <h2>Trophies & Awards</h2>
          </div>
          <div className="credentials__grid">
            <div className="card">
              <h3>Major Trophies</h3>
              <ul>
                {achievements.majorTrophies.map((trophy) => (
                  <li key={trophy}>{trophy}</li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3>Individual Awards</h3>
              <ul>
                {achievements.individualAwards.map((award) => (
                  <li key={award.title}>
                    <div>
                      <strong>{award.title}</strong>
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
            <h2>Legacy</h2>
          </div>
          <div className="card">
            <p>Widely regarded as the greatest footballer of all time. From the streets of Rosario to lifting the World Cup, Lionel Messi has inspired millions with his extraordinary talent, humility, and dedication to the beautiful game.</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>🏆 World Cup Champion • 8× Ballon d'Or • The Greatest of All Time 🐐</p>
      </footer>
    </div>
  );
}

export default App;
