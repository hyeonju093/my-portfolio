import React, { useState, useEffect } from 'react';
import ProjectModal from './components/ProjectModal';
import profileimg from './assets/profile.jpg.webp';
import portfolioImg from './assets/portfolioimg.jpg';
import capstoneImg from './assets/teamprojectimg.jpg';
import shopImg from './assets/shoppingmallimg.jpg';
import habitAppImg from './assets/habitAppImg.png';
import './App.css';
import { Tags } from 'lucide-react';

function App() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const fullText = "안녕하세요 프론트엔드 개발자 홍현주입니다.";

  const handleViewMore = (project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

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
      description: "인공지능(MediaPipe, PyTorch)과 Django를 결합하여 실시간 낙상 감지 시스템을 제작했습니다 저는 팀프젝트에서 프론트엔드 구현을 맡았고 HTML을 사용해 프론트엔드를 구현했습니다",
      detailDescription: `기술 스택 : HTML5, CSS, JavaScript, Flask, OpenCV\n주요 기능: 동적 상태 알림 UI, 끊김 없는 영상 스트리밍, 관리자용 대시보드 레이아웃
기술적 해결 과정\n(1) MJPEG를 활용한 실시간 데이터 시각화\n(2) 서버 사이드 렌더링 기반 스켈레톤 UI 드로잉`,
      image: capstoneImg,
      tags: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/TimePise/Capstone-Design"
    },
    {
      title: "웹 사이트 포트폴리오",
      period: "2025.12 - 2026.01",
      description: "React와 Vite를 사용하여 프론트엔드 개발자 포트폴리오를 웹사이트 형식으로 제작했습니다",
      detailDescription: `기술 스택: React.js, Vite, JavaScript, CSS\n주요 기능: IDE 테마 인터페이스 적용, 반응형 레이아웃, 컴포넌트 기반 UI 구조
기술적 해결 과정\n(1) React Router를 활용한 페이지 라우팅\n(2) CSS 구조화를 통한 복잡한 레이아웃 제어`,
      image: portfolioImg,
      tags: ["React", "CSS", "Vite"],
      link: "https://hyeonju.me.kr/"
    },
    {
      title: "웹 쇼핑몰 구현",
      period: "2026.01",
      description: "React와 Redux Toolkit, Axios를 활용해 실무에서 많이 활용되는 기능으로 구현된 쇼핑몰 사이트를 제작하였습니다",
      detailDescription: `기술 스택: React, Redux Toolkit, React Router, CSS Module, Axios\n주요 기능: FakeStoreAPI를 활용한 상품 탐색기능, 로그인/로그아웃 기능, 커스텀 모달창 구현
기술적 해결 과정\n(1) Redux Toolkit을 이용한 상태 관리\n(2) LocalStorage를 활용한 데이터 지속성 유지\n(3) 사용자 경험을 고려한 모달 시스템 설계`,
      image: shopImg,
      tags: ["React", "Redux Toolkit", "CSS Modules", "REST API"],
      link: "https://github.com/hyeonju093/shopping-mall-react"
    },
    {
      title: "습관 관리 어플 구현",
      period: "2026.01 - 2026.02",
      description: "React Native와 Zustand, Firebase를 활용해 하루의 습관을 관리하는 어플리케이션을 제작했습니다",
      detailDescription: `기술 스택: React Native, Expo, TypeScript, Zustand, Firebase\n주요 기능: 로그인/회원가입 기능, 실시간 데이터 동기화, 개인화 대시보드, 성취도 시스템
기술적 해결 과정\n(1) 사용자별 데이터 분리 및 실시간 동기화 이슈\n: 초기에는 로컬 저장소를 사용하였으나, 사용자별 데이터가 구분되지 않기에 Firebase의 Firestore를 도입하여 클라우드 기반 데이터베이스로 전환
(2) 대규모 데이터 상태 관리 최적화\n: Zustand를 상태 관리 라이브러리로 선택하여 코드 복잡도를 낮추고, 필요한 데이터가 변경될 때만 반응하도록 최적화하여 안정적인 UI 제공`,
      image: habitAppImg,
      tags: ["React native", "Expo", "Firebase", "Zustand"],
      link: "https://github.com/hyeonju093/habit-app"
    },
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
        <div className="stars"></div> 
        
        <div className="code-window">
          <div className="window-header">
            <div className="action-buttons">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="file-tab">about_me.js</div>
          </div>

          <div className="code-body">
            <div className="line-numbers">
              <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>
            </div>
            <div className="code-content">
              <pre>
                <code>
                  <span className="keyword">const</span> <span className="variable">developer</span> = {"{"} <br />
                  &nbsp;&nbsp;name: <span className="string">'홍현주'</span>, <br />
                  &nbsp;&nbsp;role: <span className="string">'Frontend Developer'</span>, <br />
                  &nbsp;&nbsp;focus: <span className="string">'User Experience'</span> <br />
                  {"}"};
                </code>
              </pre>
              <h2 className="typing-title">{displayText}<span className="cursor"></span></h2>
              <p className="hero-subtitle">
                안녕하세요 사용자가 오래 머무르고 싶은 웹사이트를 제작하는 <br/> 프론트엔드 개발자 홍현주입니다.<br/>
                변화를 두려워하지 않고 끊임없이 학습하여 서비스의 완성도를 높일 수 있는 <br/> 개발자가 되고 싶습니다.
              </p>
            </div>
          </div>
        </div>
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
              <span className="tag reactnative">React Native</span>
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
              <div className="button-group">
                <a href={projectList[currentIdx].link} target="_blank" rel="noreferrer" className="btn-view">
                  Veiw Project
                </a>
                <button className="btn-more" onClick={() => handleViewMore(projectList[currentIdx])}>
                  View More
                </button>
              </div>
            </div>
          </div>

          <button className="arrow next" onClick={nextProject}>&gt;</button>
        </div>
      </section>

      <ProjectModal
              isOpen={isOpen}
              project={selectedProject}
              onClose={() => setIsOpen(false)}
            />

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