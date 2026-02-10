import React, { useState, useEffect } from 'react';
import ProjectModal from './components/ProjectModal';
import profileimg from './assets/profile.jpg.webp';
import portfolioImg from './assets/portfolioimg.jpg';
import capstoneImg from './assets/teamprojectimg.jpg';
import shopImg from './assets/shoppingmallimg.jpg';
import habitAppImg from './assets/habitappimg.png';
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
1. 구조 선택 과정\n- 실시간성 확보 : 낙상 감지는 초 단위의 데이터를 처리하기 때문에 일반적인 HTTP 요청-응답 구조로는 지연이 발생할 수 있기 때문에 SSE와 Django Channels를 병행하여 사용했습니다
2. 상태 관리 및 데이터 흐름\n- 복합적인 알림 상태 관리 : 낙상이 일어났을 때 발생하는 수많은 이벤트를 효율적으로 관리하기 위해 UI 상태를 동기화하고, SSE를 통해 실시간 데이터의 정합성을 관리했습니다
3. 사용자의 입장 고민\n- 위험도 시각화 : 사용자가 화면을 보지 않고도 상황을 즉각적으로 판단할 수 있도록 낙상 부위에 따른 위험도의 색상과 위젯을 차별화하여 디자인했습니다
4. 개발 과정에서의 도전\n- 리소스 최적화 : 브라우저에서 실시간 스트림과 딥러닝 추론 결과를 동시에 보여주는 것은 부하가 크기 때문에 <img> 태그를 사용하여 대시보드의 성능저하를 방지했습니다`,
      image: capstoneImg,
      tags: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/hyeonju093/Capstone-Design"
    },
    {
      title: "웹 사이트 포트폴리오",
      period: "2025.12 - 2026.01",
      description: "React와 Vite를 사용하여 프론트엔드 개발자 포트폴리오를 웹사이트 형식으로 제작했습니다",
      detailDescription: `기술 스택: React.js, Vite, JavaScript, CSS\n주요 기능: IDE 테마 인터페이스 적용, 반응형 레이아웃, 컴포넌트 기반 UI 구조
1. 현대적인 개발 구축 환경 : 빠른 속도를 제공하는 Vite를 빌드 도구로 채택해 개발 효율성을 극대화했습니다
2. IDE 테마 인터페이스 : 개발자로서의 정체성을 시각적으로 전달하기 위해 IDE 컨셉의 UI를 기획했고, 복잡한 레이아웃 대신 CSS Flexbox와 Grid를 혼합하여 반응형으로 구현했습니다
3. 컴포넌트 기반 설계와 데이터 분리 : 유지보수를 고려해 반복되는 프로젝트 카드나 태그들을 재사용 가능한 컴포넌트로 분리했고, 데이터를 객체화하여 관리하고 있습니다`,
      image: portfolioImg,
      tags: ["React", "CSS", "Vite"],
      link: "https://hyeonju.me.kr/"
    },
    {
      title: "웹 쇼핑몰 구현",
      period: "2026.01",
      description: "React와 Redux Toolkit, Axios를 활용해 실무에서 많이 활용되는 기능으로 구현된 쇼핑몰 사이트를 제작하였습니다",
      detailDescription: `기술 스택: React, Redux Toolkit, React Router, CSS Module, Axios\n주요 기능: FakeStoreAPI를 활용한 상품 탐색기능, 로그인/로그아웃 기능, 커스텀 모달창 구현
1. 구조 선택 과정 및 상태 관리, 데이터 흐름\n- 상품 목록, 장바구니, 로그인 상태 등 여러 컴포넌트에서 공통으로 사용하는 데이터가 많기에 Redux Toolkit을 활용해 데이터 흐름의 복잡성을 해결했습니다
2. 사용자의 입장 고민\n- 새로고침을 해도 사라지지 않는 장바구니 : 사용자가 브라우저를 새로고침하거나 껐다 켰을 때 데이터가 초기화되지 않도록 LocalStorage 동기화를 사용해 웹을 초기화해도 저장된 데이터를 다시 불러오는 로직을 구현했습니다
3. 개발 과정에서의 도전\n- 비동기 데이터 관리 : Axios를 활용해 REST API로부터 상품 데이터를 비동기 호출했습니다
- 컴포넌트 설계 : 반복되는 UI를 효율적으로 관리하기 위한 재사용성에 대해 고민하고 다양한 곳에서 쓰이는 모달 창을 공통 컴포넌트로 분리하여 코드의 중복을 줄이고 UI 일관성을 유지했습니다`,
      image: shopImg,
      tags: ["React", "Redux Toolkit", "CSS Modules", "REST API"],
      link: "https://github.com/hyeonju093/shopping-mall-react"
    },
    {
      title: "습관 관리 어플 구현",
      period: "2026.01 - 2026.02",
      description: "React Native와 Zustand, Firebase를 활용해 하루의 습관을 관리하는 어플리케이션을 제작했습니다",
      detailDescription: `기술 스택: React Native, Expo, TypeScript, Zustand, Firebase\n주요 기능: 로그인/회원가입 기능, 실시간 데이터 동기화, 개인화 대시보드, 성취도 시스템
1. 구조 선택 과정 및 상태 관리\n- 가볍고 직관적인 상태 관리 : React Native 환경에서 직관적인 상태 관리를 위해 Zustand를 도입해 리렌더링 성능을 최적화하고, 코드 가독성을 개선했습니다
2. 데이터 흐름\n- 데이터의 지속성과 실시간성 : 동일한 사용자가 다른 어플로 접속했을 때 데이터가 유실되는 문제와 사용자별 데이터 분리를 위해 Firebase Firestore를 활용해 실시간으로 데이터를 동기화하고 사용자별 맞춤형 대시보드를 구현했습니다
3. 사용자의 입장 고민\n- 직관적인 인터페이스 : 사용자가 습관을 기록하는 과정에서 번거로움을 느끼면 서비스 이탈로 이어진다는 점을 주목하고, 메인 대시보드에서 체크 박스 터치 한 번만으로 즉시 상태가 업데이트 되는 one-tap 로그 기능을 구현했습니다
4. 개발 과정에서이 도전\n- 모바일 UX 최적화 : Expo 환경을 활용해 빠른 프로토타이핑과 테스트 사이클을 구축했고, TypeScript를 적용해 유지보수가 용이한 코드 구조를 확립했습니다
- 실시간 성취도 시스템 : 단순히 기록을 넘어 일일/주간 성취도를 계산하도록 구현하여 사용자의 지속적인 동기부여를 이끌어냈습니다`,
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