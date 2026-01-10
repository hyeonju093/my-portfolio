import React, { useState, useEffect } from 'react';
import profileimg from './assets/profile.jpg.webp';
import portfolioImg from './assets/portfolioimg.jpg';
import capstoneImg from './assets/teamprojectimg.jpg';
import './App.css'; // 작성한 CSS 불러오기
import { Tags } from 'lucide-react';

function App() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const fullText = "안녕하세요 프론트엔드 개발자 홍현주입니다.";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i <= fullText.length) {
        setDisplayText(fullText.substring(0, i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, []);

  const projectList = [
    {
      title: "캡스톤디자인(낙상감지시스템)",
      period: "2025.02 - 2025.11",
      description: "인공지능(MediaPipe, PyTorch)과 Django를 결합하여 실시간 낙상 감지 시스템을 제작하였습니다 저는 팀프젝트에서 프론트엔드 구현을 맡았고 HTML을 사용해 프론트엔드를 구현하였습니다",
      image: capstoneImg,
      tags: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/TimePise/Capstone-Design"
    },
    {
      title: "웹 사이트 포트폴리오",
      period: "2025.12 - 2026.01",
      description: "React와 Vite를 사용하여 프론트엔드 개발자 포트폴리오를 웹사이트 형식으로 제작하였습니다",
      image: portfolioImg,
      tags: ["React", "CSS", "Vite"],
      link: "https://hyeonju.me.kr/"
    }
  ];

  const nextProject = () => {
    setCurrentIdx((prev) => (prev === projectList.length - 1 ? 0 : prev + 1));
  };
  const prevProject = () => {
    setCurrentIdx((prev) => (prev === 0 ? projectList.length - 1 : prev - 1));
  };

  return (
    <div className="App">
      <nav className="navbar">
        <h1 className="logo"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style = {{ cursor: 'pointer' }}>
          hyeonju ' s portfolio
        </h1>
        <ul className="nav-links">
          <li><a href="#about">About me</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <header className="hero">
        <h2>{displayText}<span className="cursor"></span></h2>
        <p>
          안녕하세요 사용자가 오래 머무르고 싶은 웹사이트를 제작하는 프론트엔드 개발자 홍현주입니다.<br/>
          변화를 두려워하지 않고 끊임없이 학습하여 서비스의 완성도를 높일 수 있는 개발자가 되고 싶습니다.
        </p>
      </header>

      <section id="about" className="about-section">
        <h3 className="section-title">About me</h3>

        <div className="about-container">
          <div className="about-image">
            <div className="image-box">
              <img src={profileimg} alt="프로필사진" className="profile-photo" />
            </div>
          </div>

          <div className="about-content">
            <div className="info-grid">
              <div className="info-item">
                <span className="info-label">이름</span>
                <span className="info-value">홍현주</span>
              </div>
              <div className="info-item">
                <span className="info-label">생년월일</span>
                <span className="info-value">2022.09.03</span>
              </div>
              <div className="info-item">
                <span className="info-label">주소</span>
                <span className="info-value">대구광역시 달서구</span>
              </div>
              <div className="info-item">
                <span className="info-label">학력</span>
                <span className="info-value">계명대학교(컴퓨터공학 전공)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills-section">
        <h3 className="section-title">Skills</h3>

        <div className="skills-board">
          <div className="skill-group">
            <div className="skill-category">
              <span className="category-icon">🌐</span>
              <span className="category-name"> 개발 기술</span>
            </div>
            <div className="skill-tags">
              <span className="tag ts">TypeScript</span>
              <span className="tag js">JavaScript</span>
              <span className="tag react">React</span>
              <span className="tag nextjs">Next.js</span>
            </div>
          </div>

          <div className="skill-group">
            <div className="skill-category">
              <span className="category-icon">💻</span>
              <span className="category-name"> 스타일링 및 마크업</span>
            </div>
            <div className="skill-tags">
              <span className="tag html">HTML5</span>
              <span className="tag css">CSS3</span>
              <span className="tag vite">Vite</span>
            </div>
          </div>

          <div className="skill-group">
            <div className="skill-category">
              <span className="category-icon">🛠️</span>
              <span className="category-name"> 협업 도구</span>
            </div>
            <div className="skill-tags">
              <span className="tag github">Github</span>
              <span className="tag figma">Figma</span>
              <span className="tag notion">Notion</span>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <h3 className="section-title">Projects</h3>

        <div className="project-slider">
          <button className="arrow prev" onClick={prevProject}>&lt;</button>

          <div className="project-card">
            <div className="project-image-container">
              <img
                src={projectList[currentIdx].image}
                alt={projectList[currentIdx].title}
                className="project-image"
              />
            </div>

            <div className="project-info">
              <h4>{projectList[currentIdx].title}</h4>
              <span className="project-period">{projectList[currentIdx].period}</span>
              <p className="project-desc">{projectList[currentIdx].description}</p>
              <div className="project-tags">
                {projectList[currentIdx].tags.map(tag => (
                  <span key={tag} className="project-tag">#{tag}</span>
                ))}
              </div>
              <a href={projectList[currentIdx].link} target="_blank" rel="noreferrer" className="view-btn">
                Veiw Project
              </a>
            </div>
          </div>

          <button className="arrow next" onClick={nextProject}>&gt;</button>
        </div>
      </section>

      <footer id="contact" className="footer-container">
        <div className="contact-info">
          <h2 className="contact-item">phone : 010-4621-8494</h2>
          <h2 className="contact-item">email : hyeonjuhong67@gmail.com</h2>
        </div>

        <div className="footer-bottom">
          <p>© 2024 Hong Hyeon-ju. All rights reserved.</p>
          <div className="footer-links">
            <a href="https://github.com/hyeonju093" target="_blank" rel="noreferrer">Github</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;