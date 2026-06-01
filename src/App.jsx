import React, { useState, useEffect } from 'react';
import profilePic from './assets/Avikmakal.png'; 
import './App.css';

function App() {
  const [time, setTime] = useState(new Date());
  
  // States to control the Easter egg animations
  const [showSurprise, setShowSurprise] = useState(false);
  const [zoomClock, setZoomClock] = useState(false); // Handles clock interactive zoom

  // Updates the time every second
  useEffect(() => {
    const timerId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  // Formats the digital clock
  const formatTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12; 
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    return `${hours}:${minutes}:${seconds} ${ampm}`;
  };

  // Math for the Analog Clock rotations
  const secondsDegrees = time.getSeconds() * 6; 
  const minutesDegrees = time.getMinutes() * 6 + time.getSeconds() * 0.1; 
  const hoursDegrees = (time.getHours() % 12) * 30 + time.getMinutes() * 0.5;

  // Profile picture click handler
  const handleProfileClick = () => {
    setShowSurprise(true);
    setTimeout(() => {
      setShowSurprise(false);
    }, 3000);
  };

  // Analog clock click handler
  const handleClockClick = () => {
    setZoomClock(true);
    setTimeout(() => {
      setZoomClock(false);
    }, 3000); // Zoom duration set to 3 seconds
  };

  const portfolioData = {
    name: "Avik Makal",
    role: "B.Sc Life Sciences | Digital Artist | Developer",
    bio: "Welcome to my digital space. I am passionate about the intersection of biology, technology, and art. From studying enzymology at Ramakrishna Mission Residential College to creating frame-by-frame animations, this is where I share my work.",
    // In App.jsx
links: [
  { id: 1, label: "Code", url: "https://github.com/Avik1233781" }, 
  { id: 2, label: "Work", url: "https://linkedin.com/in/yourusername" }, 
  { 
  id: 3, 
  label: "Email Me", 
  url: "https://mail.google.com/mail/?view=cm&fs=1&to=tanusreemakal6@gmail.com"},
  { 
  id: 4, 
  label: "Instagram", 
  url: "https://www.instagram.com/i_am_avik_001_/" },
  { 
  id: 5, 
  label: "Desmos", 
  url: "https://www.desmos.com/calculator"}
],
    projects: [
      {
        id: 1,
        category: "🔬 Academic Research",
        title: "Enzymology & Acid Phosphatase",
        description: "A detailed study on enzyme kinetics, analyzing reaction rates and catalytic efficiency.",
        link: "#"
      },
      {
        id: 2,
        category: "🎬 Creative Works",
        title: "\"Tout Donner\" Music Video",
        description: "A frame-by-frame animation project showcasing digital art and video editing skills.",
        link: "https://www.instagram.com/p/DUr7CcUEqEV/"
      },
      {
        id: 3,
        category: "💻 Software & Code",
        title: "Simple chatbot using python",
        description: "A simple chatbot implemented in Python to demonstrate basic natural language processing concepts.",
        link: "https://github.com/Avik1233781/Welcome-To-Avik-Makal-s-Chatbot"
      },
      
      {
        id: 4,
        category: "🖌️Desmos Anime Art",
        title: "Desmos Art Alya Draw",
        description: "Creative mathematical anime art created using Desmos graphing calculator.",
        link: "https://www.desmos.com/calculator/0ljjyncaqv"
      }
    ]
  };

  return (
    <div className="portfolio-container">
      
      {/* HEADER SECTION */}
      <header className="header-section fade-in-down">
        
        {/* Profile Container */}
        <div className="profile-container">
          <img 
            src={profilePic} 
            alt="Profile" 
            className={`profile-img ${showSurprise ? 'zoom-effect' : ''}`} 
            onClick={handleProfileClick}
          />
          <div className={`catchy-message ${showSurprise ? 'show-message' : ''}`}>
            🎉 Hello guys!! AVIK IS HERE!!! 😎
          </div>
        </div>

        <h1>Hello, I'm <span className="highlight-text">{portfolioData.name}</span></h1>
        
        {/* DUAL CLOCK DISPLAY */}
        <div className="dual-clock-container">
          
          {/* Interactive Analog Clock Wrapper */}
          <div className="interactive-clock-wrapper">
            <div 
              className={`analog-clock ${zoomClock ? 'zoom-effect' : ''}`} 
              onClick={handleClockClick}
              title="Click the clock!"
            >
              <div className="hand hour-hand" style={{ transform: `rotate(${hoursDegrees}deg)` }} />
              <div className="hand min-hand" style={{ transform: `rotate(${minutesDegrees}deg)` }} />
              <div className="hand sec-hand" style={{ transform: `rotate(${secondsDegrees}deg)` }} />
              <div className="clock-center"></div>
            </div>
            
            {/* Catchy Clock Message */}
            <div className={`catchy-message ${zoomClock ? 'show-message' : ''}`}>
              ⏳ Hurry up! Time is ticking! 🚀
            </div>
          </div>
          
          {/* Digital Neon Clock */}
          <div className="clock-wrapper">
            <div id="live-clock">⏱ {formatTime(time)}</div>
          </div>
        </div>
        
        <h2>{portfolioData.role}</h2>
        <p className="bio-text">{portfolioData.bio}</p>
      </header>

      {/* CHROME TAB LINKS SECTION */}
      <section className="links-section fade-in-up delay-1">
        <h3>My Quick Links</h3>
        <div className="button-group">
          {portfolioData.links.map((link) => (
            <a key={link.id} href={link.url} target="_blank" rel="noreferrer" className="link-button">
              {link.label}
            </a>
          ))}
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="projects-section fade-in-up delay-2">
  <h3>My Work</h3>
  // --- CORRECT STRUCTURE ---
<div className="project-grid">
   <div className="project-card">Enzymology...</div>
   <div className="project-card">Music Video...</div>
   <div className="project-card">Chatbot...</div>
   
   {/* PASTE THE DESMOS CARD CODE HERE, INSIDE THE DIV */}
   <div className="project-card">
       <h4>Desmos Anime Art</h4>
       <p>...</p>
       <a href="...">View Projects</a>
   </div>
</div>
</section>

      <footer className="fade-in-up delay-3">
        <p>© {new Date().getFullYear()} {portfolioData.name}. Built with React.</p>
      </footer>
    </div>
  );
}

export default App;